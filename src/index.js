/* eslint-disable no-underscore-dangle, no-param-reassign */

const adLibs = ['yah', 'skrrt', 'damn', 'wut', 'hah', 'aye', 'ohh', 'sup'];
const adLib = (al = adLibs) => al[Math.floor(Math.random() * al.length)];

export default () => ({
  name: 'ad-lib',
  visitor: {
    [
      [
        'Declaration',
        'ExpressionStatement',
        'ReturnStatement',
        'ClassMethod',
        'ClassProperty',
      ].join('|')
    ]: (path, { opts = {} }) => {
      if (
        path._adLibbed ||
        path.node.comments ||
        path.node.trailingComments ||
        path.node.leadingComments
      ) return;

      const comments = [
        {
          type: 'CommentLine',
          value: ` ${adLib(opts.adLibs)}`,
          leading: false,
          trailing: true,
        },
      ];

      path.node.comments = comments;
      path.node.trailingComments = comments;
      path._adLibbed = true;
    },

    Statement: (path, { opts = {} }) => {
      if (path._adLibbed) return;

      [
        ...(path.node.comments || []),
        ...(path.node.trailingComments || []),
        ...(path.node.leadingComments || []),
      ].reduce(
        (cache, comment) => {
          if (cache.indexOf(comment) > -1) return cache;

          if (comment.type === 'CommentBlock') {
            comment.value = `${comment.value}*\n * ${adLib(opts.adLibs)}\n *\n `;
          }

          if (comment.type === 'CommentLine') {
            comment.value = `${comment.value} | ${adLib(opts.adLibs)}`;
          }

          return cache.concat(comment);
        },
        [],
      );

      path._adLibbed = true;
    },
  },
});

/* eslint-disable no-underscore-dangle, no-param-reassign */

const adLibs = ['yah', 'skrrt', 'damn', 'wut', 'hah', 'aye', 'ohh', 'sup'];
const adLib = () => adLibs[Math.floor(Math.random() * adLibs.length)];

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
    ]: (path) => {
      if (path._adLibbed || path.node.comments) return;

      path.node.comments = [
        {
          type: 'CommentLine',
          value: ` ${adLib()}`,
          leading: false,
          trailing: true,
        },
      ];

      path._adLibbed = true;
    },

    Statement: (path) => {
      if (path._adLibbed) return;

      (path.node.comments || []).forEach(
        (comment) => {
          if (comment.type === 'CommentBlock') {
            comment.value = `${comment.value}*\n * ${adLib()}\n *\n `;
          }

          if (comment.type === 'CommentLine') {
            comment.value = `${comment.value} | ${adLib()}`;
          }

          path._adLibbed = true;
        },
      );
    },
  },
});

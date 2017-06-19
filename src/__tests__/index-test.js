import pluginTester from 'babel-plugin-tester';
import plugin from '../index';

pluginTester({
  plugin,
  pluginOptions: {
    adLibs: ['test'],
  },
  babelOptions: {
    presets: [
      'react',
    ],
  },
  tests: {
    'add to declaration': {
      code: `
        var hello = 'yo';
      `,
      output: `
        var hello = 'yo'; // test
      `,
    },
    'add to line comment': {
      code: `
        console.log('yo'); // TODO: Get lit
      `,
      output: `
        console.log('yo'); // TODO: Get lit | test
      `,
    },
    'add to block comment': {
      code: `
        /*
         * This is how to get turnt
         */

        console.log('yo');
      `,
      output: `
        /*
         * This is how to get turnt
         *
         * test
         *
         */

        console.log('yo');
      `,
    },
    'everything together': {
      code: `
        /*
         * This is how to get turnt
         */

        var hello = 'yo';

        console.log(hello); // TODO: Get lit
      `,
      output: `
        /*
         * This is how to get turnt
         *
         * test
         *
         */

        var hello = 'yo';

        console.log(hello); // TODO: Get lit | test
      `,
    },
    'react example': {
      code: `
        import React, { Component } from 'react';

        const Banger = class extends Component {
          render() {
            return (
              <marquee>Damn, son! Where did you find this one?</marquee>
            );
          }
        };

        export default Banger;
      `,
      output: `
        import React, { Component } from 'react'; // test


        const Banger = class extends Component {
          render() {
            return React.createElement(
              'marquee',
              null,
              'Damn, son! Where did you find this one?'
            ); // test
          } // test

        }; // test


        export default Banger; // test
      `,
    },
  },
});

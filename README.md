# babel-plugin-ad-lib

A Babel plugin to make your code lit AF 🔥

> Generally redundant improvised or unrehearsed lines that are frequently used
> in rap music. &mdash; [Urban Dictionary][1]

## Example

### Before

```js
import React, { Component } from 'react';

const Banger = class extends Component {
  state = {
    banging: true,
  };
  render() {
    return (
      <marquee>Damn, son! Where did you find this one?</marquee>
    );
  }
};

export default Banger;
```

### After

```js
import React, { Component } from 'react';// aye

const Banger = class extends Component {
  state = {
    banging: true,
  };// hah
  render() {
    return <marquee>Damn, son! Where did you find this one?</marquee>;// hah
  }// skrrt
};// hah

export default Banger;// damn
```

## Credit

[A tweet][2] by [Manny404][3] made me do this.

## Resources

*   [AST explorer example][4]
*   [Rap Genius list of ad libs by artist][5]
*   [The Rap Board: Signature catchphrases from your favorite rappers.][6]

[1]: http://www.urbandictionary.com/define.php?term=ad+lib
[2]: https://twitter.com/mannynotfound/status/853407691468943360
[3]: https://github.com/mannynotfound
[4]: https://astexplorer.net/#/gist/8c34b6dff0bbfb3832d420314b148d13/212c59c63517d73d1aaf7d224cfbec055587ade6
[5]: https://genius.com/Rap-genius-ad-libs-explained-lyrics
[6]: http://therapboard.com/

# Usage

```js
const { WebpackRemovePlugin } = require('@geeeger/webpack-remove-plugin');
// some webpack config
module.exports = {
    plugins: [
        new WebpackRemovePlugin({
            start: '/* remove-start */',
            end: '/* remove-end */'
        }, ['.js'])
    ]
}
```

```js
// xxxx.js
// before
import React from 'react';
import logo from './logo.svg';
import './App.css';
/* remove-start */
alert('defaultProps=3432432')
/* remove-end */

// after
import React from 'react';
import logo from './logo.svg';
import './App.css';

```
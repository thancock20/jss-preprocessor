# JSS Preprocessor

Use [JSS](https://github.com/cssinjs/jss) as a preprocessor to create CSS files.

## Installation

Install globally with npm:

```
npm install -g jss-preprocessor
```

Or install as a dev dependency and use in npm scripts.

## Usage:

Write a js file with an export that is valid JSS. For example:

```javascript
const primaryColor = 'red';
const secondaryColor = 'blue';

module.exports = {
  h1: {
    fontSize: '64px',
    color: primaryColor
  },
  ul: {
    backgroundColor: secondaryColor
  }
};
```

 jss-preprocessor includes [jss-preset-default](https://github.com/cssinjs/jss-preset-default) to add the following features:
 * [Extend rules and rule definitions](https://github.com/cssinjs/jss-extend)
 * [Nested selectors and pseudo selectors](https://github.com/cssinjs/jss-nested)
 * [Camel cased rule properties](https://github.com/cssinjs/jss-camel-case)
 * [Add default units to numeric values](https://github.com/cssinjs/jss-default-unit)
 * ~~[Handle vendor prefixes](https://github.com/cssinjs/jss-vendor-prefixer)~~ Actually, no. Unfortunately, this plugin doesn't work that way.
 * [Style properties extend each other instead of override](https://github.com/cssinjs/jss-props-sort)

Then use jss-preprocessor like this:

```
jss-preprocessor --input styles.js --output styles.css
```

Or use shorter options:

```
jss-preprocessor -i styles.js -o styles.css
```

Also, a js file can be watched for changes by using the --watch or -w option:

```
jss-preprocessor -i styles.js -o styles.css -w
```

# JSS Preprocessor

Use [JSS](https://github.com/cssinjs/jss) as a preprocessor to create CSS files.

## Installation

Install globally with npm:

```
npm install -g jss-preprocessor
```

Or install as a dev dependency and use in npm scripts.

## Usage:

Write a js file with a default export that is valid JSS. For example:

```javascript
const primaryColor = 'red';
const secondaryColor = 'blue';

export default {
  h1: {
    fontSize: '64px',
    color: primaryColor
  },
  ul: {
    backgroundColor: secondaryColor
  }
};
```

*Note: jss-preprocessor includes [jss-preset-default](https://github.com/cssinjs/jss-preset-default).*

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

# JSS Preprocessor

Use [JSS](https://github.com/cssinjs/jss) as a preprocessor to create CSS files.

 JSS Preprocessor includes JSS plugins to add the following features:
 * [Extend rules and rule definitions](https://github.com/cssinjs/jss-extend)
 * [Nested selectors and pseudo selectors](https://github.com/cssinjs/jss-nested)
 * [Camel cased rule properties](https://github.com/cssinjs/jss-camel-case)
 * [Add default units to numeric values](https://github.com/cssinjs/jss-default-unit)
 * [Style properties extend each other instead of override](https://github.com/cssinjs/jss-props-sort)


 Also, JSS Preprocessor uses autoprefixer to automatically add vendor prefixes.

## Installation

Install globally with npm:

```
npm install --global jss-prepocessor
```

Or install as a dev dependency and use in npm scripts.

```
npm install --save-dev jss-preprocessor
```

## Usage:

Write a js file with an export that is valid JSS. For example:

```javascript
const primaryColor = 'red';
const secondaryColor = 'blue';

module.exports = {
  header: {
    fontSize: 64,
    color: primaryColor,
    display: 'flex'
  },
  ul: {
    backgroundColor: secondaryColor
  }
};
```

Will result in the following CSS:
```css
header {
  color: red;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 64px;
}
ul {
  background-color: blue;
}
```


Then use JSS Preprocessor like this:

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

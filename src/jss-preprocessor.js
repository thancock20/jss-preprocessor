#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import program from 'commander';

import autoprefixer from 'autoprefixer';
import postcss from 'postcss';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

program
  .version(require('../package.json').version)
  .usage('[options]')
  .option('-i, --input <input>', 'path to js file with valid JSS as default export')
  .option('-o, --output <output>', 'path to output css file')
  .option('-w, --watch', 'watch for changes to input file')
  .parse(process.argv);

if (program.input[0] != '/') program.input = path.resolve(process.cwd(), program.input);
if (program.output[0] != '/') program.output = path.resolve(process.cwd(), program.output);

const requireUncached = (module) => {
  delete require.cache[require.resolve(module)];
  return require(module);
};

const convert = (eventType, filename) => {
  const styles = requireUncached(program.input);
  const sheet = jss.createStyleSheet(styles, { named: false });
  postcss([ autoprefixer ]).process(sheet.toString()).then(function (result) {
    result.warnings().forEach(function (warn) {
      console.warn(warn.toString());
    });
    fs.writeFileSync(program.output, result.css);
    console.log('CSS output to ', program.output);
  })
};

convert(null, null);

if (program.watch) {
  fs.watchFile(program.input, convert);
  console.log('Watching', program.input, 'for changes');
}

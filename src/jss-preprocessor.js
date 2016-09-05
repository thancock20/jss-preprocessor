#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import program from 'commander';

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
  fs.writeFileSync(program.output, sheet.toString());
  console.log('CSS output to ', program.output);
};

convert(null, null);

if (program.watch) {
  fs.watch(program.input, convert);
  console.log('Watching', program.input, 'for changes');
}

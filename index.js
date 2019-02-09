#!/usr/bin/env node

const fs = require('fs');
const path = require('path')
const child_process = require('child_process');

var run_blacklist = new Set([
  '.eslintrc',
  'false',
  'http',
  'index',
  'set_timeout',
])

fs.readdirSync('.').forEach(file => {
  file_parse = path.parse(file)
  if (
    fs.statSync(file).isFile() &&
    file_parse.ext === '.js'
  ) {
    if (!run_blacklist.has(file_parse.name)) {
      console.log(file);
      child_process.execFileSync(path.resolve(file));
    }
  }
});

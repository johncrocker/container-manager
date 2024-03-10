var path = require('path');
var nconf = require('nconf');


  //
  //  any overrides
  //
  nconf.overrides({
    'always': 'be this value'
  });

  //
  //  `process.env`
  //  `process.argv`
  //
  nconf.env().argv();

  //
  // Values in `default.json`
  //
  nconf.file(path.join(__dirname, 'config', 'default.json'));
console.log(path.join(__dirname, 'config', 'default.json'));
  //
  // Or searching from a base directory.
  // Note: `name` is optional.
  //
  nconf.file({
    file: 'default.json',
    dir: path.join(__dirname, 'config'),
    search: true
  });

  //
  // Any default values
  //
  nconf.defaults({
    'if nothing else': 'use this value'
  });

  module.exports = nconf;

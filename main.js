#!/usr/bin/env node

var assert = require('assert')

//#shebang on the first line works on Node even if Javascript comments don't start with hash.
// node just does a special check on the first line.

//#builtins

  //#console #stdout

    console.log('stdout %d', 1);
    console.error('stderr')

//#module

  // Only exported variables are visible:

  var m = require('./module.js')
  assert.equal(m.v, undefined)
  assert.equal(m.v_export, 1)

//#global

  // In node, top level is not global: it is only local to the module.

  var m = require('./module.js')
  assert.equal(global.v, 1)

//#modules

  //#assert

    var assert = require('assert')

    assert.equal(0, 0)
    //assert.equal(0, 1)
    //assert.equal(0, 1, 'assert.equal msg')

//#document #window

  // Elements which represent browser concepts are not defined in Noje.js.

  assert.throws(
    function() {
      document.write('document write')
    },
    ReferenceError
  )

  // This can be used to check if the current code is running on nodejs or on a browser:

  assert.equal(typeof window, 'undefined')

#!/usr/bin/env node

//#shebang on the first line works on Node even if Javascript comments don't start with hash.
// node just does a special check on the first line.

//#builtins

  //#console #stdout

    console.log('stdout %d', 1);
    console.error('stderr')

//#modules

  //#assert

    var assert = require('assert')

    assert.equal(0, 0)
    //assert.equal(0, 1)
    //assert.equal(0, 1, 'assert.equal msg')

//#document

  // Not defined.

  assert.throws(
    function() {
      document.write('document write')
    },
    ReferenceError
  )

#!/usr/bin/env node

var assert = require('assert')

//#shebang on the first line works on Node even if Javascript comments don't start with hash.
// node just does a special check on the first line.

//#builtins

  //#console

    // log to streams.

    // Standard way to write to messages: more flexible than explicit stdout / err as they can be redirected
    // to other places as needed.

    // #log goes to stdout by default and takes printf formated strings. Automatically adds trailing newline.

    console.log('log %d', 1);

    // #error goes to stderr by default:

    console.error('error')

  //#process

    //#stdout #stderr

      // Prefer `log` functions whenever possible.

      process.stdout.write('stdout\n')
      process.stdout.write('stderr\n')

    //#stdin

      // Read stdin until closed.

      if (true) {
        process.stdin.setEncoding('utf8')
        var input = ''
        process.stdin.on('readable', function() {
          var chunk = process.stdin.read()
          process.stdout.write('stdin.on: chunk = ' + chunk + '\n')
          if (chunk !== null ) {
            input += chunk
          }
        })
        process.stdin.on('end', function() {
          process.stdout.write('stdin end: input = ' + input + '\n')
        })
      }

    //#argv

      console.log('argv = ' + process.argv.join(', '))

      // Sample output: `node, /path/to/script.js`.

//#module

  // Only exported variables are visible:

  var m = require('./module.js')
  assert.equal(m.v, undefined)
  assert.equal(m.v_export, 1)

//#global

  // In node, top level is not global: it is only local to the module.

  var m = require('./module.js')
  assert.equal(global.v, 1)

//#exports

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

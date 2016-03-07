#!/usr/bin/env node

var assert = require('assert')

// # shebang on the first line works on Node
// even if Javascript comments don't start with hash.
// node just does a special check on the first line.

// # this

  // Unlike inside a browser, `this` on the module scope is not equal to `window`, which contains all global values.

  this.not_defined = 1
  assert.throws(
    function() {
      not_defined
    },
    ReferenceError
  )

// # global objects

// # builtins

  // Full list: http://nodejs.org/api/globals.html

  // # console

    // log to streams.

    // Standard way to write to messages: more flexible than explicit stdout / err as they can be redirected
    // to other places as needed.

    // # log goes to stdout by default and takes printf formated strings. Automatically adds trailing newline.

    console.log('log %d', 1)

    // # error goes to stderr by default:

    console.error('error')

  // # process

    // # stdout #stderr

      // Prefer `log` functions whenever possible.

      process.stdout.write('stdout\n')
      process.stdout.write('stderr\n')

    // # stdin

      // Read stdin until closed.

      // Since this is assyncrhonous, `after stdin.on` message will show
      // and the rest of the program will finish running before you hit Ctrl + D.

      if (false) {
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
        console.log('after stdin.on')
      }

    // # exit

      // Exit with given exit status:

      //process.exit(1)

    // # exit event

      // Run some code just before the process is about to finish.

      // Since it's the last thing, cannot run anything asynchronous from it.

      process.on('exit', function() {
        console.log('process.on("exit")')
      })

    // # argv

      console.log('argv = ' + process.argv.join(', '))

      // Sample output: `node, /path/to/script.js`. Same for `./index.js` and `node index.js`.

      // A good way to ignore the `node scriptname.js` initial arguments it to use:

      arg = process.argv.slice(2)

  // # setTimeout

    // Compatible interface with Js.

    if (false) {
      setTimeout(function(){
          console.log('setTimeout 1s')
      }, 1000)
    }

  // # __dirname

  // # __filename

    console.log('__dirname  = ' + __dirname)
    console.log('__filename = ' + __filename)

// # module

// # require

// # export

    require('./require')

// # stdlib

  // # assert

    var assert = require('assert')

    assert.equal(0, 0)
    //assert.equal(0, 1)
    //assert.equal(0, 1, 'assert.equal msg')

  // # fs

  // # file io

    // Methods can come in both synchronous and assynchronous versions.

    // There are multiple possibilities:
    // - low level: open, close, read, write. Bijection to POSIX.
    // - mid level: createReadStream, fs.createWriteStream. TODO.
    // - high level: readFile, writeFile.

    var fs = require('fs')
    var filename = 'f.tmp'
    var data = 'data'

    // # readFile #writeFile

      // Read write entire file at once.

      // Automatically closes file for us.

      // Very convenient if you know that the entire file fits in memory.

      // asynchronous: the rest of the program will continue running until.
      // the read callback is done (could take a long time since require disk IO).

      // The encoding is optional, but if not given returns a Buffer object rather than a string.

      fs.writeFileSync(filename, data, 'utf8')
      assert.equal(fs.readFileSync(filename, 'utf8'), data)
      fs.unlinkSync(filename)

      fs.writeFile(filename, data, 'utf8', function(err) {
        if (err) {
          console.log('write failed')
        } else {
          fs.readFile(filename, 'utf8', function(err, buf) {
            if (err) {
              console.log('read failed')
            } else {
              assert.equal(buf, data)
            }
            fs.unlink(filename)
          })
        }
      })

      // BAD. Be careful with async: if you try to use the same file
      // from two threads you may have problems. That would happen here
      // because the above open is still running.

      if (false) {
        fs.writeFileSync(filename, data)
        assert.equal(fs.readFileSync(filename), data)
        fs.unlinkSync(filename)
      }

  // # os

    var os = require('os')
    console.log('os.tmpdir() = ' + os.tmpdir())

  // # temporary files

    // Not possible atomically with stdlib. Third party modules exist:
    // http://stackoverflow.com/questions/7055061/nodejs-temporary-file-name

    // Possible to find tmp dir with `os.tmpdir()`.

  // # child_process

    // # exec

      var child_process = require('child_process')

      child_process.exec(
        'echo out && echo err 1>&2',
        function(error, stdout, stderr) {
          // null if no error.
          // Error if return status != 0.
          if (error !== null) {
            console.log(error)
          }
          console.log('stdout = ' + stdout)
          console.log('stderr = ' + stderr)
        }
      ).on('exit', function(status){
        console.log('status = ' + status)
      })

      child_process.exec(
        'exit 1',
        function(error, stdout, stderr) {
          if (error !== null) {
            console.log(error)
          }
        }
      ).on('exit', function(status){
        console.log('status = ' + status)
      })

    // # spawn

      // TODO vs exec

    // # util

// # document

// # window

  // Elements which represent browser concepts are not defined in Noje.js.

  assert.throws(
    function() {
      document.write('document write')
    },
    ReferenceError
  )

  // This can be used to check if the current code is running on nodejs or on a browser:

  assert.equal(typeof window, 'undefined')

// # third party

  // # open

    // Open using default browser:

    var open = require('open')
    //open('http://example.com');

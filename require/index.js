#!/usr/bin/env node

// Require and multi-file cheat.

var assert = require('assert')

// Only exported variables are visible.

var m = require('./module.js')
assert.equal(m.v, undefined)
assert.equal(m.v_exports, 3)
assert.equal(m.v_module_exports, 4)

/*
#require search #path

Docs: http://nodejs.org/api/modules.html#modules_all_together

Follows the CommonJS spec.

Approximation:

If a file is not founc, Node also adds `.js`, `.json` and `.node` extensions.

Json are parsed as Javascript objects. It is more explicit to read the file and parse it with ES5's JSON.

Best never to use extensions as it allows you to convert files to directries later on.

- if argument is a path (starts with `/`, `./` or `../`), use the path.
    Needs to start like that for relative paths.
- load core module with the name (stdlib)
- look for it inside `node_modules` in current directory. Go up the directory tree.
- look for it inside `NODE_PATH` environemnt path variable.
    `require.paths` used to exist but was removed.
*/

// Explicit name.
var m = require('./module.js')

// `.js` added.
var m = require('./module')

// Cannot require directory with extension.
assert.throws(
  function() {
    require('./module_dir.js')
  },
  Error
)

// Require json.
var m = require('./module_json')
assert.equal(m.a, "0")
assert.equal(m.b, "1")

/*
`module.exports` vs `exports`: <http://stackoverflow.com/questions/7137397/module-exports-vs-exports-in-nodejs>

-   `module.exports.a = x` and `exports.a = x` are the same.

-   `module.exports = y` at any points makes all `exports.a = x` and `module.exports.a = x` be ignored.

    This approach is less flexible, but it can be convenient for modules whose functionality
    is contained all under a single function.
*/

var m = require('./module_assign.js')
assert.equal(m.a, undefined)
assert.equal(m, 2)
assert.equal(m.b, undefined)

//#global

  // In node, top level is not global: it is only local to the module.

  var m = require('./module.js')
  assert.equal(global.v, 2)

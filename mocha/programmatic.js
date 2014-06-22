var fs = require('fs')
var path = require('path')

var Mocha = require('mocha')

var mocha = new Mocha({
  reporter: 'spec'
})

// Add files to be tested.
mocha.addFile('index.js')

// Run tests.
mocha.run(function(failures){
  process.on('exit', function () {
    process.exit(failures)
  })
})

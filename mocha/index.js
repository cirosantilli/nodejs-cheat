var assert = require('assert')
var chai = require('chai')

// #describe and #it are automatically required when running `mocha`.
describe('index.js', function(){

  // Failure happens when an exception is thrown inside it.
  // Any library that throws exceptions on failure can be used.
  it('throw', function(){
    throw new Error('fail')
  })
  it('fail', function(){
    assert(false)
  })
  it('chai.fail', function(){
    chai.assert(false)
  })

  // Nested tests show nested failure message descriptions.
  describe('describe0', function(){
    it('fail', function(){
      throw new Error('fail')
    })
    describe('describe1', function(){
      it('fail', function(){
        throw new Error('fail')
      })
    })
  })
})

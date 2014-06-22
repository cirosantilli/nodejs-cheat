var assert = require('assert')
var chai = require('chai')

// #describe and #it are automatically required when running `mocha`.
describe('index.js', function() {

  // Failure happens when an exception is thrown inside it.
  // Any library that throws exceptions on failure can be used.
  it('pass', function() {
  })
  it('throw', function() {
    throw new Error()
  })
  it('assert', function() {
    assert(false)
  })
  it('chai.assert', function() {
    chai.assert(false)
  })

  // TODO I have seen return values from the `it` callback. What do they do?

  //#asynchronous tests #done

    // Use the `done` callback argument.
    //
    // Mocha will only continue once it is called.

    var a = 0
    it('async', function(done) {
      setTimeout(function() {
        a = 1
        // Without this call, next assert may fail.
        done()
      }, 1000)
    })
    it('after async', function() {
      assert.equal(a, 1)
    })

    // TODO what happens is values are passed to done?
    // Docs say errors should be passed, but that does not fail the tests.

    it('done', function(done) {
      return done(new Error('passed to done'))
    })

  // Nested tests show nested failure message descriptions.
  //
  // Nested tests run after all top level tests.
  describe('describe0', function() {
    it('fail', function() {
      throw new Error()
    })
    describe('describe1', function() {
      it('fail', function() {
        throw new Error()
      })
    })
  })
  it('fails after nested', function() {
    throw new Error()
  })
})

#!/usr/bin/env coffee

assert = require('assert')

if '##var'
  ###
  Var is automatically added in many cases.

  Each compiled Javascript file is put inside an IIFE.

  To expose global variables on both browser and Node.js do:

    root = exports ? this
    root.foo = -> 'Hello World'

  <http://stackoverflow.com/questions/4214731/coffeescript-global-variables>

  To avoid wrapping the code ina closure, compile with the `-b` option:
  <http://stackoverflow.com/questions/5693211/getting-rid-of-coffeescripts-closure-wrapper>
  This is strongly discouraged as it exposes everything globaly.
  ###

  # Variables assigned inside functions before use automatically get `var` and are local:

  a = 0
  f = ->
    a = 1
  assert.equal a, 0

  # Variables used before being assigned don't get `var` and are closure context:

  a = 0
  f = ->
    x = a + 1
    a += 1
    x
  assert.equal f(), 1
  assert.equal a, 1

  # Conclustion: very insane! Difficult to predict if something is local or a closure variable.

if '##? ##existential operator'

  # Return true iff not (undefined or null).

  assert not undefined?
  assert not null?
  assert 0?
  assert ''?

  if '##?='

    a = 0
    a ?= null
    assert.equal a, 0

  if '##ternary ? form'

    a = null
    b = a ? 0
    assert.equal b, 0

    a = 1
    b = a ? 0
    assert.equal b, 1

  if '##accessor form ##?. ##()'

    # Accessor form: only calls further functions on a chain if nothing was null or undefined
    # instead of throwing TypeError.

    # If one was null or undefined, return undefined.

    # TODO what is ?()?

    obj =
      f: 0
      g: null

    assert.equal obj.g?.asdf, undefined
    assert.equal obj.g?(),    undefined

if '##function'

  ###
  Like in Ruby:

  -   if not explicit, return value is result of last expression.

  -   call parenthesis can be ommited if no ambiguity arises.
      Function call must take at least one argument for call to work without parenthesis:
      without arguments nor parenthesis it's the function object itself.

  Possible style: omit parenthesis of the top level function call of a line,
  use for inner calls.
  ###

  square = (x) -> x * x
  assert.equal square(2), 4
  square = (x) ->
    x * x
  assert.equal square(2), 4

  cte = -> 0
  # Must use () on call because takes no arguments.
  assert.equal cte(), 0
  cte = () -> 0
  assert.equal cte(), 0

  if '##Pass multiple annonymous function arguments'

    takeCallbacks = (cb0, cb1) ->
      cb0() + cb1()

    # Things get a bit ugly:

    x = takeCallbacks ->
        1 + 1
      , ->
        2 + 2
    assert.equal x, 6

    x = takeCallbacks \
      ->
        1 + 1
      , ->
        2 + 2
    assert.equal x, 6

    x = takeCallbacks(
      ->
        1 + 1
      , ->
        2 + 2
    )
    assert.equal x, 6

  if '##bind ##fat arrow ##=>'

    # Function definition with fat arrow binds the current this (`@`).

    takeCallback = (cb) ->
      cb()
    class C
      constructor: ->
        @instanceVariable = 0
      instanceMethodFail: ->
        takeCallback ->
          @instanceVariable
      instanceMethod: ->
        takeCallback =>
          @instanceVariable
    c = new C
    assert.equal c.instanceMethodFail(), undefined
    assert.equal c.instanceMethod(), 0

  if '##splat ##... ##vararg'

    # Variable number of call parameters.

    # Gets transformed into an Array through arguments + slice.

    f = (a, b...) ->
      assert.equal b.constructor, Array
      sum = a
      b.forEach (x) ->
        sum += x
      sum
    assert.equal f(1, 2, 3), 6

    # Makes argument forwarding convenient:

    f = (a, b) ->
      a + b
    g = (args...) ->
      f.apply(@, arguments) + 1
    assert.equal g(1, 2), 4

if '##string'

  # Supports interpolation in double quotes like in Ruby:

  a = 'b'
  assert.equal "#{a}", 'b'
  assert.equal '#{a}', "\#{a}"

  if '##Multiline string literal'

    assert.equal 'a
        b
    c
      d', 'a b c d'

    # Indentation is ignored completely: a single space is added.

    # The better style if of course:
    #
    assert.equal 'a
      b
      c
      d', 'a b c d'

  if '##Block string literal'

    # - newlines are kept
    # - indentaion is kept, relative to smallest indented part of the string:

    assert.equal '''a
        b
    c
      d''', 'a\n    b\nc\n  d'

    # Better style for the above is:

    assert.equal '''a
          b
      c
        d''', 'a\n    b\nc\n  d'

if '##Array'

  # If one element per line in literal can omit commas:

  assert.equal [
    0
    1
  ].length, [0, 1].length

if '##object literals;'

  # If one key value per line, can omit commas.

  assert.equal {
    a: 0
    b: 1
  }.a, 0

  # In most cases, can omit brackets:

  obj =
    a: 0
    b: 1
  assert.equal obj.a, 0
  assert.equal obj.b, 1

if '##class'

  if '##Instance variables ##@ ##this'

    # Denoted by at `@` inside methods.

    # `@a` is a shorthand for `@.a`.

    class C
      constructor: (instance1, @instance2) ->
        @instance1 = instance1

    c1 = new C(1, 2)
    c2 = new C(3, 4)
    assert.equal c1.instance1, 1
    assert.equal c1.instance2, 2
    assert.equal c2.instance1, 3
    assert.equal c2.instance2, 4

  if '##instance methods'

    # Attached to prototype: `C.prototype.instanceMethod1 =`.

    class C
      instanceMethod1: (x) ->
        x + @instanceMethod2()
      instanceMethod2: ->
        2
    c = new C
    assert.equal c.instanceMethod1(1), 3

  if '##Static variables.'

    # `@var:` syntax.

    # Attached to constructor.

    class C
      @static: 0
      instanceMethod: ->
        @constructor.static += 1
    C.staticMethod = ->
      @static += 1

    c = new C
    assert.equal c.constructor.static, 0
    assert.equal C.static, 0

    c.instanceMethod()
    assert.equal c.constructor.static, 1
    assert.equal C.static, 1

    C.staticMethod()
    assert.equal c.constructor.static, 2
    assert.equal C.static, 2

  if '##inheritance'

    class A
      constructor: ->
        @a = 0

    class B extends A
      # Overrides the base constructor.
      constructor: ->
        @b = 1

    class C extends A
      # Also call base ctor with super().
      constructor: ->
        @c = 2
        super()

    class D extends A
      # If no constructor, use base.
      0

    a = new A
    b = new B
    c = new C
    d = new D
    assert.equal a.a, 0
    assert.equal b.a, undefined
    assert.equal c.a, 0
    assert.equal c.a, 0
    assert.equal c.c, 2
    assert.equal d.a, 0

if 'statement return value'

  # Many statements that don't return in Javascript do return in Coffescript.

  a = if false
      0
    else
      1
  assert.equal a, 1

  a = switch 1
    when 0
      0
    when 1
      -1
    else
      -2
  assert.equal(a, -1)

if '##`` ##backticks ##raw Javascript'

  f = `function() {
    return 0
  }`
  assert.equal(f(), 0)


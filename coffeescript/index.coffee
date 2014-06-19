#!/usr/bin/env coffee

assert = require('assert')

if '##var'
  ###
  Var is not needed.

  The entire code is put inside IIFE.

  Expose global variables: <http://stackoverflow.com/questions/4214731/coffeescript-global-variables>
  ###

  a = 1

if '##function'

  ###
  Like in Ruby:

  -   if not explicit, return value is result of last expression.

  -   call parenthesis can be ommited if no ambiguity arises.
      Function call must take at least one argument.

      Without arguments nor parenthesis it's the function object itself.

  Possible style: omit parenthesis of the top level function call of a line,
  use for inner calls.
  ###

  square = (x) -> x * x
  assert.equal square(2), 4
  cte = -> 0
  assert.equal cte(), 0
  cte = () -> 0
  assert.equal cte(), 0

if '##string'

  # Supports substitution in double quotes like in Ruby:

  a = 'b'
  assert.equal "#{a}", 'b'
  assert.equal '#{a}', "\#{a}"

  # Multiline literal:

  assert.equal 'a
    b
    c', 'a b c'

if '##Array'

  # If one element per line in literal can omit commas:

  assert.equal [
    0
    1
  ].length, [0, 1].length

if '##object'

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

  #class C

  0

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


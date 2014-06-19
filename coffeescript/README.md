CoffeScript is a language that compiles into Javascript.

It "corrects" much of Javascript usually undesired behaviour, and produces slightly shorter code,
in particular for object oriented patterns.

The resulting language looks much like indent based Ruby.

GitHub recommends usage of CoffeScript instead of plain Javascript.

Other people are against CoffeScript as ultimately you have to convert every statement
to Javascript in your head to know what is going on.

Install:

    npm install -g coffee-script

# Ups and downs

Upsides:

- write less
- avoid newbie mistakes mistakes

Downsides:

- learn yet another language
- one extra compile step. But now you can run programs simply with `coffee program.coffee`.
- if an exception is raised at line X, you need a tool to discover what CoffeScript line it is.
    The above solution is not yet perfect: <http://stackoverflow.com/questions/15291424/coffeescript-source-maps-for-nodejs-development>

# Invocation

Run `.coffee` file:

    coffee a.coffee

Compiles to `.js` and runs with `node`.

Compile to `a.js`:

    coffee -c a.coffee

`watch`: compile automatically on file save for any files under current directory:

    coffee -cw .

Also set output directory:

    coffee -cw -o "./dist/" .

Only watch a single file:

    coffee -cw a.coffee

# See also

CSON: CoffeScript for JSON: <https://github.com/bevry/cson>

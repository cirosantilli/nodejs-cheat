CoffeScript is a language that compiles into Javascript.

It "corrects" much of Javascript usually undesired behaviour, and produces slightly shorter code,
in particular for object oriented patterns.

The resulting language looks much like indent based Ruby.

GitHub recommends usage of CoffeScript instead of plain Javascript.

Other people are against CoffeScript as ultimately you have to convert every statement
to Javascript in your head to know what is going on.

Install:

    npm install -g coffee-script

# Browser

It is possible to run CoffeeScript on the browser, but it is not recommended to do so
unless the goal is to allow users to input CoffeeScript because:

- the compiler itself is quite large, 39Kb vs jQuery's 29Kb
- everything is evaluated inside a single `eval` statement, making it harder to debug

See <browser.html> for a working example.

Discussion: <http://stackoverflow.com/questions/5170473/is-there-a-way-to-send-coffeescript-to-the-clients-browser-and-have-it-compiled>

# Ups and downs

Upsides:

- write less
- avoid newbie mistakes mistakes

Downsides:

- learn yet another language
- one extra compile step. But now you can run programs simply with `coffee program.coffee`.
- if an exception is raised at line X, you need a tool to discover what CoffeScript line it is.
    The above solution is not yet perfect: <http://stackoverflow.com/questions/15291424/coffeescript-source-maps-for-nodejs-development>

# Style guides

- <https://github.com/polarmobile/coffeescript-style-guide>

## Lint tools

-   <https://github.com/clutchski/coffeelint>

    Grunt plugin: <https://github.com/vojtajina/grunt-coffeelint>

# Documentation generation

-   <https://github.com/coffeedoc/codo>

-   <https://github.com/atom/biscotto>

    TomDoc notation.

    GitHub backed.

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

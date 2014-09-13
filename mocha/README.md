# Mocha

Dominating unit test framework by visionmedia.

Mocha can be used in the following ways:

-   via the executable `mocha`. Will automatically require `mocha` and functions like `describe` and `it`.

    Downside: harder to automate.

-   from Node with `require('mocha')`. More boilerplate, but more flexible.

-   through one of several Grunt plugins. The best way in real projects:

    - <https://github.com/kmiyashiro/grunt-mocha>
    - <https://github.com/pghalliday/grunt-mocha-test>
    - <https://github.com/jdcataldo/grunt-mocha-phantomjs>

## CLI invocation

Run all tests all `.js` files in current directory:

    mocha .

Only in single `.js` file:

    mocha a.js

Coffee 1.7:

    mocha --compilers coffee:coffee-script/register coffee.coffee

All `.js` and `.coffee` files in current dir:

    mocha --compilers coffee:coffee-script/register .

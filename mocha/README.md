Dominating unit test framework by visionmedia.

Run all tests all `.js` files in current directory:

    mocha .

Only in single `.js` file:

    mocha a.js

Coffee 1.7:

    mocha --compilers coffee:coffee-script/register coffee.coffee

All `.js` and `.coffee` files in current dir:

    mocha --compilers coffee:coffee-script/register .

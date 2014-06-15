CoffeScript is a language that compiles into Javascript.

It "corrects" much of Javascript usually undesired behaviour, and produces slightly shorter code.

The resulting language looks much like indent based Ruby.

GitHub recommends usage of CoffeScript instead of plain Javascript.

Other people are against CoffeScript as ultimately you have to convert every statement
to Javascript in your head to know what is going on.

Install:

    npm install -g coffee-script

Compile automatically on file save for any files under current directory:

    coffee -cw .

Also set output directory:

    coffee -cw -o "./dist/" .

Only watch a single file:

    coffee -cw main.coffee

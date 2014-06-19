Make for Node.

Has a plugin system in which each plugin takes a JSON-like configuration input
which defines the tasks it provides.

Plugins are packages installed with NPM, by convention by `grunt-`.
They are usually installed as `devDependencies`.

Each configuration is a string, with a template system built-in of form `<%= %>`.

Grunt must be installed locally under `node_modules`.
It is usually listed under `devDependencies`.

Show help and list available tasks:

    grunt -h

`Gruntfile` can be written in `.coffee`.

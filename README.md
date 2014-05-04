Node.js information and cheatsheets.

#Sources

Short tutorials: <http://docs.nodejitsu.com>

#Node

Node is interpreted / compiled by Google's open source V8 Javascript engine used in Chrome: <https://code.google.com/p/v8>, official Git mirror at: <https://github.com/v8/v8>.

V8 implements all of ECMAScript 5, so you can use all of it, including things which you should not usually use from browsers because some browsers don't implement them.

When run from outside the browser, logically objects such as `document` which represent web page concepts are not defined.

TODO does V8 implement extensions to ECMAScript, or are they somehow added by node afterwards?

REPL interface:

    node

Run script:

    node main.js

##Stability

The official documentation specifies the stability of each feature.

What each stability level means is specified at: <http://nodejs.org/api/documentation.html#documentation_stability_index>

Level 3 or above guarantee backwards compatibility.

#Ubuntu install

Don't install from the official repositories: they are seriously outdated.

Be sane, and use `nvm`.

#NVM

Node Version Manager.

Analogous to Ruby RVM or Python virtualenv.

**Use it**.

Install:

    VERSION=0.10.26
    curl https://raw.github.com/creationix/nvm/master/install.sh | sh
    # Before using it, you must:
    source ~/.nvm/nvm.sh
    # so just add that to you `.bashrc`.
    echo "source ~/.nvm/nvm.sh
    nvm use "$VERSION" &>/dev/null
    " >> ~/.bashrc
    nvm install "$VERSION"

Install a new version of Node:

    nvm install 0.9.0
    nvm install 0.9.9

May either download a binary (fast) or compile from source if not possible (slower and requires that you have dev tools installed).

List currently installed node versions:

    nvm ls

Use a node version:

    nvm use 0.9.9
    node --version
    nvm use 0.9.0
    node --version

Per directory configs:

    echo '0.9.9' > .nvmrc

Use per directory config inside `.nvmrc`:

    node use

Always use this in your project root to set the supported node version.

As of early 2014, does not change version automatically like RVM does.

#NPM

Node package manager. Analogous to Ruby Bundler, Python pip.

As of node `0.9.9` comes together with Node, but with a version several tags behind head.

The config file is `package.json`.

Help:

    npm help
    npm help install
    npm help start

Install all dependencies of `package.json` in current dir under `node_modules`:

    npm install

- `dependencies` are installed both when `npm install` from package root and `napm install package`.
- `devDependencies` are only installed in the former case.

As explained in `npm help folders`:

- Local install (default): puts stuff in `./node_modules` of the current package root.
- Global install (with -g): puts stuff in `/usr/local` or wherever node is installed.
- Install it locally if you´re going to `require()` it.
- Install it globally if you´re going to run it on the command line.
- If you need both, then install it in both places, or use npm link.

Run package's start script if one was given (TODO how):

    npm start

Standard way to start running the main function of a package. For example, the Express framework is started with `start`.

##Useful packages

    # Web framework.
    npm install express
    npm install -g express-generator@3
    # Markdown.
    npm install -g marked

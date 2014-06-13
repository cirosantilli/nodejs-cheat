#!/usr/bin/env node

var fs = require('fs')

var config = JSON.parse(fs.readFileSync('config.json', 'utf8'))
var Octokit = require('octokit')
var gh = Octokit.new({
  token: config.token
})
var repo = gh.getRepo(config.user, config.repo);
repo.getInfo().then(function(repo) {
  console.log(repo)
})

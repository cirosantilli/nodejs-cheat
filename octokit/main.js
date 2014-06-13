#!/usr/bin/env node

var fs = require('fs')

var Octokit = require('octokit')

var config = JSON.parse(fs.readFileSync('config.json', 'utf8'))
var gh = Octokit.new({
  token: config.token
})
var repo = gh.getRepo(config.user, config.repo)
repo.getInfo().then(function(repo) {
  console.log(repo)
  console.log(repo.description)
})

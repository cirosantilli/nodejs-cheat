#!/usr/bin/env node

var assert = require('assert')
var fs = require('fs')

var Octokat = require('octokat')

var config = JSON.parse(fs.readFileSync('config.json', 'utf8'))

var octo = new Octokat({
  token: config.github.token
})
octo.zen.read(function(err, message) {
  if (err) { throw new Error(err) }
  console.log(message)
})
octo.repos('philschatz', 'octokat.js').fetch(function(err, repo) {
  if (err) { throw new Error(err) }
  console.log(repo)
})

// No Auth.
var octo = new Octokat()
octo.zen.read(function(err, message) {
  if (err) { throw new Error(err) }
  console.log(message)
})

// GitLab
var octo = new Octokat({
  api: 'gitlab',
  token: config.gitlab.token
})
octo.repos('cirosantilli', 'test0').fetch(function(err, repo) {
  if (err) { throw new Error(err) }
  console.log(repo)
})

//var repo = gh.getRepo(config.user, config.repo)
//repo.getInfo().then(function(repo) {
//  console.log(repo)
//  //assert.equal(repo.name, config.repo)
//})

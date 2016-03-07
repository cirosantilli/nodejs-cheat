#!/usr/bin/env node
/*
Same API as window.setTimeout on browsers.
https://nodejs.org/api/timers.html

Expected output:

  0
  2
  1
*/
console.log('0');
setTimeout(function(){
  console.log('1');
}, 2000);
console.log('2');

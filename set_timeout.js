#!/usr/bin/env node
/* Same API as window.setTimeout on browsers.
 * https://nodejs.org/api/timers.html
 *
 * Expected outcome: immediately print:
 *
 * ....
 * 0
 * 2
 * ....
 *
 * and then after two seconds:
 *
 * ....
 * 1
 * ....
 */
console.log('0');
setTimeout(() => {
  console.log('1');
}, 2000);
console.log('2');

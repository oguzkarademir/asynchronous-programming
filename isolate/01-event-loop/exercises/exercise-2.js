'use strict';

const log = labeledLogger('exercise 2');

// fill in the blanks

let x = '';


x += 'j';

const exercise2_cb_1 = () => {
  x += 'sc';
  log('cb 1:', x);
};
setTimeout(exercise2_cb_1, 100);

x += 'a';

const exercise2_cb_2 = () => {
  x += 'pt';
  log('cb 2:', x);
};
setTimeout(exercise2_cb_2, 300);

const exercise2_cb_3 = () => {
  const test = x === 'javascript';
  log('cb 3:', test);
  console.assert(test, 'x should be "javascript"');
};
setTimeout(exercise2_cb_3, 500);

const exercise2_cb_4 = () => {
  x += 'ri';
  log('cb 4:', x);
};
setTimeout(exercise2_cb_4, 200);

x += 'va';

log(x);

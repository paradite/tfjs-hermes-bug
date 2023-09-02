import * as tf from '@tensorflow/tfjs';

import './platform_react_native.js';

var print;
print = print || console.log;

print('tf code running...');

const x = tf.tensor1d([1, 2, 3]);
// ok
// const result = tf.argMax(x, -1).dataSync()[0];
// error
const result = x.argMax(-1).dataSync()[0];

print('result', result);

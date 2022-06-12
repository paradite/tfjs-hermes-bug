import { Tensor } from './tensor.js';

const tensor = new Tensor(2);

var print;
print = print || console.log;

print(tensor.size);

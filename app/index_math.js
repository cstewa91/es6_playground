import * as math from './math';
import {addToDom as atd} from './helpers';

atd('h1', `23 + 67 = ${math.add(23, 67)}`);
atd('h1', `56 - 14 = ${math.subtract(56, 14)}`);
atd('h1', `6 x 5 = ${math.multiply(6, 5)}`);
atd('h1', `25 / 5 = ${math.divide(25, 5)}`);
atd('h1',math.default);

import barry from './print'; // pulls in the default export
// import * as calc from './calc.js';
import {add} from './calc';
barry("YO!");

// barry(calc.add(2,3));


barry(add(3, 5));
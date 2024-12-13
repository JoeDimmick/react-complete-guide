import { apiKey } from './utils.js';
import msg from './exportdefault.js';
import * as mixedExports from './mixedExports.js';
import { person } from './testingJsonExport.js';

/* 
    when importing something you need to type the name of the obj (variable/function) just as it was defined in the file in which it was defined.
    "from" is relative pathing.
    ./ same folder
    ../ to go up 1 folder

    name of the file and the .extension in this case .js

    react allows you to ommit the .js on react files. the build process allows you to do this.

    if you are importing something that was exported using 'export default' you can import it with whatever name you want like I did on line 2
*/

console.log(apiKey);
console.log(msg);
console.log(mixedExports.default);
console.log(mixedExports.favFood);
console.log(person.age);
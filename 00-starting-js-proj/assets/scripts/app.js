import { apiKey } from './utils.js';
import msg from './exportdefault.js';
import * as meDef from './mixedExports.js';
import { name } from './mixedExports.js';
import superfunthing from './exportDefualtFunction.js';
import * as funFunctions from './functions.js';
import { person } from './object.js';
import User from './classTest.js';

/* 2.16
    when importing something you need to type the name of the obj (variable/function) just as it was defined in the file in which it was defined.
    "from" is relative pathing.
    ./ same folder
    ../ to go up 1 folder

    name of the file and the .extension in this case .js

    react allows you to ommit the .js on react files. the build process allows you to do this.

    if you are importing something that was exported using 'export default' you can import it with whatever name you want like I did on line 2
*/

// console.log(apiKey);
// console.log(superfunthing());
// console.log(meDef.default);
// console.log(msg)
// console.log(name);
// console.log(meDef.person.age)

// console.log(funFunctions.messageFunction());
// console.log(funFunctions.MessageWithParameters("Joe","Awesome"));
// console.log(funFunctions.messageWithParamsAndReturn("Lee Sin", "World of Warcraft"));
// console.log(funFunctions.messageWithParamsWithDefaultValueAndReturn("Joseph"));
// console.log(funFunctions.messageWithParamsWithDefaultValueAndReturn("Joseph Dimmick", "666666"));
// console.log(funFunctions.default("Joe"));

// console.log (person.age);
// person.logObjName(true);
// person.logObjName(false);

// const user1 = new User("Steve", 68);

// console.log(user1.toString());

const favoriteGames = ["League of Legends", "World of Warcraft", "Civiliazation 6"];

console.log();
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

// console.log(favoriteGames);

const anotherHobby = "The Witcher";

favoriteGames.push(anotherHobby);

// console.log(favoriteGames);

// const index = favoriteGames.findIndex((item) => {
//     return item === "World of Warcraft";
// });
//above code refactored into a 1 liner
// const index = favoriteGames.findIndex(item => item === "World of Warcraft");

// console.log(index);

const editedGames = favoriteGames.map( item => ({key: item}));

// editedGames.forEach(element => {
//     console.log(element);
// });

//destructuring an array

const [favgame1, favgame2, favgame3, favgame4] = editedGames;

// console.log(favgame2);
// console.log(favgame4);

//spread operator
const otherFavGames = ["Starcraft", "Halo"];

const mergedFaveGames = [...editedGames, ...otherFavGames]

// console.log(mergedFaveGames)

const user = {
    name: "Lee Sin",
    champStyle: "Fighter",
    id: 5557897
};

console.log(user);

const extendedUser = {
    isBadAss: true,
    ...user
};
console.log(extendedUser);
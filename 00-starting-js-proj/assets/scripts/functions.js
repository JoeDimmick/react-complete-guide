export function messageFunction() {
    console.log("Hey, You did it!") 
}

export function MessageWithParameters(param1, param2){
    console.log(`${param1} you are ${param2}`);
}

export function messageWithParamsAndReturn(param1, param2){
    return `${param1} is my favorite character from ${param2}`;
}

export function messageWithParamsWithDefaultValueAndReturn(param1, param2= "100000"){
    return `${param1} wishes they had ${param2} dollars.`;
}

export default userName => `${userName} exported an arrow function with a single param, allowing you to omit the ()`

/* Arrow functions

    If you only have 1 parameter you can omit the () on an arrow function like above. 0 or more than 1 requires the use of ()
    If the function only returns something and has no logic you can ommit {} and do a 1 liner like the example above.
    Unless you are trying to return a JavaScript Object 

    example: number => { age: number };

    would error because javascript is treating the {} to define the body of a function. It is possible to adjust the code to instruct
    javascript to return a JavaScript Object with () like 
    
    example: number => ({ age: number });

    () => {
        'this is the body'
    }

*/

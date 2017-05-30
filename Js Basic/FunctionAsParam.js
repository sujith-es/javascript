function sayHello(something){
    console.log(something);
}

// Function that take first param as Function and second as Arguments
function exec(func, arg){
    func(arg);
}

// below to execute as function with argument

// sayHello('Hello Sujith! Cheer up and complete target.')



// Code to execute function that accepts another function and arugement.

// exec(sayHello,'inside exact function!')

// another way of calling function and passing function and arguments.
// or called as Anonmyous function.

// exec((something) => {
//     console.log(something);
// },'another flavor or passing arguments');

// Real world example of passing fuction with function as argument.

window.setTimeout((something) => {
    console.log(something);
}, 3000, 'Greeting, everyone!')
/*
* Defining an object
* */

let point1 = { x: 10, y: 20 };
let x = point1.x;

let point2: {};
point2 = { x: 10, y: 20 };
console.log(point2.hasOwnProperty('x'));

let point3: Object = {x: 1};
console.log(point3.hasOwnProperty('x'));
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
let str = "Привет";

console.log( [...str] ); // П,р,и,в,е,т
console.log( Math.max(...arr1) );
console.log( Math.max(...arr1, ...arr2) );
console.log( Math.max(1, ...arr1, 2, ...arr2, 25) );

// Array.from преобразует перебираемый объект в массив
console.log( Array.from(str) ); // П,р,и,в,е,т
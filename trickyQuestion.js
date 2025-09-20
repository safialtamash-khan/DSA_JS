console.log('tricky question');

const printConsole = (...value)=>  console.log(`${value} --- ${value}`);

// let a = [];
// let b = a;

// console.log( a == b);
// console.log( a === b ); // getting ture due to same memory loaction in memory 


// let c = [];
// let d = [];

// console.log(c == d);
// console.log(c === d); // false different memory location

// let a = [20];
// let b = [20] 

// console.log( a [0]== b[0]); // comparing value not memory location
// console.log( a[0] === b [0]);  // true 


//spread operator

// const z = [1,2,3,4,5]
// const obj = {name:'Safi Altamash Khan'}
// console.log(...z);  // 1 2 3 4 5 destructing the array 

// let data = 10 - -10; // minus minus is plus 20
// console.log(data);

// const set  = new Set([1,2,3,4,5])
// console.log('value',[...set]); // convert array

// const value  = set.values();
// const arr = Array.from(value)
// console.log('arr' , arr);

// console.log(set);

// object 
// const obj = {name:'Safi'}
// let obj = {name:'Safi'}

// const deleteVal = delete (obj.name);

// console.log(deleteVal);

// console.log(obj); // getting empty object

// console.log(delete obj); // false 

// console.log(obj); //  object not delete


//array

// const data = ['safi' , 'altamash' , 'khan']

// const [a] = data  // array destructing
// console.log(a ); // output safi get forst value 
// console.log(...data);


// const data = ['safi' , 'altamash' , 'khan']

// const [ ,a] = data  // array destructing add coma to get second value
// console.log(a ); // output safi get forst value 
// console.log(...data);


// let a = 7;
// let b = 5;

// Using destructuring assignment to swap values without a third variable
// [a, b] = [b ,a];

// console.log([a, b]);  // Output: [5, 7]
// console.log([b, a]);  // Output: [7, 5]
// console.log(a);

// const obj = {name:'altamash' , age:24};

// const { name } = obj
// console.log(name);  // object destructing

// const obj = {name:'altamash' , age:23};
// const obj1 = {lastName:'altamash' , age:24};

// const newobj = {...obj , ...obj1} // age is same and age is get overwrite 
// console.log(newobj); //{ name: 'altamash', age: 24, lastName: 'altamash' }

// const promise =  Promise.resolve(2)
// console.log(promise); // "fulfilled"[[PromiseResult]]: 2


// JSON parse

// const obj = '{"name":"John", "age":30, "city":"New York"}'
// const value = JSON.parse(obj)
// console.log(value);
// console.log(typeof value); // object

// const obj1 = { name: 'John', age: 30, city: 'New York' }

// const string = JSON.stringify(obj1)
// console.log(string);
// console.log(typeof string); // string


// const sum =(x,y,z)=>{
//     return x+y+z;
// }

// const res = sum(...[1,2,3])
// const res = sum(1,2,3)
// console.log(res);

// const obj = {name:'safi altamash khan' , age:24 , city:'amravati'}

// const value = Object.seal(obj) // no modification in object
// obj.last = 'Khan'
// console.log(value);
// console.log(obj);


// const value = 222
// if(value%2==0) console.log('even');

// const arr = [1,2,3,4,5];
// const arr1 = [2,3,5,6,7,8,9]

// const arrvalue = arr.forEach(item => console.log(item*2))
// console.log(arrvalue);

// const mapArr = arr.map(item=>item*2) // return modify arr and new array 
// console.log(mapArr); // [ 2, 4, 6, 8, 10 ]
// console.log(arr); // [ 1, 2, 3, 4, 5 ]


// const val = arr.length; // total length which is 5
// const value = arr.length-1; // 4 which is last index 
// console.log(val);
// console.log(value);
// console.log(arr[value]); // 5

// First loop
// for (let i = 0; i < arr.length; i++) {
//   console.log(`First loop: ${arr[i]}`); // output 1 2 3 4 5
// }

// // Second loop
// for (let j = 0; j < arr.length - 1; j++) {
//   console.log(`Second loop: ${arr[j]}`);   // output 1 2 3 4 
// }


// const deleteArr =  delete arr[0]
// printConsole(deleteArr) // output 2,3,4,5
// printConsole(...arr)


// const set = [...new Set([...arr , ...arr1])];
// const set = new Set([...arr , ...arr1]);
// printConsole([...set]) //1,2,3,4,5,6,7,8,9
// printConsole([set]) //1,2,3,4,5,6,7,8,9

// let a = 1;
// let b = 2
// let c = 2
// console.log( --b === a); // true decrement in b --b = 1 1===1 i true
// console.log( a===b === --c); // false a===b get true and true ===  1 get false 

// const os = require('os');

// const platform = os.platform();
// console.log(platform);


// if number is interger  or not

// num  = 120;
// num  = 120.122;
// num  = 'aefaefaf';
// value =  Number.isInteger(num)
// value =  !isNaN(num) // true
// value1 =  !isNaN('dadd') // false
// console.log(value);
// console.log(value1);

// by using if % mod  12/1 = 12 remainder is = 0  id 12.5/12 = 12 remainder is 5

// if (num % 1 === 0) {
//     console.log('num is interger');
// }else{
//     console.log('num is not integer');
// }


// let arr =[]
// console.log(arr.length); // check whether obj is array or not
// const objArr = {
//   name:'khan'
// }
// console.log(Array.isArray(objArr));
// console.log(Array.isArray(arr));


// var a = 10;
// (()=>{
//     var a = 11;
//     console.log('....a',a);
// })();
// console.log(a);




  


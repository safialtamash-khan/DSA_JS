// const prompt = require('prompt');

// prompt.start();

// const array = ['max' , 'manu' , 'juli' , 'max'];

// for ( const value of array){
//   console.log(value);
// }
// array.push('manu');
// console.log('array' ,array);
// const indexof = array.findIndex(itm => itm==='juli');
// console.log(indexof);
// const deletearray = array.splice(1 , 1);
// console.log('deletearray' , deletearray);
// console.log(array);


// const newSet = new Set([1 ,2 ,3 ,4]);

// for(const set of newSet){
//   console.log(set);
// }

// newSet.add(5);
// console.log(newSet);

// newSet.delete(5);
// console.log(newSet);

// const has = newSet.has(2)
// console.log(has);

// console.log(newSet.size);


// const duplicate  = [1,2,3,4,4,5,5,6,7,];

// const unique = new Set([...duplicate]);
// const unique = [...new Set(duplicate)];

// console.log('unique' , unique);

// Convert the set back to an array
// let arrayWithoutDuplicates = Array.from(unique);

// console.log(arrayWithoutDuplicates);


// const newName = ;
// const newName = new Set(['safi','altamash','khan'])

// const khan = 'KHAN'
// newName.add(khan.toLocaleLowerCase());
// newName.add('safi')

// console.log(newName);

// const duplicateName = ['khan' , 'khan' , 'safi' , 'safi' , 'altamash'];


// const uniqueName = [...new Set(duplicateName)];

// console.log(uniqueName);


// const details =  { 
//   name:'Safi altamash khan' , 
//   age:24 ,  
//   hobbies:['playing' , 'indoor games' , 'outside'] 
// }
// const obj={ address:'amravati' } 
// const obj1 = { friends: true , new: true }
// const objarr = [ ['altamash', 24] , ['adil' , 30]];

// details.lastName =  'Khan';

// console.log(details);

// delete details.lastName;

// console.log(details);


// const newobj =  Object.fromEntries(objarr); // convert key value array in new object;

// const objarr = [ ['altamash', 24] , ['adil' , 30]];

// const newobj =  Object.entries(objarr)// we can get key value
// console.log('newobj' , newobj); //[ [ '0', [ 'altamash', 24 ] ], [ '1', [ 'adil', 30 ] ] ]
// console.log('newobj' , newobj[0]); // [ '0', [ 'altamash', 24 ] ]
// console.log('newobj' , newobj[1]); // [ '1', [ 'adil', 30 ] ]

// console.log('newobj' , newobj[0][1]); // [ 'altamash', 24  ]
// console.log('newobj' , newobj[1][1]); // [ 'adil', 30 ]



// const newobj = Object.entries(details).reduce((acc, [key, value]) => {
//   acc[key] = value;
//   return acc;
// }, {});

// const newobj =  Object.values(details) // get value
// console.log(details.valueOf());
// console.log(details.hasOwnProperty('hobbies'));

// for( const [key , value] of newobj){
//   console.log(`${key} ${value}`);
//   console.log(` key ${key} `);
//   console.log(` value ${value}`);
// }

// const newobj =  Object.assign( details , obj , { new:obj1.new } );
// const newobj = {...details , ...obj , new:obj1.new}  // object assign with spread operator
// console.log(newobj);

// const value = details['name'];
// console.log(value);

// Map

// const resutlData = new Map(); // result are in array form


// resutlData.set('Apple', 'Red')
// const value = resutlData.get('Apple')
// console.log(value);

// resutlData.set('apple' , 'red');
// resutlData.set('mango' , 'yellow');
// resutlData.set('strawberry' , 'drak red');

// const india = { name:'india' , rank:1};
// resutlData.set(india , 1);

// console.log(resutlData);

// resutlData.forEach((value) => {
//   console.log( value);
// });

// const getValue =  resutlData.get('mango')
// const getValue =  resutlData.get(india);
// const getValue =  resutlData.has(india);
// console.log(getValue);


// for (const [key , value] of resutlData){
//   console.log('element' , el);
//   console.log('value' , value);
// }

//  resutlData.forEach(([value]) => console.log(value))

// class linkedList {
//     constructor(data){
//       this.head={
//         value: data, 
//         next: null
//       }
//       this.tail =  this.head // make shallow copy  if we make any change the head alos get change 
//       this.size = 0;
//     }

//    // insert node
//    appendNode(nextData){
//     let newNode = {
//       value: nextData,
//       next:null
//     };
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.size += 1;
//   }

//   insertData(index , value){
//     let counter = 0;
//     console.log('index' , index);

//     let currentNode = this.head;

//     console.log(' before while currentNode' , currentNode);
//     debugger
//     while(counter > index){
//       counter++;
//       currentNode = currentNode.next;
//       console.log('currentNode while' , currentNode);
//     }

//     let nextNode = currentNode.next;

//     console.log('next node' , nextNode);

//     currentNode.next={
//       value:value,
//       next:nextNode
//     }


//   }
// }
// const list = new linkedList(100);

// list.insertDataInStart(10)
// list.appendNode(200)
// list.appendNode(300)
// console.log(list);

// list.appendNode(300)
// list.appendNode(400)
// console.log(list);
// console.log(list.size);

// list.insertData(1,903)



// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   append(data) {
//     let newNode = { value: data, next: null };
//     if (!this.head) {
//       // If the list is empty, set both head and tail to the new node
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       // If the list is not empty, add the new node after the current tail
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//   }

//   prepend(value){  // add value in head and shifthing value in next if head. 
//     const newNode = { value: value , next:this.head}; // replacing head and shift the head in next.
//     // this.head = newNode;
//     if (this.head) {
//       console.log(this.head);
//       this.head = newNode
//       console.log(this.head);
//     }
//     console.log('this.tail',this.tail);

//     if(!this.tail){ // if tail is empty 
//       this.tail = newNode;
//       console.log('this.tail',this.tail);
//     }
//   }


//   delete( index, value){
//     // console.log(index);
//     // console.log(index-1);

//     let counter = 0
//     let leadNode = this.head;
//     if (index === 0) {
//       leadNode = this.head.next  
//       console.log('leadNode' ,leadNode);    
//     }  

//     while(counter < index-1){
//       leadNode = leadNode.next;
//       counter++
//       // console.log('leadNode' ,leadNode);  
//     }

//     let nextNode = leadNode.next.next; // 500
//     // console.log('nextNode' , nextNode);

//     leadNode.next = nextNode
//     // console.log('final leadNode' ,leadNode);  
//     if (this.tail.value === value) {
//       this.tail =leadNode
//     }
//   }

//   find(value){
//     if (!this.head) {
//       return
//     }

//     let currentNode =  this.head; //{ value , next }
//     while(currentNode){
//         if (currentNode.value === value) {
//         console.log('currentNode in if',currentNode);
//         return currentNode
//       }
//       currentNode = currentNode.next;
//     }
//     return null
//   }
// }

// const list = new LinkedList();
// list.append(100)
// list.append(200);
// list.append(300);
// list.append(400);
// list.append(500);
// // list.prepend(10)
// // list.delete(3 , 500)

// const find = list.find(500)
// console.log('find' , find);
// console.log(list);



// function fun1(a) {
//   // a *= 2; //2 * 2 //4

//   a = 2*2

//   console.log('..a' , a);

//   function fun2(b) {
//     console.log('..b' , b);
//     return a + b; 
//   } 

//   a += 2; //  2+ 2 // 4

//   console.log('a..' , a);
//   return fun2; 
// }

// function fun3(){

//   console.log(fun1());

//   return fun1(2) (2); 
// }

// // console.log(fun3());



// const a = 'a'
// const z= 'z'

// charat = a.charAt(0);
// console.log('charat' , charat);
// charCodeAt = a.charCodeAt(0)
// charCodeAtz = z.charCodeAt(0)
// console.log('charCodeAt' , charCodeAt);
// console.log('charCodeAtz' , charCodeAtz);

// const alpha = []
// for ( i = a.charCodeAt(0) ; i < z.charCodeAt(0) ; i++){  
//   alpha.push(String.fromCharCode(i))
// }
// console.log(alpha);

// // console.log(a);


// const arr1 = [12,3,45,67,89,0,1,2,1,1]
// const arr2 = [33,44,55,66];

// const arr3 = [...arr1,...arr2].sort((a, b)=>a-b);

// console.log(arr3);

// const arr4 = [...new Set(arr3)]
// console.log(arr4);



// const mixedArr = [ 0 ,1 ,2 ,3 ,4 ,'altamash' ,5 ,6 ,'khan' ,100 ,1110 , '1222' ];
// const mixedArr = [ 0 ,1 ,2 ,3 ,4 ,'altamash' ,5 ,6 ,'khan' ,100 ,1110 , 1222 ];

// const sortArr = mixedArr.sort((a,b)=> a - b)

// const mixedArr = [ 0 ,1 ,2 ,3 ,4 ,'altamash' ,5 ,6 ,'khan' ,100 ,1110 , 1222 ];

// const sortArr = mixedArr.sort((a,b)=> a - b)

// const mixedArr = [ 0 ,1 ,2 ,3 ,4 ,'altamash' ,5 ,6 ,'khan' ,100 ,1110 , 1222 ];

// const sortArr = mixedArr.sort((a,b)=> a - b)

// console.log('mixedArr' ,mixedArr); 

// const sortArr = mixedArr.filter( item => typeof(item) === 'number').sort((a,b)=> a-b)
// const sortArr = mixedArr.filter( item => typeof(item) === 'number')\

// const numbersOnly = mixedArr.filter((element) => typeof element === 'number' || !isNaN(element));


// console.log('sortArr' , numbersOnly);


// const mixedArr = [0, 1, 2, 3, 4, 5, 6, 100, 1110, 100, 1110, 1222];

// prompt.get(['value'], (err, result) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   const { value } = result;

//   console.log(value);
//   // Access the user's input
//   const isPresent = mixedArr.includes(Number(value));

//   console.log(isPresent);


//   if (isPresent) {
//     console.log('value is present');
//   } else {
//     console.log('value is not present');
//   }

// });



// console.log(mixedArr);

// const newarr = mixedArr.filter((value , index)=>  mixedArr.indexOf(value) === index);

// console.log('newarr', newarr);

// const indexof = mixedArr.indexOf(1110);
// console.log(indexof);


// const palindrome=(str)=>{


// const splitStr = str.split("");
// console.log('splitStr', splitStr);

// const reverseStr = splitStr.reverse();
// console.log('reverseStr', reverseStr);

// const joinstr = reverseStr.join('');
// console.log('joinstr', joinstr);


//   const result  =  str.split('').reverse().join('')

//   if (str === result) return console.log(`palindrome`);

//   return console.log('not palindrome');

// }

// string = 'a madam a'

// palindrome(string)




/// new series start 100 question basic to advance on js


// let customCouponArray = [...arrValue];
// Create a copy of the original 'arrValue' array using the spread operator.

// if (arrValue.length !== 0) {
//   // Check if 'arrValue' has elements.

//   for (let i = 0; i < arrValue.length; i++) {           // already arr value fisrt one  
//     // Loop through each element in 'arrValue'.

//     for (let j = 0; j < json.length; j++) {            // array which is from excel sheet 
//       // Loop through each element in the 'json' array.

//       if (Number(arrValue[i].name) === json[j].Denomination) {
//         // Check if the 'name' property of the current element in 'arrValue'
//         // converted to a number is equal to the 'Denomination' property
//         // of the current element in 'json'.

//         if (!customCouponArray[i].customCodes) {  //agar customecoupon array k andar custom codes ka array nhi hao toh 
//           // Check if the 'customCodes' property of the current element in 'customCouponArray' does not exist.

//           customCouponArray[i].customCodes = [];
//           // Initialize the 'customCodes' property with an empty array.
//         }

//         customCouponArray[i].customCodes.push(json[j].customCodes);  // empty array mai denomination push kar rahe.
//         // Push the 'customCodes' property of the current element in 'json' to the 'customCodes' array in 'customCouponArray'.

//         customCouponArray[i].isCheck = true;  // ischeck ko true kar rah
//         // Set the 'isCheck' property of the current element in 'customCouponArray' to true.

//         customCouponArray[i].quantity = customCouponArray[i].customCodes.length; 
//         // Set the 'quantity' property of the current element in 'customCouponArray'
//         // to the length of the 'customCodes' array in the same element.
//       }
//     }
//   }

//   setArrValue(customCouponArray);
//   // Update the state 'arrValue' with the modified 'customCouponArray'.
// }

// if (arrValue.length !== 0) {
//   arrValue.forEach((arrValueItem, i) => {
//     json.forEach(jsonItem => {
//       if (Number(arrValueItem.name) === jsonItem.Denomination) {
//         if (!customCouponArray[i].customCodes) {
//           customCouponArray[i].customCodes = [];
//         }

//         customCouponArray[i].customCodes.push(jsonItem.customCodes);
//         customCouponArray[i].isCheck = true;
//         customCouponArray[i].quantity = customCouponArray[i].customCodes.length;
//       }
//     });
//   });

//   console.log(customCouponArray);
// }



// const json = [
//   {
//     Denomination: 999,
//     customCodes: "XCNCMNXXBXM"
//   },
//   {
//     Denomination: 1999,
//     customCodes: "ADIJDDJLJSSNCN"
//   },
//   {
//     Denomination: 2999,
//     customCodes: "QWERTTTIIEOWW"
//   }
// ]
// const arrValue = [
//   {
//     // customCodes: ['ADIJDDJLJSSNCN', 'ADIJDDJLJSSNCN', 'ADIJDDJLJSSNCN'],
//     id: 1,
//     isCheck: false,
//     name: "999",
//     quantity: 0,
//   },
//   {
//     // customCodes: ['ADIJDDJLJSSNCN', 'ADIJDDJLJSSNCN', 'ADIJDDJLJSSNCN'],
//     id: 2,
//     isCheck: false,
//     name: "1999",
//     quantity: 0,
//   }
// ]

// let customCouponArray = [...arrValue];

// let newCustomeCouponArray = ''

// // console.log('customCouponArray', customCouponArray);

// if (arrValue.length > 0) {
//   arrValue.forEach((arrValueItem, index) => {
//     // console.log('index', index);
//     // console.log(customCouponArray[index]);

//     json?.forEach((jsonItem, jsonIndex) => {

//       if (Number(arrValueItem?.name) === jsonItem?.Denomination) {
//         // console.log('json value have same denomination in arr value');

//         if (!customCouponArray?.[index]?.customCodes) {
//           customCouponArray[index].customCodes = []
//         }

//         customCouponArray?.[index]?.customCodes?.push(jsonItem.customCodes)

//         customCouponArray[index].isCheck = true;

//         // console.log('customCouponArray[i].customCodes.length;' ,customCouponArray[index].customCodes?.length);
//         customCouponArray[index].quantity = customCouponArray[index].customCodes.length;
//         // console.log(customCouponArray[index]);
//       }

//     })
//   })

//   // console.log('customCouponArray',customCouponArray);

//   newCustomeCouponArray = customCouponArray;
//   console.log(newCustomeCouponArray);

//   let denominationAvailabel = customCouponArray.every(
//     (value) => value.isCheck === true
//   );

//   console.log(denominationAvailabel);

//   if (!denominationAvailabel) {
//     console.log('denomination available false is check');

//     // setError2({
//     //   ...error2,
//     //   fixedDenomination: t(
//     //     "Denomination not match with excel sheet"
//     //   ),
//     // });
//     // setCustomCouponFile([]);

//   }

//   console.log('json[0]?.Denomination ',json[0]?.Denomination );

// } else {
//   if ( json[0]?.Denomination < 999 || json[0]?.Denomination > 1999 ){
//         console.log('range denomination');
//   }
// }



// const newObj = {};

// const add = ()=>{
//     const value = { ...newObj , name : 'Safi Altamash khan' , age : 24 ,  job : 'front end Developer'};
//     console.log('value' , value);
//     console.log('value name' , value.name);
// }
// add()
// let a = 5, b = 10;

// [a ,b] = [b ,a]

// console.log(a,b);

// Assuming you are using the 'fetch' function to make an HTTP GET request
// const res = await fetch('url'); // Note: Use 'await' to wait for the response
// const data = await res.json();

// // Assuming 'data' is an array of objects like [{}, {}, {}]
// const listItems = data.map(item => `<li>${item.someProperty}</li>`).join(''); // Adjust 'someProperty' based on your actual data

// const list = `<ul>${listItems}</ul>`;

// // Assuming you want to set the inner HTML of an element with id 'main-div'
// document.getElementById('main-div').innerHTML = list; // Note: Correcting the '#' symbol

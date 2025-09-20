console.log('object script');


// const newObj = {
//     name:'Safi Altamash Khan',
//     age:24,
//     address:'Paradise colony amravati',
//     job:'React js developer',
//     info(){
//         `my name is ${this.name} and my age is ${this.age} my addrsss is ${this.address}`
//     }
// }
// const objArr = [ [ 'name' , 'altamash khan'] , ['age' , '24' ]]

// const value =  Object.fromEntries(objArr) // convert  key value array in object;
// console.log(value);

// const Obj = Object.entries(newObj); // convert object in key value array;
// console.log(Obj);
// console.log(Obj[0][1])

// const key =  Object.keys(newObj);
// const value =  Object.values(newObj);
// console.log(key);
// console.log(value);


// for (const [key , value] of Obj) {  // loop on object first we have to object entries
//     console.log('key' , key);
//     console.log('value' , value);
// }

// const ObjValue = Object.values(newObj); // get all value in array as well as key also
// console.log(ObjValue);


// const objValueOf = newObj.valueOf() // get object key and value
// console.log(objValueOf);


// const hasOwnProperty = newObj.hasOwnProperty('job') // get boolean if property exist true
// console.log(hasOwnProperty);


// loop on object



// combining Object

// const obj1 = { 
//     name:'Safi Altamash Khan',
//     age:24
// }

// const obj2={
//     job:'React Developer',
//     city:'Amravati'
// }

// const obj3={
//     address:'Paradise colony amravati',
//     city:'Amravati'
// }

// const newObj = { ...obj1 , ...obj2 , address:obj3.address}

// console.log(newObj);

// const { age } = newObj; // object destructing 
// console.log(age);



// const obj = {name:'safi altamash khan' , age:24 , city:'amravati'}

// const value = Object.seal(obj) // no modifiaction object allowed
// obj.last = 'Khan'
// console.log(value);
// console.log(obj);

// class Info{
//     constructor(a ,b){
//         this.sideA = a;
//         this.sideB = b;
//     }

//     get(){
//         return(this.sideA * this.sideB) / 2;
//     }

//     gehypotenus(){
//         return Math.sqrt(this.sideA ** 2 + this.sideB**2)
//     }

// }

// const tri1 = new Info(2,5);
// console.log(tri1);
// console.log(tri1?.get());



const obj = {
    name: 'Safi Khan',
    age: 24,
    address: 'hyderabad',
    role: 'web developer'
};


const object = {
    name: 'basher',
    age: 30,
    address: 'hyderabad',
    // role : 'mobile developer'
};

// let keys = Object.keys(obj);
// let keys = Object.values(obj);
// let keys = Object.freeze(obj)
//  let keys =  Object.assign(obj , object)
// console.log({...obj , ...object});
// let keys = Object.entries(obj)
// console.log(keys[0]);


// for( let [key , value] of Object.entries(obj)){
//     console.log(key , ":" , value);
// }

// const inventory = [
//     { name: "asparagus", type: "vegetables", quantity: 5 },
//     { name: "bananas", type: "fruit", quantity: 0 },
//     { name: "goat", type: "meat", quantity: 23 },
//     { name: "cherries", type: "fruit", quantity: 5 },
//     { name: "fish", type: "meat", quantity: 22 },
//   ];
//   let res = Object.groupBy(inventory, (item)=>{
//     console.log(item);    
//   });

//   console.log(res);


// let username = ['SAFI ALTAMASH KHAN'];
// console.log(username);

// console.log(username.join(''));



// const routes = {
//     sab: {
//         dashboard: '/dashboard',
//         addNewServices: '/addnewservices'
//     }
// };


// let path = routes?.['sab']?.['dashboard'];
// let path2 = routes?.['sab']?.['addNewServices']

// console.log('path : ', path);
// console.log('path 2 :', path2);

// Navigate(route[sab][dashboard])


// pages
//     a - sab, parent, component
//     b - anb,
//     c - qnb

// component
//     a - sab,
//     b - anb,
//     c - qnb 


const newDate = new Date();

const dateValue = newDate.toLocaleString('default', {
    weekday: "long",
    day: 'numeric',
    era: 'short',
    month: 'short',
    timeZoneName: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h24',
    year: 'numeric'

});
// console.log(dateValue);







// const obje = {
//     username :'khan',
//     fullnme : function (){
//     console.log(this.username);

//     }
// }

// console.log(obje.fullnme());

// function full (){
//     username = 'khan'
//     console.log(this.username);    
// }
// full()



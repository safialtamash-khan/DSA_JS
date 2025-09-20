// class car { 
//     constructor(brand , mileage){
//         this.brand = brand;
//         this.mileage = mileage;
//         console.log(`new  ${brand} created , and mileage is ${mileage} `);
//     }
//     start(){
//         console.log('car start');
//     };

//     stop(){
//         console.log('car stop');
//     };

//     setBrand(brand){
//         this.brandName = brand;
//     }
// }


// class car1 extends car {}


// const newCar =  new car('Polo' , 10);
// const newCar1 = new car('Verna' , 10);

// console.log(newCar.start());
// console.log(newCar.stop());
// newCar.setBrand('fortuner')


// const car1Obj = new car1('extensds car' , 20);
// console.log(car1Obj.start());


// class person {
//     constructor(){
//         console.log('this constructor is for person');
//     }
//     eat(){
//         console.log('eat food');
//     };

//     sleep(){
//         console.log('take sleep to rest the body');
//     };

//     work(){
//         console.log('do regular work');
//     }
// }

// class developer extends person {
//     work(){
//         console.log('develop app / web application');
//     }
// }


// const altamshDev = new developer();

// console.log('developer --- ' , altamshDev.eat());
// console.log('developer --- ',altamshDev.work());


// const normalPerson = new person();

// console.log(normalPerson.eat());
// console.log(normalPerson.work());

// class person { 
//     constructor(){
//         console.log('this is normal person constructor');
//     };

//     eat(){
//         console.log('eat food to make enery');
//     }
// }

// class developer extends person{  // developer class called drived class
//     constructor(technology){
        
//         super(); // to invoke parent constructor nd we can pass argument / value to parent constructor

//         console.log('this is developer constructor and technology is' , technology);
//     }
// }


// const khan =  new developer('react js');
// console.log(khan);


// let data =  'this is website data'
// class user {
//     constructor(name , email) {
//         this.name = name,
//         this.email = email
//     }

//     viewData (){
//         console.log('website data' , data);
//     }
// }

// class admin extends user {
//     constructor(name , email){
//         super(name , email);
//     };

//     editData(){
//         data = 'this is edited website data'
//         console.log('edit data');
//     }
// }



// const student = new user('safi altamash ' , 'altamash167@gmail.com');
// const student1 = new user('yasir khan' , 'yasir12@gmail.com');
// const student2 = new user('arham khan' , 'arham2000@gmail.com');


// const adminObj  = new admin('ADMIN' ,'admin11@gmail.com')
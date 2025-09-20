// write a function which reverse the number 

// const reverseFunc=(num)=>{
// console.log(number);
// const value = number.toString().split('').reverse().join('');
// console.log(value);
// return Number(value)

//const number  = 12344;
// console.log(number.toString());
// console.log([...number.toString()].reverse().join(''));


//     let reverse = 0
//     while(num > 0){
//         let remainder = num %10  //  getting last digit
//         console.log('remainder' , remainder);
//         reverse = reverse*10+remainder;   // 0+ 4 = 0 + remainder(4) = 4 so reverse  = 4;
//         num = Math.floor(num/10)
//         console.log('num' , num);
//     }
//     return reverse
// }

// const res = reverseFunc(12345);
// console.log(res);


// 1234%10 = 4 always get last digit
// 1234/10 = 123.4 => math.floor(123.4) > 123

// for (i ='a'.charCodeAt(0); i < 'z'.charCodeAt(0); i++){
//     const alphabets = String.fromCharCode(i);
//     console.log(alphabets);
// }

// console.log('a'.charCodeAt(0));
// console.log('z'.charCodeAt(0));
// console.log( String.fromCharCode(97));

// let string = 'altamsh'
// const sortFunction =(string)=>{
//     value = string.split('').sort().join('')
//     console.log(value);
// }
// sortFunction(string);

// program to convert first letter of a string to uppercase
// function capitalizeFirstLetter(str) {

//     // converting first letter to uppercase
//     console.log(str.charAt(0).toUpperCase());
//     slice =str.slice(1)
//     console.log(slice);

//     const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

//     console.log(capitalized);
//     return capitalized;
// }

// capitalizeFirstLetter('altamash');

// function capitalEachWord(str) {
//     console.log(str);
//     const newStr = str.split(' ').map( item => item.charAt(0).toUpperCase() + item.substring(1)).join(' ');
//     console.log(newStr);
// }

// val = 'safi altamash khan'
// capitalEachWord(val)

// const string1 = 'apple'; // check the occurence og alphabet in string 

// const occurence = (str) => {
//     console.log(str);
//     console.log(str.split(''));
//     let obj = {};
//     str.split('').forEach((item) => {
//         let occur = obj.hasOwnProperty(item);
//         if (!occur) {
//             obj[item] = 1
//         } else {
//             obj[item]++
//         }
//     })
//     return obj;
// }

// const val = occurence(string1)
// console.log(val);


///closures 


// const closures = function (n){
//     return inner= ()=> n ++;      
// }

// const clos = closures(10);

// console.log(clos());
// console.log(clos());
// console.log(clos());
// console.log(clos());


// for( let i = 0 ; i <= 5 ; i++){
//     console.log('this is for loop');
// }


// let sum = 0;
// n = 100;

// for(i=0 ; i<= n ; i++){
//     // sum = sum+ i;
//     sum += i
// }

// console.log(sum);

// for (i = 0; i <= 5; i++) {
//     console.log('..i', i);
// }

// let i = 0;
// while (i <= 5) {
//     console.log('..i', i);
//     i++
// }


// do {
//     console.log('i = ' , i);
//     i++;
// } while (i <= 5);



// let arr = [1, 2, 3, 4, 5];

// for (let i = arr.length - 1 ; i >= 0 ; i--) {
//     reverseArr.push(arr[i]);
// };

// console.log(arr);;
// console.log(reverseArr);


// let arr = [];
// for(let i = 0 ; i <= 100 ; i++){
//     if( i % 2 === 0){
//         arr.push(i)
//     }
// }

// console.log(arr);





let success = 0;


const onSuccessHandler = () => {

    return new Promise((resolve, reject) => {
        if (success) {
            console.log('success');
            resolve()
        }

        reject(new Error(" failure"))
    })

};


(async () => {
    let data = await onSuccessHandler().catch(error => {
        console.log("error : ", error);
    });

    console.log(data);

})()




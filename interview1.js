let arrayNum = [1, 1, 2, 2, 3, 4, 4]

const findUnique = (array) => {
  let frequency = {}

  for (let num of array) {
    console.log('number : ', num);
    console.log(`freq[${num}]:`, frequency[num]);
    console.log(`freq[${num}] || 0:`, frequency[num] || 0);

    frequency[num] = (frequency[num] || 0) + 1
    console.log('frequency', frequency);
  };


  // Second loop: find the unique element
  for (let key in frequency) {
    if (frequency[key] === 1) {
      return Number(key);
    }
  }

  return null;
}


// function findUnique(arr) {
//   let unique = 0;
//   for (let num of arr) {
//       unique ^= num; // XOR operation
//   }
//   return unique;
// }

// const arr = [2, 3, 3, 2, 4];
// console.log(findUnique(arr)); // Output: 4

// console.log(findUnique(arrayNum));


// const tableTopHeaders = [{ name: "airport services report", age: 24 }, { name: 'safi', age: 26 }];

// const rescheduleIndex = tableTopHeaders?.findIndex(header => header?.name?.toLocaleLowerCase() === "airport services report");
// console.log('rescheduleIndex : ', rescheduleIndex);

// if (rescheduleIndex !== -1) {
//     tableTopHeaders.splice(rescheduleIndex, 1);
// }

// console.log('table top header', tableTopHeaders);


// let number = 5
// let isPrime = true
// for(let i = 2 ; i < number/2 ; i++){
//   if(number % i === 0){
//     isPrime = false
//     break;
//   }
// }
// if(isPrime){
//   console.log(`${number} is a prime number`);
// }else{
//   console.log(`${number} is a not prime number`);
// }


let n1 = 0, n2 = 1, nextTerm;
let number = 4
// 0,1,1,2,3,5
// nt = 0+1
// n1 = n2
//  n2 = nt

// for (let index = 1; index <= number; index++) {
//   console.log(n1);
//   nextTerm = n1 + n2;
//   n2 = n1;
//   n1 = nextTerm
// };

// let sum=0;
// for(let i = 1 ; i <= 100 ; i++){
//   sum += i
// };
// console.log(sum);


// console.log(100%10); // 0
// console.log(100/10); // 10

let str = 'khan'
let reverse = ''

// for(let i  = str.length -1 ; i >= 0 ; i--){
//     reverse+= str[i]
// }
// console.log(reverse);


// let newStr = str.split('').reverse().join('')
// console.log(newStr);
// console.log(str.localeCompare('khan',undefined,{sensitivity : "base"}))



const students = [{ name: 'khan', age: 24 }, { name: 'John', age: 24 }, { name: 'aack', age: 25 }];

// let sort = students.sort((a,b)=> a.name.localeCompare(b.name) || b.age - a.age)
// console.log(sort);


const array1 = [1, 3, 5, 8];
const array2 = [1, 3, 5, 8];

// let res = 0;
// for(let i = 0 ; i < array1.length ; i++){
//   if(array1[i] === array2[i]){
//     res = 1
//     // break
//   }else{
//     res = 0
//   }
// }
// console.log(res);
// console.log(array1.every((item, i)=> array1[i] === array2[i]))


const sortWordsAlphabetically = sentence => {
  let words = [];
  let tempWord = "";

  // Step 1: Extract words from the sentence manually
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      if (tempWord) {
        words.push(tempWord); // Add word to the array
        tempWord = ""; // Reset tempWord
      }
    } else {
      tempWord += sentence[i]; // Build the word character by character
    }
  }
  if (tempWord) words.push(tempWord); // Push the last word

  // Step 2: Sort the words using a custom Bubble Sort
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = 0; j < words.length - i - 1; j++) {
      if (words[j] > words[j + 1]) {
        // Swap if words[j] is greater than words[j + 1]
        let temp = words[j];
        words[j] = words[j + 1];
        words[j + 1] = temp;
      }
    }
  }

  // Step 3: Combine the sorted words into a single string
  let sortedSentence = "";
  for (let i = 0; i < words.length; i++) {
    sortedSentence += words[i];
    if (i < words.length - 1) sortedSentence += " "; // Add space between words
  }

  return sortedSentence;
};

// Test the function
const sentence = "bubble sort example without methods";
// const result = sortWordsAlphabetically(sentence);
// console.log("Sorted Words:", result);



const sortWordsAlphabetically1 = sentence => {
  let words = [];
  let tempWord = "";

  // Extract words from the sentence manually
  for (let char of sentence) {
    if (char === " ") {
      if (tempWord) words.push(tempWord);
      tempWord = "";
    } else {
      tempWord += char;
    }
  }
  if (tempWord) words.push(tempWord); // Push the last word

  // Bubble Sort for words
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = 0; j < words.length - i - 1; j++) {
      if (words[j] > words[j + 1]) {
        [words[j], words[j + 1]] = [words[j + 1], words[j]]; // Swap using array destructuring
      }
    }
  }

  return words.join(" "); // Join words back into a sentence
};

// Test the function
// console.log(sortWordsAlphabetically1("bubble sort example without methods"));


const obj1 = { a: 1 }
const obj2 = { a: 1 }

// console.log(JSON.stringify(obj1) === JSON.stringify(obj2));


let a = { name: 'Dionysia', age: 29 };
let b = a;
console.log(a === b); // true


const twoSumBruteForce = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]; // Return indices
      }
    }
  }
  return false; // No pair found
};

// two sum



// console.log(x); // undifined
x = 1;
var x;
// console.log(x); // 1


function outer() {  // closure
  let x = 4
  return function inter() {
    console.log('inner', x);

  }
}

// let func = outer()
// console.log(func())


function fact(fact) {  //HOF
  return function (num) {
    return num + fact;
  }
}

// let multi = fact(4);
// console.log(multi(1));


// const twoSum = (nums, target) => {
//   let numMap = {}; // Store numbers and their indices

//   for (let i = 0; i < nums.length; i++) {
//     console.log(`nums[${i}]`, nums[i]);

//     let complement = target - nums[i];

//     console.log('complement : ', complement);

//     // Check if complement is in numMap
//     if (numMap.hasOwnProperty(complement)) {
//       return [numMap[complement], i]; // Found indices
//     }

//     // Store current number and its index
//     numMap[nums[i]] = i;

//     console.log('numMap : ', numMap);

//   }

//   return false; // No valid pair found
// };


// twoSum([1, 5, 3, 9], 10)
// let data = twoSum([1, 5, 3, 9], 10)
// let data = twoSum([1, 5, 3, 8, 5], 10)

// console.log(data);


let twoArray = [1, 5, 3, 9];
let target = 10;

// for(let i = 0; i <= twoArray?.length ; i++){
//   for(let j =i+1 ; j <= twoArray.length; j++){
//     if(twoArray[i]+twoArray[j] === target){
//       console.log([i,j]);      
//       console.log([twoArray[i], twoArray[j]]);      
//       return [ i ,j]
//     }
//   }
// }


const twoNum = (num, target) => {
  let mapObj = {};
  for (let i = 0; i <= num.length; i++) {
    let complement = target - num[i]
    console.log(`mapObj.hasOwnProperty(${complement}) :`, mapObj.hasOwnProperty(complement));

    if (mapObj.hasOwnProperty(complement)) {
      console.log('complement : ', complement);
      console.log(`mapObj[${complement}] , ${i}`, [mapObj[complement], i]);
      return [mapObj[complement], i]
    };


    console.log(`num[${i}] = `, num[i]);
    console.log(`mapObj[${num[i]}] = ${i}`);
    mapObj[num[i]] = i;
    console.log('mapObj :', mapObj);

  }
};
// console.log(twoNum(twoArray, 10));


let strAr = ['khan', 'SAFi'].join(',').toLowerCase().split(',');
console.log(strAr); // ['khan', 'safi']


let rolesObj = {
  "superAdmin": "super_admin",
  "zapsManager": "ZAPS MANAGER",
  "zapsExecutive": "zaps_executive",
  "bookingManager": "booking_manager",
  "consumer": "consumer",
  "serviceProvider": "service_provider",
}

// let updatedRoles = {};

// for (let role in rolesObj) {
//   updatedRoles[role] = rolesObj[role].replace(/_/g, '');
// }

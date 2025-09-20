// DSA Progress So Far:
// Arrays:
// ✅ Basics, Searching (Linear/Binary)
// ✅ Sorting (Bubble, Selection, Insertion, Merge, Quick, Counting, Radix)
// ✅ Two Pointers
// ✅ Sliding Window
// ✅ Kadane’s Algorithm
// ✅ Prefix Sum
// ✅ Remove Duplicates
// ✅ Pair Sum, Triplet Sum

// Strings:
// ✅ Basics, Reverse, Palindrome
// ✅ Vowel/Consonant Count
// ✅ Remove Duplicates
// ✅ Frequency Count
// ✅ Valid Parentheses
// ✅ Compression/Decompression
// ✅ Longest Unique Substring
// ✅ Anagram Checker

// 🔜 Pending Topics (Before Jumping to LeetCode):
// Let’s wrap up:

// Prefix Sum (some practice left)
// Dutch National Flag (0s, 1s, 2s)
// Spiral Traversal (Matrix-based array logic) — optional
// More array algorithms? (Max profit stock, trapping rain water, leaders in array?)
// Final String algorithms (Longest Common Prefix, etc. if needed)

// Then: 🧠
// Move to LeetCode Easy + Medium
// Start with Arrays, then Strings
// Then Stack, Queue, Recursion, Linked List, Tree, Graphs, etc.

// ===========================================================================
// 1 - reverse a String
// 2 - find the missing number
// 3 - fizzbuzz
// 4 - palindrome check
// 5 - factorial
// 6 - fibonacci
// 7 - array rotation
// 8 - linked list basic   **
// 9 - binary search
// 10 - merge sort
// 11 - maximum subarray sum
// 12 - queue implementation **
// 13 - stack implementation **
// 14 - armstrong number
// 15 - generating random number
// 16 - printing pattern 
// 17 - printing ascii value
// 18 - comparing two object 
// 19 - creating object
// 20 - remove duplicate element from array
// 21 - Sorting array in javascript using for loop
// 22 - found maximum occurence in given string 
// 23 - Check if two Strings are Anagrams of each other
//        s1 = “race”  s2 = “care”
//        Output: true
//        Explanation: Both the string have same characters with same frequency.
//        So, they are anagrams.

// ==================================================================================


// Two Pointer Technique
// 🔹 Example: Pair Sum Problem, Remove Duplicates

// Sliding Window Technique
// 🔹 Example: Max Sum Subarray of size k

// Kadane’s Algorithm
// 🔹 For maximum subarray sum (already touched it briefly)

// Dutch National Flag Algorithm (3-way partitioning)
// 🔹 For sorting 0s, 1s, and 2s

// Prefix Sum
// 🔹 Efficient range queries

// Spiral Traversal (optional 2D matrix-based array logic)

// ======================================== string==============

// DSA Roadmap: Now Starting Strings (JavaScript)
// Here’s what we’ll do in Strings step-by-step:

// 🔤 String Essentials (for Interviews)
// ✅ String Basics (length, index, charAt, slice, substr, split, etc.)
// ✅ Reversing a String (with/without loop, recursion, built-in)
// ✅ Palindrome Check
// ✅ Count Vowels / Consonants
// ✅ Remove Duplicate Characters
// ✅ Most Frequent Character
// ✅ Anagram Checker (🔐 must know!)
// ✅ Longest Substring Without Repeating Characters
// ✅ String Compression
// ✅ Valid Parentheses (again using Stack)

// 🔧 Techniques You’ll Learn:
// Two Pointers
// Hash Map / Object
// Sliding Window (on Strings)
// Frequency Counter
// Stack usage in String-based problems


// Here are the remaining options:
// Group Anagrams (Leetcode-style variation)
// Longest Common Prefix
// Minimum Window Substring
// Valid Palindrome II (at most 1 deletion allowed)
// Zigzag Conversion (advanced)
// Backspace String Compare (stack-based)
// Or we can now start mastering pattern-based interview problems in:
// Hash Map / Frequency Counter
// Sliding Window
// Stack & Queue-based string logic


// “Not everything in JS is an object, but almost everything behaves like one. 
// Primitives are automatically wrapped to behave like objects when needed,
//  and all complex types inherit from Object via the prototype chain. 
// This makes JavaScript flexible and allows consistent behavior across types.”


// 1 - reverse a String
let str = 'safi altamash khan';
// let reverseStr = ''
// for (let i = str.length - 1; i >=0; i--) {
//     reverseStr += str[i]
// }
// console.log(reverseStr);

const reverseStrFunc = (str) => {
    return str = str.split('').reverse().join('')      //output -  nahk hsamatla ifas
    // return str = str.split(' ').reverse().join(' ')   // output -  khan altamash safi
};

// console.log(reverseStrFunc(str));


// a -   sort the givem string 
const sortString = (string) => {
    // console.log(string.split(' ').sort().join(' '))    // string = 'safi altamash khan'
    // return string = string.split(' ').sort().join(' ')   // output - altamash khan safi

    // e.g  - 'safi altamash khan'
    const words = [];
    let tempWord = '';

    for (char of string) {
        if (char === ' ') {
            if (tempWord) words.push(tempWord);
            // console.log('word...', words);
            tempWord = '';
        } else {
            tempWord += char;
            // console.log('temp word', tempWord);
        };
    };
    if (tempWord) words.push(tempWord); // Push the last word
    // console.log('word...', words);
    // [ 'safi', 'altamash', 'khan' ]

    // ['safi', 'altamash']
    // // temp = words[j]

    // ['', 'altamash']
    // // word[j] = words[j+1]

    // ['altamash', '']
    // // words[j+1] = temp

    // ['altamash', 'safi']

    for (let i = 0; i < words.length - 1; i++) {
        for (let j = 0; j < words.length - i - 1; j++) {
            // console.log(`word[${i}] i  : `, words[i]);
            // console.log(`word[${j}] j  : `, words[j]);
            if (words[j] > words[j + 1]) {
                // let temp = words[j];
                // words[j] = words[j + 1];
                // words[j + 1] = temp;
                [words[j], words[j + 1]] = [words[j + 1], words[j]];
            }
        }

    };

    // ✅ It builds the sentence step-by-step.
    // ✅ Adds a space after each word except the last one.
    // ✅ 100% works, but it's manual and verbose.
    //     let sortedSentence = "";
    // for (let i = 0; i < words.length; i++) {
    //     sortedSentence += words[i];
    //     if (i < words.length - 1) sortedSentence += " ";
    // }

    return words.join(" "); // Join words back into a sentence
}

// console.log(sortString(str));

// -----------------------------------------
// 2 - find the missing number

const findMissingNumber = (array, n) => {
    n = array.length + 1; //if n is not present
    let exceptSum = (n * (n + 1) / 2);
    const actualSum = array.reduce((acc, curr) => acc + curr, 0)
    return exceptSum - actualSum
}
// console.log(findMissingNumber([1, 2, 4, 5, 6], 6)); // 3
// 12771

function findMissingNumberXOR(arr, n) {
    let xor1 = 0, xor2 = 0;
    for (let i = 1; i <= n; i++) xor1 ^= i;
    for (let num of arr) xor2 ^= num;
    return xor1 ^ xor2;
}
// console.log(findMissingNumberXOR([1, 2, 4, 5, 6], 6)); // 3

const findTheMissingNumber = (arr) => {
    let missing = []
    for (let i = 0; i < arr.length; i++) {
        console.log('arr[i]', arr[i]);
        let curr = arr[i]
        let next = arr[i + 1]
        console.log('curr', curr);
        console.log('next', next);

        for (let j = curr + 1; j < next; j++) {
            console.log('j', j);
            missing.push(j)
        }

    }
    return missing
}

// console.log(findTheMissingNumber([1, 2, 4, 5, 6]))

// --------------------------

// 3 - Write a short program that prints each number from 1 to 100 on a new line. 
// For each multiple of 3, print "Fizz" instead of the number. 
// For each multiple of 5, print "Buzz" instead of the number. 
// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

// for (let i = 0; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('fizzbuzz');
//     } else if (i % 3 === 0) {
//         console.log('fizz');
//     } else if (i % 5 === 0) {
//         console.log('buzz');
//     } else {
//         console.log(' i', i);
//     }
// };

// ------------------------------------------------------

// 4 -  check whether the number/string entered by the user is a palindrome

// ***string
let string = 'A man, a plan, a canal. Panama';

const checkPalindrom = string => {

    let regex = /[^A-Za-z0-9]/g;
    let cleanStr = string.toLowerCase().replace(regex, '');
    // console.log(cleanStr);

    let newStr = cleanStr.split('').reverse().join('');
    return newStr === cleanStr ? 'string is palindrom' : 'string is not palindrom';

    // let len = cleanStr.length;
    // for(let i = 0 ; i < len/2 ; i++){
    //     if(cleanStr[i] !== cleanStr[len-i-1]){
    //         return false;
    //     }                
    // };
    // return true;
};

// console.log(checkPalindrom(string));

// **number
const checkNumberPalindrome = number => {
    let newNumber = number.toString();
    // console.log('number :', newNumber === newNumber.split('').reverse().join(''));

    for (let i = 0; i < newNumber.length / 2; i++) {
        //   console.log(newNumber[i]);
        if (newNumber[i] !== newNumber[newNumber.length - i - 1]) {
            return false;
        }
    }
    return true;
};

//   console.log(checkNumberPalindrome(121)); // true
//   console.log(checkNumberPalindrome(123)); // false

// ----------------------------------------------------------------------------

// 5 - factorial

const findFactorial = number => {
    if (number === 0) {
        return 1;
    }
    let fact = 1;
    for (let i = 2; i <= number; i++) {
        fact *= i;
    }
    return fact;
};

// console.log(findFactorial(4));


// Recursion is a programming technique where a function calls itself 
// to solve smaller instances of the same problem.and we have one base condition.

// function factorial(n) {
//     // Base case: if n is 0, return 1
//     if (n === 0) {
//       return 1;
//     }
//     // Recursive case: n * factorial(n - 1)
//     return n * factorial(n - 1);
//   }

// console.log(factorial(5));

// Step-by-Step Explanation
// Let's break down the calculation of factorial(5):

// factorial(5) calls factorial(4)
// factorial(4) calls factorial(3)
// factorial(3) calls factorial(2)
// factorial(2) calls factorial(1)
// factorial(1) calls factorial(0)
// factorial(0) returns 1 (base case)
// factorial(1) returns 1 * 1 = 1
// factorial(2) returns 2 * 1 = 2
// factorial(3) returns 3 * 2 = 6
// factorial(4) returns 4 * 6 = 24
// factorial(5) returns 5 * 24 = 120
// Visualization
// Here's a visual representation of the recursive calls:

// factorial(5)
// |
// |---> factorial(4)
//       |
//       |---> factorial(3)
//             |
//             |---> factorial(2)
//                   |
//                   |---> factorial(1)
//                         |
//                         |---> factorial(0)
//                               |
//                               |---> returns 1
//                         |
//                         |---> returns 1 * 1 = 1
//                   |
//                   |---> returns 2 * 1 = 2
//             |
//             |---> returns 3 * 2 = 6
//       |
//       |---> returns 4 * 6 = 24
// |
// |---> returns 5 * 24 = 120

// ----------------------------------------------------------------

// 6 - fibonacci series
// ,0,1,1,2,3,5,8
const fibonacciSeries = number => {
    let n1 = 0, n2 = 1, nextTerm;
    let series = []
    for (let i = 0; i < number; i++) {
        series.push(n1)
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return series
};

// console.log(fibonacciSeries(5))

const fibonacci = n => {
    if (n <= 1) {
        return n;
    };
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciSeriesRecursion(n) {
    let series = [];
    for (let i = 0; i < n; i++) {
        series.push(fibonacci(i))
    }
    return series
}

// console.log(fibonacciSeriesRecursion(5));
// ----------------------------------------------------------

// Array rotation in js 
// let nums = [1, 2, 3, 4, 5, 6, 7], k = 3  // k is position so we have to move three time arr[0]

const reverse = (arr, start, end) => {
    // console.log('arr', arr);
    console.log('start', start);
    console.log('end', end);

    console.log('arr[start]', arr[start]);
    console.log('arr[end]', arr[end]);


    while (start < end) {
        // let temp = arr[start];
        // arr[start] = arr[end];
        // arr[end] = temp
        console.log('in while before swapping arr[start]', arr[start]);
        console.log('in while before swapping arr[end]', arr[end]);

        [arr[start], arr[end]] = [arr[end], arr[start]];

        console.log('in while after swapping arr[start]', arr[start]);
        console.log('in while after swapping arr[end]', arr[end]);

        start++;
        end--;

        console.log('start', start);
        console.log('end', end);

        console.log('reverse array after swapping ', arr);
    }
};


const rotateArray = (num, k) => {
    console.log(num);
    let n = num.length;
    k = k % n;
    console.log(`k : ${k} % ${n}`, k % n);
    console.log(`k : ${k} - 1`, k - 1);

    reverse(num, 0, k - 1);
    console.log('reverse array', num);

    reverse(num, k, n - 1);
    console.log('reverse array', num);

    reverse(num, 0, n - 1);
    console.log('reverse array', num);
}

// rotateArray(nums, 3)

const rotateArrayBuiltIn = (array, k) => {
    let n = array.length;
    k = k % n;
    // [1, 2, 3, 4, 5, 6, 7]
    //     let result = array.slice(k);
    //     console.log(result); //[ 4, 5, 6, 7]
    //     let result2 = array.slice(0, k);
    //     console.log(result2); //[1, 2, 3]
    //     console.log([...result, ...result2])

}
// rotateArrayBuiltIn(nums, 4);


const rotateArrayByLoop = (array, k) => {
    k = k % array.length;
    let rotated = [];
    // [1, 2, 3, 4, 5, 6, 7]
    const pushValue = (arr, value) => arr.push(value);

    for (let i = k; i < array.length; i++) {
        pushValue(rotated, array[i])
    }
    for (let i = 0; i < k; i++) {
        pushValue(rotated, array[i])
    };
    console.log(rotated);
}

// rotateArrayByLoop(nums, 3);

// ********* right rotated  **********
const rightRotateArray = (array, k) => {
    let n = array.length;
    k = k % n;
    let rotatedArr = []
    console.log('n', n);
    console.log('k ', k);
    console.log('n -k', n - k);
    // [1, 2, 3, 4, 5, 6, 7]

    for (let i = n - k; i < n; i++) {
        rotatedArr.push(array[i])
    };

    for (let i = 0; i < n - k; i++) {
        // console.log(array[i]);
        rotatedArr.push(array[i])
    }
    console.log(rotatedArr);
};

// rightRotateArray([1, 2, 3, 4, 5], 2)

rightRotateArrayWithSlice = (array, k) => {
    let n = array.length;
    k = k % n;
    // console.log('k ', k);

    // [1, 2, 3, 4, 5, 6, 7]
    let result = array.slice(n - k);
    // console.log(result);
    let firstPart = array.slice(0, n - k); // First n-k items
    console.log([...result, ...firstPart]);

}
// rightRotateArrayWithSlice([1, 2, 3, 4, 5], 2)

// console.log(rotated([1, 2, 3, 4, 5, 6, 7], 3))
// console.log(rotatedArr([1, 2, 3, 4, 5, 6, 7], 10))

// console.log(3 % 7)  // rem
// console.log(10 % 5 === 0); // rem
// console.log(10 / 5 === 2); // Q

// console.log([1,2,3,4].slice(1));
// console.log([1,2,3,4].slice(-3));

// ----------------------------------------------------------

// [5, 1, 2, 6, 2, 4, 7]
const findMissing = (array) => {
    const SortedArray = [...new Set(array.sort((a, b) => a - b))];

    // if (SortedArray[0] !== 1) {
    //   SortedArray.unshift(1)
    // }

    console.log(SortedArray);
    const missing = [];
    for (let i = 0; i < SortedArray.length; i++) {
        let current = SortedArray[i];
        let next = SortedArray[i + 1];
        console.log('current', current);
        console.log('next', next);
        for (let j = current + 1; j < next; j++) {
            missing.push(j)
        }
    }
    return { newArray: SortedArray, missingNumbers: missing };
};

//   console.log(findMissing([5, 1,  6, 2,  7]))
//   ---------------------------------------------------------


// Check if two Strings are Anagrams of each other
let s = "anagram", t = "nagaram";
// let s = "aab", t = "ab";

let values = [];
const findAnagram = (str1, str2) => {
    if (s.length !== t.length) return 'string is not anagram';

    // const sortedS = s.split('').sort().join('');
    // const sortedT = t.split('').sort().join('');
    // return sortedS === sortedT ? 'string is anagram' : 'string is not anagram';

    let count = {};

    for (let char of str1) {
        count[char] = (count[char] + 0) || 1
    };

    console.log('..count', count);

    for (let char of str2) {
        console.log('str2', str2);
        console.log(`!count[${char}]`, 'count[char]', count[char], "=", !count[char]);
        if (!count[char]) {
            console.log('strind is not anagaram');
            return 'string is not anagaram';
        };
        console.log(`count[${char}]`, count[char]);
        count[char]--
        console.log('.. in second loop count', count);
    };
    return 'string is anagram';
};

// console.log(findAnagram(s, t));

// ====================================================

// Write a function to search for a target value inside a sorted array using Binary Search.
// If found, return its index. If not, return -1.

// 🔍 Step-by-Step Visualization:
// left = 0, right = 4
// mid = Math.floor((0 + 4) / 2) = 2 → arr[2] = 5
// 5 < 7, so we move to the right side → left = mid + 1 = 3
// left = 3, right = 4
// mid = Math.floor((3 + 4) / 2) = 3 → arr[3] = 7
// ✅ Match found! Return 3


// So we need to keep track of which part of the array 
// we’re currently searching — and that’s what left and right do.

function binarySearch(array, target) {
    let left = 0;                     // let take left and right to track the array portion
    let right = array.length - 1;     //  initialize right is lenght of array
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);     // left + right / 2  = mid 
        if (array[mid] === target) {                 // check the array[mid]  === target
            return mid;
        }
        else if (array[mid] < target) {      // array[mid] is smaller than target left should increase by 1 
            left = mid + 1;
        }
        else {
            right = mid - 1   // array[mid] > than target right should minus by one 
        };
    }
    return -1;
};
// console.log(binarySearch([1, 3, 5, 7, 9], 3)); // Output: 3 ✅


// ====================

//  The Merge Sort algorithm is a divide-and-conquer algorithm that sorts an array
//  by first breaking it down into smaller arrays,
//  and then building the array back together the correct way so that it is sorted.

//Merge Sort Implementation
// To implement the Merge Sort algorithm we need:

// An array with values that needs to be sorted.
// A function that takes an array, splits it in two, and calls itself with each half of that array so that the arrays are split again and again recursively, until a sub-array only consist of one value.
// Another function that merges the sub-arrays back together in a sorted way.

//Initial: [5, 2, 4, 1, 3] → mid = 2
// → left: [5, 2]
// → right: [4, 1, 3]
// Now focus on [4, 1, 3]:
// Its length is 3, so
// mid = Math.floor(3 / 2) = 1
// → left: array.slice(0, 1) → [4]
// → right: array.slice(1) → [1, 3]



// Divide the unsorted array into two sub-arrays, half the size of the original.
// Continue to divide the sub-arrays as long as the current piece of the array 
// has more than one element.
// Merge two sub-arrays together by always putting the lowest value first.
// Keep merging until there are no sub-arrays left.


const mergeSort = (array) => {
    if (array.length <= 1) return array   // base condition to end recurrsion
    // [5, 2, 4, 1, 3];
    let mid = Math.floor(array.length / 2);   // fisrt find middle of given array
    console.log('mid = ', mid, array[mid]);

    // then find left portion and rigth portion of array 
    let left = mergeSort(array.slice(0, mid));   // using recursion
    let right = mergeSort(array.slice(mid));     // using recursion

    // now separate each array portion in single array element 
    console.log('left', left, 'right', right);

    return sortPortion(left, right);
};


function sortPortion(left, right) {
    let result = [], i = 0, j = 0;

    //     | Loop                                          | Purpose                                   |
    // | --------------------------------------------- | ----------------------------------------- |
    // | `while (i < left.length && j < right.length)` | Merge while **both arrays have elements** |
    // | `while (i < left.length)`                     | Finish **left\[]** if anything is left    |
    // | `while (j < right.length)`                    | Finish **right\[]** if anything is left   |

    console.log('left , right in sort portion', left, right);

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            console.log(`left[i]`, left[i]);
            result.push(left[i]);
            i++;
        } else {
            console.log(`right[j]`, right[j])
            result.push(right[j]);
            j++;
        };
    };

    while (i < left.length) {
        result.push(left[i]);
        i++
    }

    while (j < right.length) {
        result.push(right[j]);
        j++
    }
    console.log('result', result);
    return result || []
};

// console.log(mergeSort([5, 2, 4, 1, 3]));
// Output: [1, 2, 3, 4, 5]

// ===============================================

//  maximum subarray sum

function maxSumSubarrayBruteForce(arr, k) {
  let maxSum = -Infinity;         // Store the maximum sum found so far
  let maxSubarray = [];           // Store the actual subarray for reference

  // Outer loop: start index of subarray
  for (let i = 0; i <= arr.length - k; i++) {
    console.log(`📍 i = ${i} (start of subarray)`);
    console.log(`${i} <= ${arr.length} -  ${k}`);

    let currentSum = 0;
    let currentSubarray = [];

    // Inner loop: sum k elements from index i

    // i + k = 1 + 3 = 4
    // i + k = 2 + 3 = 5
    // i + k = 3 + 3 = 6   j should always smaller than  i+ k value
    for (let j = i; j < i + k; j++) {

      currentSum += arr[j];        // Add current element to currentSum
      currentSubarray.push(arr[j]); // Store the subarray for understanding
      console.log(`   j = ${j} → Adding arr[${j}] = ${arr[j]}, currentSum = ${currentSum}`);

    }

    console.log(`👉 Subarray: ${currentSubarray}, Sum = ${currentSum}`);

    if (currentSum > maxSum) {
      console.log(`🔥 New max found: ${currentSum} > ${maxSum}`);
      maxSum = currentSum;
      maxSubarray = currentSubarray;
    }
    console.log('---');
  }

  console.log(`✅ Max Subarray: ${maxSubarray}, Max Sum: ${maxSum}`);
  return maxSubarray;
}



const subArray = (array, w = 4) => {
  let max = -Infinity;
  // console.log(array);

  for (let i = 0; i <= array.length - w; i++) {
    let current = 0;
    for (let j = i; j <= i + w - 1; j++) {
      current = current + array[j]
      // console.log(current);
      max = Math.max(current, max)
      // console.log('---------j', array[j]);
    }
    // console.log('outer loop ----', array[i]);
    // console.log('max', max);
  }

  // console.log(max);
  return max;

};



let subArr = [2, 3, 4, 5, 6, 7, 8]

// console.log(subArray(subArr))


function maxSubarraySum(array) {
    let result = array[0];       // let store the zero position in rsesult variable  
    // [5, 4, 1, 7, 8];
    let len = array.length;
    for (let i = 0; i < len; i++) {
        let currSum = 0;                 // let store sum of all number in array in currSum variable 
        for (let j = i; j < len; j++) {
            currSum = currSum + array[j]
            result = Math.max(result, currSum);    // math.max compare result and cursumm and store in result
        }
    }
    return result;
}


// const arr = [5, 4, 1, 7, 8];
// console.log(maxSubarraySum(arr));




//We initialize both maxSum and currentSum to the first element.
// Why? Because even if all numbers are negative, the largest sum could be a single element.


const maxiSubArraySums = (array) => {
    let maxSum = array[0];
    let currSum = array[0];

    //Start looping from index 1 since index 0 is already used to initialize.
    for (let i = 1; i < array.length; i++) {
        console.log(`array[${i}] : `, array[i]);

        console.log(
            `Math.max(${array[i]}, ${currSum} + ${array[i]})`,
            Math.max(array[i], currSum + array[i]));

        currSum = Math.max(array[i], currSum + array[i]);

        console.log(`${currSum} > ${maxSum}`);

        if (currSum > maxSum) {
            maxSum = currSum
        }
        console.log('maxSum', maxSum);

    }

    return maxSum;
}
// console.log(maxiSubArraySums([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

// ==========================================================================


// armstrong number
const armstrong = (number) => {
    let original = number;
    let sum = 0;
    let len = 0;

    // Count digits
    while (number > 0) {
        number = Math.floor(number / 10)   // removeing last digit  
        len++;  // len of given array 
    }

    number = original;

    // Calculate powered sum
    while (number > 0) {
        let digit = number % 10;   // geting last digit of number
        sum += Math.pow(digit, len);   // power e.g 2*2*2 based on lenght 
        number = Math.floor(number / 10); // removeing last digit
    }

    return sum === original;
};

// console.log(armstrong(153)); // true
// console.log(armstrong(9474)); // true
// console.log(armstrong(123)); // false


// =======================================
// What is a Linked List ?
//  A Linked List is a linear data structure
//  where elements(called nodes) are stored in separate objects and connected using pointers.

// Each Node contains:
// value(the data)
// next(a pointer to the next node)

// 📦 Visualization:
// Head →[1 | next] →[2 | next] →[3 | null]
// Head is the starting point.
// Each node has a value(1, 2, 3) and a reference to the next node.
// The last node points to null, indicating the end of the list.

// Step 2: Real - Life Analogy
// Think of a linked list like a treasure map:

// Each clue(node) tells you where the next clue is(pointer to next).
// You must follow one - by - one; you can't jump directly to the 3rd clue.

// ⚠️ Downsides
// ❌ No direct access like arrays (e.g., arr[3])
// ❌ More memory usage (due to pointers)

// ✅ Benefits of Linked Lists
// ✅ Dynamic size (no need to define size ahead)
// ✅ Easy insert/delete at beginning or middle

// basic creating link list;

// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// let node1 = new Node(10);

// let node2 = new Node(20);
// node1.next = node2;
// // console.log('node 2 added in node',node1);

// let node3 = new Node(30);
// node2.next = node3;
// // console.log('node 3 added in node',node1);

// let head = node1;
// // console.log('head', head);




// const linkedList = {
// head : { value : 2 , next :
//             { value : 3 , next :
//                 { value: 4 , next : null }
//                  }
//           }
//      }



class Nodes {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class lists {
    constructor() {
        this.head = null
        this.tail = null
    }

    insert(value) {
        const newNode = new Nodes(value)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            let current = this.head;
            // console.log('current---', current);
            while (current.next !== null) {
                current = current.next;
            }
            // console.log('--current --', current);
            current.next = newNode
            this.tail = newNode;

        }
    }

    insertAtEnd(value) {
        const newNode = new Nodes(value);

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.tail.next = newNode
            // this.head.next = newNode
            this.tail = newNode
        }
    }

    insertAtPosition(value, position) {
        if (position === 0) {
            this.insert(value);
            return;
        }

        const newNode = new Nodes(value);


        let current = this.head;
        let index = 0;

        while (current && index < position - 1) {
            current = current.next
            index++
            // console.log(' position current', current);
        }

        if (!current) {
            console.log("Position out of bounds");
            return;
        }

        // console.log('position current', current);
        // console.log('new node position ', newNode);

        // position current Nodes { value: 3, next: Nodes { value: 1, next: null } }
        // new node position  Nodes { value: 6, next: null }
        newNode.next = current.next
        // new node position  Nodes { value: 6, next:  Nodes { value: 1, next: null } }
        current.next = newNode
        // position current Nodes { value: 3, 
        // next: Nodes { value: 6, 
        // next:  Nodes { value: 1, next: null } } }


        // | `newNode.next = current.next` | Connects the new node to the rest of the list |
        // | `current.next = newNode`      | Inserts the new node after the current one    |

        // Optional: update tail if inserted at end
        if (newNode.next === null) {
            this.tail = newNode;
        }
    }

    deleteFromBeginning() {
        if (!this.head) {
            return;
        }

        this.head = this.head.next;

        if (!this.head) {
            this.tail = null
        }
    }

    deleteAtPosition(position) {

        console.log('position', position);
        console.log('before delete current', this.head);


        if (position === 0) {
            this.deleteFromBeginning()
            return;
        }

        let current = this.head;
        let index = 0;
        console.log('position - 1', position - 1);

        while (current && index < position - 1) {
            current = current.next
            index++
        }



        if (!current || !current.next) {
            console.log("Position out of bounds");
            return;
        }

        console.log(' --delete positio current', current);
        current.next = current.next.next;   // will null
        console.log('current next', current);

        if (current.next === null) {
            this.tail = current;
        }

        console.log('after delete current', this.head);


    }

    search(value) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.value === value) {
                return index
            }

            current = current.next;
            index++
        }
        return -1;
    }
    getLength() {
        let current = this.head;
        let count = 0;
        while (current) {
            current = current.next;
            count++
        }
        return count
    }

    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;

        this.tail = this.head;


        while (current !== null) {
            console.log("Before: current =", current?.value, ", prev =", prev?.value, ", next =", current?.next?.value);

            next = current.next;
            current.next = prev;
            prev = current;
            current = next;

            console.log("After: prev =", prev?.value, ", current =", current?.value);
        };

        this.head = prev;
        console.log("New head =", this.head?.value);
    }

    print() {
        let current = this.head;
        while (current) {
            console.log('--current', current.value);
            current = current.next;
        }
    }
}


// let tailNode = new lists()
// tailNode.insertAtEnd(1)
// console.log(tailNode);

// tailNode.insertAtEnd(2)
// console.log(tailNode);

// tailNode.insertAtEnd(3)
// tailNode.insert(1)
// tailNode.insertAtPosition(4, 3)

// tailNode.deleteFromBeginning()
// tailNode.deleteAtPosition(2)

// console.log('index of serach value is ',tailNode.search(3))
// console.log('lenght of list ', tailNode.getLength());

// tailNode.reverse()


// tailNode.print()
// console.log(tailNode);


// stack implementation

// A stack is a data structure that can hold many elements.
//  This way of organizing elements is called LIFO: Last In First Out.

// Basic operations we can do on a stack are:

// Push: Adds a new element on the stack.
// Pop: Removes and returns the top element from the stack.
// Peek: Returns the top element on the stack.
// isEmpty: Checks if the stack is empty.
// Size: Finds the number of elements in the stack.

// Stacks can be implemented by using arrays or linked lists.


// let stack = []

// stack.push('A')
// stack.push('B')
// stack.push('C')

// console.log('stack', stack);

// # Pop
// let element = stack.pop();
// console.log('pop', element);


// # Peek
// let topElemeent = stack[stack.length-1];
// let topElemeent = stack.at(-1);
// console.log('peek', topElemeent);


//isEmpty
// let isEmpty = !Boolean(stack.length);
// let isEmpty = stack.length === 0;
// console.log('isEmpty', isEmpty);

// let size = stack.length;
// console.log('size ', size);


class Stack {
    constructor() {
        this.stack = [];
    }

    push(value) {
        return this.stack.push(value)
    }

    pop() {
        this.stack.pop()
        return this.stack
    }

    peek() {
        return this.stack[this.stack.length - 1]
    }

    isEmpty() {
        return this.stack.length === 0
    }

    size() {
        return this.stack.length
    }

    print() {
        console.log(this.stack.join(','))
    }
}

// let stack = new Stack();
// console.log('stuck push', stack.push(1));
// console.log('stuck push', stack.push(2));
// console.log('stuck push', stack.push(3));
// console.log('stuck push', stack.isEmpty());
// console.log('stuck push', stack.peek());
// console.log('stuck push', stack.size());
// console.log('stuck push', stack.print());
// console.log('stack.pop()', stack.pop());



// example stack using linkedList 


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class StackClass {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value)
        console.log('new Node', newNode);
        newNode.next = this.top;   //Point to old top
        this.top = newNode;  // New node becomes top
        this.length++;
    }

    pop() {
        let popedValue = this.top.value
        console.log('popedValue', popedValue);
        console.log('this.top.next', this.top.next);
        console.log('this top', this.top);
        this.top = this.top.next
        this.length--;
        return popedValue;
    }

    peek() {
        return this.top ? this.top.value : null;
    }

    size() {
        return this.length;
    }

    print() {
        let curr = this.top;
        let data = '';
        while (curr) {
            data += curr.value + ',';
            curr = curr.next;
            console.log(data);
        }
    }
}


// const stack = new StackClass();
// console.log(stack);
// console.log(stack.push(1));
// console.log(stack);
// console.log(stack.push(2));
// console.log(stack);

// console.log(stack.pop());
// console.log(stack.peek());
// console.log(stack.size());
// console.log(stack.print());
// { top : null , length : 0}
// { top : { } , length : 0}



// ==============================================================================

// Awesome! Let's first understand what Balanced Parentheses Checker means 
// — it’s one of the most common real-world uses of a Stack and often asked in interviews. 
// Let’s break it down step by step:

// 💡 What is a Balanced Parentheses Checker?
// You're given a string like:
// "()"
// "(())"
// "{[()]}"
// You need to check if every opening bracket ((, {, [) is properly closed
//  in the correct order by its matching bracket (), }, ]).

// ❌ Examples of unbalanced:

// | Input   | Problem                        |
// | ------- | ------------------------------ |
// | `(`     | No closing `)`                 |
// | `({[}`  | Wrong order or missing closing |
// | `((())` | One extra opening `(`          |


// ✅ Examples of balanced:

// | Input    | Reason                          |
// | -------- | ------------------------------- |
// | `()`     | One pair matched                |
// | `([])`   | Nested properly                 |
// | `{[()]}` | All open-close in correct order |

// 👨‍🏫 How does Stack help?
// We use a stack to:
// Push opening brackets onto the stack.
// When we find a closing bracket, we check if it matches the last opening bracket from the stack.
// If mismatch or stack is empty — it's not balanced.
// If stack is empty at the end — it is balanced.

// 🧠 Visual Explanation:
// For "({[]})":

// Stack evolves like this:

// push (     → stack: [ ( ]
// push {     → stack: [ (, { ]
// push [     → stack: [ (, {, [ ]
// pop  ]     → [ matches [ ✔️ → stack: [ (, { ]
// pop  }     → { matches { ✔️ → stack: [ ( ]
// pop  )     → ( matches ( ✔️ → stack: [ ]

// At end: stack is empty → ✅ balanced!

function isBalanced(str) {
    let stack = [];
    let open = ['(', '{', '['];
    let close = [')', '}', ']'];
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of str) {
        if (open.includes(char)) {
            stack.push(char);
            console.log('stack', stack);

        } else if (close.includes(char)) {  // closing bracket conditon 
            let last = stack.pop();

            console.log('-------last', last);

            console.log('char------', char);


            console.log(`map[ ${char} ]`, map[char]);

            console.log(`this is last -->  ${last} !== ${map[char]}   <--- map value`,
                last !== map[char]);

            if (last !== map[char]) {
                console.log('return', false);
                return false;
            };
            console.log('return ', true);
        }
    }

    return stack.length === 0;
}

// console.log(isBalanced("()"));

// How It Works:
// It uses a stack (LIFO) to track open brackets.
// When it sees a closing bracket, it pops from the stack and checks if it matches.
// If something doesn't match, or the stack isn't empty at the end, it's invalid.



// ============================================================


// ✅ Step-by-Step Plan
// Perform action: Push to undoStack, clear redoStack
// Undo: Pop from undoStack, push to redoStack
// Redo: Pop from redoStack, push back to undoStack


// ✅ Fix Strategy
// Instead of storing just content at every step, let’s:
// Option A (Better for full content):
// Push entire content string into undoStack every time something changes.
// Undo = pop from undoStack, push to redoStack, restore content to last saved state.
// Redo = pop from redoStack, push to undoStack, restore content.

class Editor {
    constructor() {
        this.undoStack = [];
        this.redoStack = [];
        this.content = '';
    }

    type(char) {
        this.content += char
        this.undoStack.push(this.content);  // store before typing
        this.redoStack = []; // clear redo stack
    }


    undo() {
        const last = this.undoStack.pop();       // remove last state
        this.redoStack.push(last);               // store in redo stack
        this.content = this.undoStack[this.undoStack.length - 1]; // go back to prev
    }

    redo() {
        const next = this.redoStack.pop();       // take next state
        this.content = next;
        this.undoStack.push(next);
    }

    show() {
        console.log(`Current content: ${this.content}`);
    }
}

const editor = new Editor();
// editor.type('t');  // content = "t"
// editor.type('y');  // content = "ty"
// editor.type('p');  // content = "typ"
// editor.type('e');  // content = "type"
// editor.show();     // ➤ Current content: type

// editor.undo();     // undo 'e'
// editor.undo();     // undo 'e'
// // editor.show();     // ➤ Current content: typ

// // editor.undo();     // undo 'p'
// // editor.show();     // ➤ Current content: ty

// editor.redo();     // redo 'p'
// editor.redo();     // redo 'p'
// editor.show();     // ➤ Current content: typ
// console.log(editor);


// ================================================================

// 🧠 What is Postfix (Reverse Polish) Notation?

// 📌 Algorithm:
// Loop through each token in the expression:
// If it's a number → push it onto the stack.
// If it's an operator (+, -, *, /) → pop two values from stack.
// Perform the operation.
// Push the result back to the stack.
// At the end → stack will have only one element, which is the result.


function evaluatePostfix(expr) {
    const stack = [];
    const tokens = expr.split(" ");

    for (let token of tokens) {
        if (!isNaN(token)) {
            stack.push(Number(token))
        } else {
            let a = stack.pop()
            let b = stack.pop();

            switch (token) {
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
                case '/':
                    stack.push(a / b);
                    break;
                default:
                    throw new Error("Invalid operator");
            }

        }
    }
    return stack.pop(); // final result
}

// console.log(evaluatePostfix("2 3 +")); // 5
// console.log(evaluatePostfix("2 3 + 4 *"));  //20


// ===========================

// Queues

// Think of a queue as people standing in line in a supermarket.
// The first person to stand in line is also the first who can pay and leave the supermarket. 
// This way of organizing elements is called FIFO: First In First Out.



// Basic operations we can do on a queue are:

// Enqueue: Adds a new element to the queue.
// Dequeue: Removes and returns the first (front) element from the queue.
// Peek: Returns the first element in the queue.
// isEmpty: Checks if the queue is empty.
// Size: Finds the number of elements in the queue.

// Queue Implementation using Arrays
// let queue = [];

// // # Enqueue
// queue.push(1)
// queue.push(2)
// queue.push(3)

// let element = queue.pop()
// console.log(element);

// let peekElement = queue[0];
// console.log(peekElement);

// console.log('size queue', queue.length);

// console.log('isEmpty ', queue.length === 0);

// console.log(queue);


class Queue {
    constructor() {
        this.queue = []
    }

    enqueue(value) {
        this.queue.push(value);
    }

    dequeue() {
        let element = this.queue.shift()
        return element;
    }

    peek() {
        return this.queue[0]
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    size() {
        return this.queue.length
    }

    print() {
        console.log('Queue:', this.queue.join(' <- '));
    }
}


// let queue = new Queue();

// queue.enqueue('task1');
// queue.enqueue('task2');
// queue.enqueue('task3');

// queue.print();             // Queue: task1 <- task2 <- task3
// console.log(queue.dequeue()); // task1
// queue.print();             // Queue: task2 <- task3

// console.log('Peek:', queue.peek());         // Peek: task2
// console.log('Size:', queue.size());         // 2
// console.log('Is Empty:', queue.isEmpty());  // false

// 🚀 2. Now, Implement Queue using Class + Linked List

class NodeQueue {
    constructor(value) {
        this.value = value;
        this.next = null
    }
};


// node { value 1 , next : {  value : 2, next : null }  }

class linkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    };

    enqueue(value) {
        const newNode = new Node(value);
        console.log(`🔵 Enqueue: ${value}`);

        if (!this.tail) {
            this.head = this.tail = newNode;
        } else {
            console.log(`Before ➡️ tail: ${this.tail.value}, tail.next:`, this.tail.next);
            this.tail.next = newNode;
            this.tail = newNode;
            console.log(`After  ➡️ tail: ${this.tail.value}, tail.next:`, this.tail.next);

            // let current =  this.head;
            // console.log('current', current);

            // while(current.next){
            //     current = current.next;
            // }
            // current.next = newNode;
            // this.tail =  newNode
        }

        this.length++;
        this.print();
    }

    print() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.value + ' → ';
            current = current.next;
        }
        result += 'null';
        console.log(`📋 Queue: ${result}\n`);
    }
}

// const list = new linkedList()
// console.log(list.enqueue(1));
// console.log(list.enqueue(2));
// // console.log(list.enqueue(3));
// console.log(list);


// ==============================================================================================================
// Array

// find the lowest element in the array
// Variable 'minVal' = array[0]
// For each element in the array
//     If current element < minVal
//         minVal = current element

// let number = [7, 12, 9, 11, 3];

// let minVal = number[0]
// for (let i = 0; i < number.length; i++) {
//     if (number[i] < minVal) {
//         minVal = number[i]
//     }
// }
// console.log('minVal',minVal);


// ===============================


// insert at index 2 (shift elements):
let array = [10, 20, 30, 40, 50];

// let index = 2;
// let value = 25;
function shiftElements(array, index, value) {
    for (let i = array.length; i > index; i--) {
        console.log(` i--- arr[${i}]`, array[i]);
        console.log(`minus  arr[${i - 1}]`, array[i - 1]);
        array[i] = array[i - 1];
        console.log('array ', array);
    }
    array[index] = value
    // console.log(array);
    return array
}
// shiftElements(array, index, value)


// Delete at index 3 (shift back):
let index = 3;
function shiftBack(array, index) {
    for (let i = index; i < array.length - 1; i++) {
        array[i] = array[i + 1];
    }
    array.length--;
    return array
};
// console.log(shiftBack(array, index))


// Linear Search — Super Simple, Super Important

// Find the index of number 30 in [10, 20, 30, 40, 50]

const findIndex = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i
        }
    }
    return -1;  // not found
}

// console.log(findIndex(array, 30))


// 🚀 Binary Search Logic:

let binarr = [1, 3, 5, 7, 9];
target = 7;

const seachValue = (array, target) => {
    let left = 0;
    let right = array.length - 1
    let mid;
    console.log('right', right);
    while (left < right) {
        mid = Math.floor((left + right) / 2);
        console.log('mid', mid);
        if (array[mid] === target) return mid;
        if (array[mid] < target) {
            left = mid + 1
            console.log('left', left);
        } else {
            right = mid - 1;
            console.log('right', right);
        }
    }
    return -1;
};

// console.log(seachValue(binarr, target));


const binarySearchPattern = (array, target) => {
    let left = 0, right = array.length - 1, mid = 0;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);

        if (array[mid] === target) {
            console.log('mid', mid)
            return mid;
        }
        if (array[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    };

    console.log(-1);

    return -1
}


// binarySearchPattern([2, 5, 8, 12, 16, 23, 38, 45, 56, 72, 91], 23); // Expected Output: 5
// binarySearchPattern([1, 3, 5, 7, 9], 5); // Expected Output: 2
// binarySearchPattern([1, 3, 5, 7, 9], 10); // Expected Output: -1


// ===============


// Bubble sort

// 🔎 What is Bubble Sort?
// Bubble Sort repeatedly steps through the list,
//  compares adjacent elements and swaps them if they are in the wrong order.
// 👉 Biggest elements “bubble up” to the end after every full pass.


// 🔎 Why n - 1 - i?
// After every pass, the largest element settles at the end.
// So we can reduce the inner loop’s range on every pass → n-1-i.


// 👉 INTERVIEW TIP:
// Always mention that bubble sort is inefficient for large datasets 
// but good for learning and understanding sorting fundamentals.


my_array = [64, 34, 25, 12, 22, 11, 90, 5]
len = my_array.length;

const bubbleSort = (array) => {
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
            }
        }
    }

    return array
}

// console.log(bubbleSort(my_array))

my_array = [7, 3, 9, 12, 11]

const bubbleSortImprove = (array) => {
    for (let i = 0; i < len; i++) {
        let swapped = false;
        for (j = 0; j < len - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                swapped = true;
                console.log('----swapped', swapped);
            }
        }
        if (!swapped) {
            break;
        }
    };
    return array
};

// console.log(bubbleSortImprove(my_array))


//Selection Sort
//The Selection Sort algorithm finds the lowest value in an array 
// and moves it to the front of the array.

my_array = [64, 34, 25, 5, 22, 11, 90, 12]

let length = my_array.length;

function selectionSort(array) {

    let minIndex;
    for (let i = 0; i < array.length - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        [array[i], array[minIndex]] = [array[minIndex], array[i]]
    }


    return array;
};
// console.log(selectionSort(my_array))

// =======================
// insertion sort 
// 1 - start from the second element 
// (assume fisrt element is already stored)
// 2 - compare the current element with previous element
// 3 - if the previous element is , shift it forward
// 4 - find the correct position and insert the current element 
// 5 - repeat this process until the end 

function insertionSort(array) {

    //[64, 34, 25, 5, 22, 11, 90, 12]

    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        console.log('key -> ', key);

        let j = i - 1;
        console.log('value of j -->', j);
        console.log(`array[${j}]`, array[j]);
        console.log(`${array[j]} > ${key}`, array[j] > key);

        while (j >= 0 && array[j] > key) {
            console.log(`-- array[j + 1] --`, array[j + 1]);

            array[j + 1] = array[j];
            j = j - 1

            console.log('--->> j value', j);

            console.log('array in while loop', array);

        }
        console.log(`array j value out side the loop array[${j}+1]`, array[j + 1]);

        array[j + 1] = key
    }
    console.log(' <-----out side the loop array----->', array);
};

insertionSort([9, 6, 8, 3])

const insertionPattern = (array) => {

    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key
    }

    console.log(array);

}

// insertionPattern([9, 6, 8, 3])

// ======================================================


function quickSort(arr) {

    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[arr.length - 1];

    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    console.log('right', right);
    console.log('left', left);

    return [...quickSort(left), pivot, ...quickSort(right)]


}

// console.log(quickSort([5, 3, 8, 4, 2, 7, 6, 9, 1, 10]));


const quickSortPatttern = array => {

    if (array.length === 0) {   // condition to stop recursion 
        return array;
    }

    let pivot = array[array.length - 1];
    let right = [];
    let left = [];


    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    };

    console.log(right);
    console.log('left', left);

    return [...quickSortPatttern(left), pivot, ...quickSortPatttern(right)];
}

// console.log(quickSortPatttern([5, 3, 8, 4, 2, 7, 6, 9, 1, 10]));


const partition = (array, start, end) => {

    let pivot = array[end];
    let index = start - 1;

    for (let j = start; j < end; j++) {
        if (array[j] < pivot) {
            index++;
            [array[index], array[j]] = [array[j], array[index]];
        };
    };

    index++;
    [array[index], array[end]] = [array[end], array[index]];
    return index;
};

const quickSortPartition = (array, start = 0, end = array.length - 1) => {

    if (start < end) {
        const pivotIndex = partition(array, start, end);
        quickSortPartition(array, start, pivotIndex - 1);
        quickSortPartition(array, pivotIndex + 1, end);
    };
    return array;
}

// console.log(quickSortPartition([5, 3, 8, 4, 2, 7, 6, 9, 1, 10]));


function countingSort(arr) {
    // 1️⃣ Find max element (to define size of count array)
    let max = Math.max(...arr);


    // 2️⃣ Create count array of size max+1 and initialize with 0
    const count = new Array(max + 1).fill(0)

    console.log(count);


    // 3️⃣ Count occurrences of each number

    for (let num of arr) {
        count[num]++
    }

    console.log('Count Array after counting:', count);

    // 4️⃣ Build the sorted array

    let sortedArray = [];

    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            sortedArray.push(i);
            count[i]--
        }
    }

    console.log('sortedArray', sortedArray);

    return sortedArray;
};


// console.log(countingSort([4, 2, 2, 6, 3, 3, 1, 6, 5, 2, 3]));

// ===============================================

//🧩 Visualization Summary Table

// | Pass | Digit Used | Array After Sort                   |
// | ---- | ---------- | ---------------------------------- |
// | 1    | 1's        | \[170, 90, 802, 2, 24, 45, 75, 66] |
// | 2    | 10's       | \[802, 2, 24, 45, 66, 170, 75, 90] |
// | 3    | 100's      | \[2, 24, 45, 66, 75, 90, 170, 802] |

//🧮 KEY FORMULA IN CODE:
// Math.floor(arr[i] / exp) % 10
// This extracts digit at current place (exp):
// | exp | Meaning     |
// | --- | ----------- |
// | 1   | 1’s place   |
// | 10  | 10’s place  |
// | 100 | 100’s place |



// | Example                |
// | ---------------------- |
// | getDigit(170, 1) → 0   |
// | getDigit(170, 10) → 7  |
// | getDigit(170, 100) → 1 |

// This extracts the digit at current place.
//🔧 STEP 2: Create a function to extract digits

//🔧 STEP 3: Build counting sort based on digits
//Now comes the main helper function that handles one pass at a time:
// 💡 Why?
// count → frequency count of digits 0-9
// output → where we build sorted array for current digit


//max = 802  → number of digits = 3
// So, we will do 3 passes:
//1’s place
//10’s place
// 100’s place


// // count = [2, 0, 2, 0, 1, 2, 1, 0, 0, 0]

// // 🔧 STEP 5: Build cumulative count (prefix sum)
// for (let i = 1; i < 10; i++) {
//     count[i] += count[i + 1];
// }
// //To know exact positions for each digit in output array.
// //count = [2, 2, 4, 4, 5, 7, 8, 8, 8, 8]


// | arr\[i] | getDigit(arr\[i], 1) | count       |
// | ------- | -------------------- | ----------- |
// | 170     | 0                    | count\[0]++ |
// | 45      | 5                    | count\[5]++ |
// | 75      | 5                    | count\[5]++ |
// | 90      | 0                    | count\[0]++ |
// | 802     | 2                    | count\[2]++ |
// | 24      | 4                    | count\[4]++ |
// | 2       | 2                    | count\[2]++ |
// | 66      | 6                    | count\[6]++ |

// Helper function: Get the digit at specific place
function getDigit(num, place) {
    return Math.floor(num / place) % 10;
}

// Helper function: Find maximum number in array
function getMax(arr) {
    return Math.max(...arr);
}

// Counting sort for each digit position
function countingSortByDigit(arr, place) {
    const count = Array(10).fill(0);  // Count array for digits 0-9
    const output = Array(arr.length).fill(0);  // Output array

    // 1️⃣ Count frequency of each digit at current place
    for (let i = 0; i < arr.length; i++) {
        const digit = getDigit(arr[i], place);
        count[digit]++;
    }

    // 2️⃣ Build cumulative count (prefix sum)
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // 3️⃣ Build the sorted output array (reverse to maintain stability)
    for (let i = arr.length - 1; i >= 0; i--) {
        const digit = getDigit(arr[i], place);
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    // 4️⃣ Copy output array back to original array
    for (let i = 0; i < arr.length; i++) {
        arr[i] = output[i];
    }
}

// Main Radix Sort function
function radixSort(arr) {
    const max = getMax(arr); // Find largest number
    let place = 1;

    // Loop for every digit place (1s, 10s, 100s, etc.)
    let count = 1
    while (Math.floor(max / place) > 0) {
        console.log(`while loop run... ${count++}`);

        countingSortByDigit(arr, place);
        place *= 10;  // Move to next digit place
    }

    return arr;
}

// Test the code
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
// console.log("Original Array:", arr);
// console.log("Sorted Array:", radixSort(arr));


// ----------------------


// sliding window

function maxSumSubarrayBruteForce(arr, k) {
    let maxSum = -Infinity;         // Store the maximum sum found so far
    let maxSubarray = [];           // Store the actual subarray for reference

    // Outer loop: start index of subarray
    for (let i = 0; i <= arr.length - k; i++) {
        console.log(`📍 i = ${i} (start of subarray)`);
        console.log(`${i} <= ${arr.length} -  ${k}`);

        let currentSum = 0;
        let currentSubarray = [];

        // Inner loop: sum k elements from index i
        for (let j = i; j < i + k; j++) {

            currentSum += arr[j];        // Add current element to currentSum
            currentSubarray.push(arr[j]); // Store the subarray for understanding
            console.log(`   j = ${j} → Adding arr[${j}] = ${arr[j]}, currentSum = ${currentSum}`);

        }

        console.log(`👉 Subarray: ${currentSubarray}, Sum = ${currentSum}`);

        if (currentSum > maxSum) {
            console.log(`🔥 New max found: ${currentSum} > ${maxSum}`);
            maxSum = currentSum;
            maxSubarray = currentSubarray;
        }
        console.log('---');
    }

    console.log(`✅ Max Subarray: ${maxSubarray}, Max Sum: ${maxSum}`);
    return maxSubarray;
}


// --------------------------

// two pointer

// arr = [-3, -1, 0, 1, 2], target = 0;
// console.log(threSum(arr, target));

const twoSm = (array, target) => {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        let sum = array[left] + array[right];
        if (sum === target) return { left, right };
        else if (sum < target) left++;
        else right--;
    }
}

// console.log(twoSm(arr, target));


// let unsort = [1, 2, 3, 6, 6, 7, 7, 8];
p = [1, 2, 3, 6, 6, 7, 7, 8]

function duplicateTwo(p) {
    if (p.length === 0) return 0;

    let i = 0;
    for (let j = 1; j < p.length; j++) {
        if (p[i] !== p[j]) {
            i++;
            p[i] = p[j];
        };
    }
    return i + 1;
}
// let d = duplicateTwo(p);
// console.log(d);
// console.log(p.slice(0,d));



// ======================= string start =====================

str = "altamash";

// console.log(str.length); / 8
// console.log(str.charAt(2)); //t
// console.log(str[2]); // t
// console.log(str.slice(0, 3)) // alt
// console.log(str.substring(0, 3));
// console.log(str.split('').join(''))

let testStr = "javascript";

// console.log("1. Length of s?" , testStr.length);               // ➤ 10
// console.log("2. Last character?" , testStr[testStr.length - 1]); // ➤ "t"
// console.log("2. Last character?" , testStr.at(-1));              // ➤ "t" (modern & cleaner)
// console.log("2. Last character?" , testStr.charAt(testStr.length - 1)); // ➤ "t"
// console.log("3. First 4 characters using slice?", testStr.slice(0, 4)); // ➤ "java"
// console.log("4. Does it include 'script'?", testStr.includes('script')); // ➤ true
// console.log("4. Does it include 'script'?", testStr.search('script'));   // ➤ 4
// console.log("5. Index of 'a'?", testStr.indexOf('a'));                   // ➤ 1


// 🔁 3. Using Recursion (Advanced, asked in interviews)

function reverseRecursive(str) {
    if (str === '') return '';
    return reverseRecursive(str.slice(1)) + str[0];
}

// console.log("Reversed (recursion):", reverseRecursive("javascript")); // ➤ "tpircsavaj"

// reverse("abc") =>
// → reverse("bc") + "a"
// → reverse("c") + "b" + "a"
// → "" + "c" + "b" + "a" = "cba"


//using two pointer
function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left <= right) {
        if (str[left] !== str[right]) {
            console.log('not palindrom');
            return false
        }
        left++;
        right--
    }
    return true
}

// console.log(isPalindrome('hello'))


let revserString = (string) => {


    let result = '';
    // "sihT si ASD"

    // string.split(' ').forEach(items =>{
    //     result += items.split('').reverse().join('') + ' ' 
    // })

    let str = string.split(' ')
    console.log(str);
    for (let i = 0; i < str.length; i++) {
        console.log(str[i])
        // console.log(str[i].length - 1);
        for (j = str[i].length - 1; j >= 0; j--) {
            console.log('inner loop j');
            let inner = str[i];
            result += inner[j]
        }
        result += ' '; // Add space after each reversed word
    }

    console.log('result', result);

}

// revserString("This is DSA")



const basicPalindromChecker = str => {
    let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '')
    // console.log('cleaned', cleaned);
    // return cleaned === cleaned.split('').reverse().join('')

    let left = 0;
    let right = cleaned.length - 1;

    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false
        };

        left++;
        right--;
    }
    return true
}

// console.log(basicPalindromChecker('hello'));



//2️⃣ ✅ Reverse only even-length words

//  input // "This is an amazing DSA session"

// output // "sihT si an gnizama DSA noisses"

const revserWordEven = str => {

    str = str.split(' ')
    console.log(str);
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let words = str[i]

        // console.log(words.length);

        if (words.length % 2 === 0) {

            console.log('inner word', words);

            for (let j = words.length - 1; j >= 0; j--) {

                result += words[j]

            }

        } else {
            console.log('else words', words);

            result += words
        }

        console.log(i);


        if (i < str.length - 1) {
            result += ' ';
        }

    }
    console.log(result);

}

// revserWordEven("This is an amazing DSA session")


// Input: “acacacb”

// console.log(longestPalindrom('hello'));

function longestPalindrome(s) {
    if (!s || s.length < 1) return "";

    let start = 0;
    let end = 0;

    // Helper function: Expand around the center
    function expandAroundCenter(str, left, right) {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            left--;   // expand to the left
            right++;  // expand to the right
        }
        return right - left - 1; // length of palindrome
    }

    for (let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(s, i, i);     // odd length (single char center)
        let len2 = expandAroundCenter(s, i, i + 1); // even length (two-char center)
        let len = Math.max(len1, len2);

        // Update the longest range
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1);
}



function countVowelsAndConsonants(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
    let consonantCount = 0;

    string = string.toLowerCase();

    for (let char of string) {
        if (char >= 'a' && char <= 'z') {
            if (vowels.includes(char)) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
    }

    return {
        vowels: vowelCount,
        consonants: consonantCount
    };
}

// console.log(countVowelsAndConsonants("This is DSA! 🚀"));


function analyzeVowelsAndConsonants(string) {

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
    let consonantCount = 0;

    let uniqueVowels = []
    let uniqueConsonants = [];

    string = string.toLowerCase()
    for (let char of string) {
        if (char >= 'a' && char <= 'z') {
            if (vowels.includes(char)) {
                vowelCount++;
                if (!uniqueVowels.includes(char)) {
                    uniqueVowels.push(char)
                }
            } else {
                consonantCount++;
                if (!uniqueConsonants.includes(char)) {
                    uniqueConsonants.push(char)
                }
            }
        }
    }

    return { vowelCount, uniqueVowels, consonantCount, uniqueConsonants }
}

// console.log(analyzeVowelsAndConsonants("This is DSA! 🚀"));


// {
//   vowelCount: 3,
//   consonantCount: 5,
//   uniqueVowels: ['i', 'a'],
//   uniqueConsonants: ['t', 'h', 's', 'd']
// }



function removeDuplicateChars(string) {
    let unquie = [];

    // for (let char of string ){
    //     console.log(char);
    //     if(!unquie.includes(char)){
    //         unquie.push(char)
    //     }

    // }

    // return unquie.join('')

    let result = '';

    // for( let char of string){
    //     if(!result.includes(char)){
    //         console.log(char);
    //         result+=char
    //     }
    // }

    // return result

    let set = new Set()


    for (let char of string) {
        if (!set.has(char)) {
            set.add(char)
            result += char
        }
    }

    return result
}

// console.log(removeDuplicateChars("programming"));  // Output: "progamin"


function mostFrequentChar(string) {

    let countMap = {};
    let maxCount = 0;
    let maxChar = ''

    for (let char of string) {
        if (countMap[char] === ' ') continue;

        countMap[char] = (countMap[char] || 0) + 1
        // console.log(countMap);

        if (countMap[char] > maxCount) {
            maxCount = countMap[char];
            maxChar = char
        }
    }

    // console.log(maxCount , maxChar);


    // let result = [];

    // for( let char  in countMap){
    //     console.log(' in char' ,char);
    //     if(countMap[char] >= maxCount){
    //         result.push(char)
    //     }

    // }

    // console.log(result);    

    return { maxChar, maxCount }
}


// console.log(mostFrequentChar("mississippi")); // i


function isAnagram(string, string1) {
    string = string.toLowerCase();
    string1 = string1.toLowerCase()

    let strCount = {}
    // let strCount2 = {}

    for (let char of string) {
        strCount[char] = (strCount[char] || 0) + 1
    }



    for (let char of string1) {
        // console.log(char);

        if (!strCount[char]) {
            return false;
        } else {
            strCount[char]--;
        }

    }

    // console.log(strCount);
    return true

}


// console.log(isAnagram("listen", "silent"));  // true
// console.log('isAnagram',isAnagram("ADOBECODEBANC", "ABC"));    // false

function compressString(string) {

    if (str.length === 0) return "";
    let result = '';
    let count = 1;

    for (let i = 1; i < string.length; i++) {
        if (string[i] === string[i - 1]) {
            count++
        } else {
            result += string[i - 1] + count;
            count = 1
        }
    }

    result += string[string.length - 1] + count
    return result.length < string.length ? result : string
}




// console.log(compressString("aabcccccaaa"));  // "a2b1c5a3"
// console.log(compressString("abc"));          // "abc"
// console.log(compressString("aabbcc"));       // "aabbcc" (no gain)



function decompressString(string) {
    if (string.length === 0) return

    let result = '';

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        let count = '';
        while (i + 1 < string.length && !isNaN(string[i + 1])) {
            count += string[++i];
        }

        result += char.repeat(Number(count))

    }

    return result

}

// console.log(decompressString('a2b1c5a3'))


function isValid(string) {
    let stack = []
    let open = ['[', '{', '(']
    // let close = [')', ']' , '}']

    let map = {
        '}': '{',
        ')': '(',
        ']': '['
    };

    for (let char of string) {
        if (open.includes(char)) {
            // console.log('inside include ', char);
            stack.push(char)
        } else {
            // console.log('else char', char);
            if (stack.length === 0 || stack.pop() !== map[char]) return false
        }

    }

    // console.log(stack);
    return stack.length === 0;
}


// console.log(isValid("({[]})")); // ✅ true
// console.log(isValid("([)]"));   // ❌ false
// console.log(isValid("{[]}"));   // ✅ true
// console.log(isValid("["));      // ❌ false

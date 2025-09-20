// Find a pair with target sum in a sorted array
// Array: [1, 2, 3, 4, 5]
// Target Sum: 7

function findPair(array, target = 7) {
  try {
    console.log(array);
    let sum;

    let left = 0, right = array.length - 1
    console.log('left', left);
    console.log('right', right);


    while (left < right) {
      console.log('code in while loop');
      sum = array[left] + array[right];
      if (target === sum) {
        return { left, right }

      } else if (sum < target) {
        left++; // Increase the sum
      } else {
        right--; // Decrease the sum
      }
    }
    return -1
  } catch (error) {
    console.log('error', error);
  }
}
// console.log(findPair([1, 2, 3, 4, 5], 7))


//Remove duplicates from a sorted array


function findDuplicate(array) {
  if (array.length === 0) return 0


  let slow = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[slow] !== array[i]) {
      slow++;
      array[slow] = array[i]
    }
  }
  return slow + 1
}

let array = [1, 2, 3, 3, 4, 5, 5]
// console.log(array.slice(0 , findDuplicate(array)));


// Reverse an array in-place

function reverseArray(array) {

  if (array.length === 0) return 0
  let left = 0; let right = array.length - 1

  while (left < right) {
    [array[left], array[right]] = [array[right], array[left]];
    left++
    right--
  }

  console.log(array);

}

// reverseArray([1, 2, 3, 4, 5])

// Check if a string is a palindrome

function isPalindrome(string) {
  let left = 0
  let right = string.length - 1

  while (left < right) {
    if (string[left] !== string[right]) {
      return false
    }
    left++
    right--
  }
  return true
}

// console.log(isPalindrome("mam"));   // true
// console.log(isPalindrome("madam")); // true
// console.log(isPalindrome("hello")); // false

// Input:  "hello"
// Output: "holle"

// Input:  "leetcode"
// Output: "leotcede"

function reverseVowels(string) {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let arr = string.split('')
  console.log(arr);
  let left = 0, right = arr.length - 0;

  while (left < right) {
    if (vowels.includes(arr[left]) && vowels.includes(arr[right])) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++
      right--
    } else if (!vowels.includes(arr[left])) {
      left++
    } else {
      right--
    }
  }
  return arr.join("");  // convert array back to string
}

// console.log(reverseVowels('hello'))


// Input:  "abcabcbb"
// Output: 3  (substring "abc")

function longestSubstring(string) {

  let set = new Set();
  let start = 0, end = 0, maxLength = 0;

  while (end < string.length) {
    if (!set.has(string[end])) {
      set.add(string[end])
      maxLength = Math.max(maxLength, set.size)
      end++
    } else {
      set.delete(string[start]);
      start++
    }
  }

  return maxLength
}

// console.log(longestSubstring("abcabcbb"))

// Input:  "abcabcbb"
function lengthOfLongestSubstring(s) {
  let set = new Set();
  let start = 0, maxLength = 0;
  // let end = 0;


  for (let end = 0; end < s.length; end++) {

    while (set.has(s[end])) {
      set.delete(s[start]);
      start++
    }

    set.add(s[end]);
    maxLength = Math.max(maxLength, end - start + 1)

  }
  return maxLength;
}

// console.log(lengthOfLongestSubstring("abcabcbb")); // 3


// 🔜 2. Longest Substring with At Most K Distinct Characters
// ➡️ New concept: Use a Map (or Object) to track frequencies
// ➡️ Purpose: Control max K unique characters in the current window
// Input: s = "eceba", k = 2  
// Output: 3  
// Explanation: "ece" has 2 distinct characters.


// 🔜 3. Longest Substring with Exactly K Distinct Characters
// (Same as above, but now we need exactly K instead of at most)



// 🔜 4. Longest Repeating Character Replacement
// ➡️ Given a string and an integer k, you can replace at most k characters to make the longest possible substring of the same letter.
// Input: s = "AABABBA", k = 1  
// Output: 4  
// Explanation: Replace the one 'B' → "AABA" → max length = 4



let unSortedArray = [1, 2, 4, 5, 6, 9, 8, 7, 3]

function findLargest(array, n) {
  let sortedArray = array.sort((a, b) => a - b)
  console.log(sortedArray[sortedArray.length - n]);
  return sortedArray[sortedArray.length - n]
}

// findLargest(unSortedArray, 3)


function findMissingNumber(array) {
  let n = array.length + 1
  let totalSum = (n * (n + 1) / 2)
  console.log(totalSum);
  let currSum = array.reduce((pre, curr) => pre + curr, 0)
  console.log('currSum', totalSum - currSum);
}

//  let exceptSum = (n * (n + 1) / 2);
// console.log(findMissingNumber([1, 2, 4, 5, 6])); // 3



function lengthOfLongestSubstringKDistinct(s, k) {
  let start = 0, maxLength = 0, map = {};
  for (let end = 0; end < s.length; end++) {

    map[s[end]] = (map[s[end]] || 0) + 1;

    while (Object.keys(map).length > k) {
      map[s[start]]--;

      if (map[s[start]] === 0) {
        delete map[s[start]]
      }
      start++;
    }
    maxLength = Math.max(maxLength, end - start + 1)
  }
  // console.log('maxLength', maxLength);
  // console.log(map);

  return maxLength;
}

// console.log(lengthOfLongestSubstringKDistinct("eceba", 2)); // Output: 3


// 3. Longest Substring with Exactly K Distinct Characters

function longestSubstringWithKDistinct(s, k) {
  let start = 0, maxLength = 0, map = {}

  for (let end = 0; end < s.length; end++) {
    let char = s[end];
    map[char] = (map[char] || 0) + 1;

    while (Object.keys(map).length > k) {
      let char = s[start]
      map[char]--;
      if (map[char] === 0) {
        delete map[char]
      }
      start++;
    };

    if (Object.keys(map).length === k) {
      maxLength = Math.max(maxLength, end - start + 1)
    };
  }

  return maxLength
}

// console.log(longestSubstringWithKDistinct("eceba", 2)); // 3 -> "ece"
// console.log(longestSubstringWithKDistinct("aa", 1));    // 2 -> "aa"
// console.log(longestSubstringWithKDistinct("abcadcacacaca", 3)); // 11 -> "cadcacacaca"
// console.log(longestSubstringWithKDistinct("abaccc", 2)); // 4 -> "accc"
// console.log(longestSubstringWithKDistinct("aabbcc", 3)); // 6 -> "aabbcc"
// console.log(longestSubstringWithKDistinct("aabbcc", 1)); // 2 -> "aa" or "bb" or "cc"


function maxSubstrKDistinct(s, k) {
  if (k === 0 || s.length === 0) return { length: 0, substrings: [] };

  let start = 0;
  let maxLength = 0;
  let map = {};
  let substrings = [];

  for (let end = 0; end < s.length; end++) {
    const endChar = s[end];
    map[endChar] = (map[endChar] || 0) + 1;

    while (Object.keys(map).length > k) {
      const startChar = s[start];
      map[startChar]--;
      if (map[startChar] === 0) delete map[startChar];
      start++;
    }

    const windowLength = end - start + 1;

    console.log('map', map);

    console.log('windowLength', windowLength);


    if (windowLength > maxLength) {

      console.log('windowLength > maxLength');

      maxLength = windowLength;

      console.log('maxLength', maxLength);

      console.log('s', s);

      console.log('start', start);
      console.log('end', end);

      substrings = [s.slice(start, end + 1)];

      console.log('substrings', substrings);

    } else if (windowLength === maxLength) {
      console.log('windowLength === maxLength');

      console.log('s', s);

      substrings.push(s.slice(start, end + 1));

      console.log('substrings', substrings);

    }
  }

  return { length: maxLength, substrings };
}


// Input: s = "abaccc", k = 2  
// Output:  
// Length: 4  
// Substrings: ["accc"]


// Input: s = "aabbcc", k = 2  
// Output:  
// Length: 4  
// Substrings: ["aabb", "bbcc"]
// console.log(maxSubstrKDistinct("abaccc", 2))



// let subArray = [9, 4, 20, 3, 10, 5]

// let count = 0;

// let target = 33;

// for (let index = 0; index < subArray.length; index++) {
//   let sum = 0
//   for (let j = index; j < subArray.length; j++) {
//     sum += subArray[j]
//     console.log('sum', sum);

//     if (sum === target) {
//       count++
//     }
//   }
// }
// console.log('count', count);


{/*
  
  🔁 Sliding Window Practice Problems (K Distinct Characters Pattern)
1. ✅ Longest Substring with At Most K Distinct Characters
📌 Input: "eceba", k = 2
✅ Output: "ece" → Length: 3
🧠 Goal: Max length of substring with at most k distinct characters.

2. ✅ Longest Substring with Exactly K Distinct Characters
📌 Input: "aaabbbcc", k = 2
✅ Output: "aaabbb" → Length: 6
🎯 Tip: Keep track of distinct characters, and shrink when more than k.

3. 🔄 Count All Substrings with Exactly K Distinct Characters
📌 Input: "pqpqs", k = 2
✅ Output: 7 substrings (pq, pqp, qp, pq, pq, qs, pqs)
✅ Variation: Requires counting, not longest.
💡 Approach:
Count(Exactly K) = Count(At Most K) - Count(At Most K-1)

4. 💬 Smallest Substring with Exactly K Distinct Characters
📌 Input: "aabacbebebe", k = 3
✅ Output: "cbebebe" → Length: 7
🔍 Look for the smallest window with exactly k unique characters.

5. 🚫 Remove Characters to Get K Distinct
📌 Input: "aaabccddd", k = 2
🎯 Remove as few characters as possible to make the string have only k distinct characters.

*/}

// 1. ✅ Longest Substring with At Most K Distinct Characters
// 📌 Input: "eceba", k = 2
// ✅ Output: "ece" → Length: 3
// 🧠 Goal: Max length of substring with at most k distinct characters.
const substrWithK = (s, k) => {
  let map = {}
  let start = 0, maxLength = 0


  for (let end = 0; end < s.length; end++) {
    let char = s[end];
    map[char] = (map[char] || 0) + 1
    // console.log(map);

    while (Object.keys(map).length > k) {
      let char = s[start]
      map[char]--
      if (map[char] === 0) {
        delete map[char]
      }
      start++
    }
    maxLength = Math.max(maxLength, end - start + 1)
  }
  return maxLength
}

// console.log(substrWithK("eceba", 2))


// 2. ✅ Longest Substring with Exactly K Distinct Characters
// 📌 Input: "aaabbbcc", k = 2
// ✅ Output: "aaabbb" → Length: 6
// 🎯 Tip: Keep track of distinct characters, and shrink when more than k.

const substrWithExactK = (s, k) => {
  let map = {}
  let start = 0, maxLength = 0

  for (let end = 0; end < s.length; end++) {
    let char = s[end];
    map[char] = (map[char] || 0) + 1

    while (Object.keys(map).length > k) {
      let char = s[start]
      map[char]--
      if (map[char] === 0) {
        delete map[char]
      }
      start++
    }

    if (Object.keys(map).length === k) {
      maxLength = Math.max(maxLength, end - start + 1);
    }
  }
  return maxLength
}

// console.log(substrWithExactK('aaabbbcc', 2))

// | Problem Type                          | Key Logic / Formula                          | Use Case        |
// | ------------------------------------- | -------------------------------------------- | --------------- |
// | Longest Substring At Most K Distinct  | Expand window, shrink when map size > k      | `max length`    |
// | Longest Substring Exactly K Distinct  | Same as above, add check for `map.size == k` | `max length`    |
// | Count Substrings Exactly K Distinct   | `atMost(k) - atMost(k-1)`                    | `count`         |
// | Smallest Substring Exactly K Distinct | Track min window when `map.size == k`        | `min length`    |
// | Remove Characters to Get K Distinct   | `s.length - longestSubstrWithAtMostK()`      | `min deletions` |


function moveZeroes(nums) {

  // let arr1 = []
  // let arr2 = []

  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === 0) {
  //     arr1.push(nums[i])
  //   } else {
  //     // arr1.unshift(nums[i])
  //     arr2.push(nums[i])
  //   }
  // }
  // console.log(arr1);
  // console.log(arr2);


  // return [...arr2, ...arr1]


  let start = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      console.log(nums[i]);
      [nums[start], nums[i]] = [nums[i], nums[start]]
      start++
    }
  }

  console.log('nums', nums);
  return nums

}


// console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]


// Input: [3, 1, 2, 4]
// Output: [4, 2, 1, 3] or any valid even-odd order


function moveEven(nums) {
  let start = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      // console.log(nums[i]);
      [nums[start], nums[i]] = [nums[i], nums[start]]
      start++
    }
  }

  console.log(nums);
}
// moveEven([3, 1, 2, 4])

// Input: nums = [3, 2, 2, 3], val = 3  
// Output: length = 2, nums = [2, 2, _, _]


function Remove(nums, val) {
  let start = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      [nums[start], nums[i]] = [nums[i], nums[start]];
      start++;
    }
  }

  console.log('start (new length):', start);
  console.log('Modified array:', nums.slice(0, start));

  return start; // This is the new length
}


// Remove([3, 2, 2, 3], 3)


let b = [2, 0, 1, 0, 2, 0, 1, 1];

const sortZeros = (b) => {

  let start = 0, mid = 0, high = b.length - 1;

  while (mid <= high) {
    if (b[mid] === 0) {
      [b[start], b[mid]] = [b[mid], b[start]]
      start++
      mid++
    } else if (b[mid] === 1) {
      mid++
    } else if (b[mid] === 2) {
      [b[high], b[mid]] = [b[mid], b[high]]
      high--
    }
  }

  // console.log(b);
  return b
}

// console.log(sortZeros(b))


function partitionArray(nums, pivot) {
  let start = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      [nums[start], nums[i]] = [nums[i], nums[start]]
      start++
    }
  }

  console.log(nums);
}

// Test:
// partitionArray([9, 12, 3, 5, 14, 10, 10], 10);


function rearrangeInPlace(nums) {
  let start = 0;
  for (let end = 0; end < nums.length; end++) {
    if (nums[end] < 0) {
      [nums[start], nums[end]] = [nums[end], nums[start]]
      start++;
    };
  }
  return nums;
}

// console.log(rearrangeInPlace([-1, 2, -3, 4, 5]));

// Input:
// [-4, -1, 0, 3, 10]

// Output:
// [0, 1, 9, 16, 100]


function sortedSquares(nums) {
  // for( let i = 0 ; i < nums.length ; i++){
  //   nums[i] = Math.pow(nums[i] , 2)
  //   // nums[i] = nums[i] * 2
  // }
  // console.log(nums.sort((a,b)=>a-b));
  let result = Array(nums.length)
  // console.log(nums);
  let left = 0, right = nums.length - 1, pos = nums.length - 1

  while (left <= right) {
    console.log('while loop');

    let leftsq = nums[left] ** 2
    let rightsq = nums[right] ** 2

    console.log('leftsq', leftsq);
    console.log('rightsq', rightsq);


    if (leftsq > rightsq) {
      result[pos] = leftsq;
      left++
    } else {
      result[pos] = rightsq
      right--
    }
    pos--
  }
  console.log(result);
  return result

}


// sortedSquares([-4, -1, 0, 3, 10])




const recursiveN = (n) => {
  if (n === 0) return
  console.log(n);
  recursiveN(n - 1)
}

//  recursiveN(100)

// let i = 4;

// while (i !== 0) {
//   if (i === 0) return
//   console.log(i);
//   i--
// }


const arr = [1, 2, 0, 3];

function smallestMissingPositive(nums) {
  const positives = nums.filter(n => n > 0);       // [1, 2]
  const set = new Set(positives);                   // {1, 2}

  let smallest = 1;
  while (set.has(smallest)) {
    smallest++;
  }

  return smallest;
}

// console.log(smallestMissingPositive(arr)); // 4



function factorial(n) {
  // console.log(n)
  // console.log(n * n - 1);
  if (n === 1 || n === 1) return 1
  return n * factorial(n - 1);     // recursive step

}
// console.log(factorial(5))

function fibonacci(n) {
  if (n === 0) return 0; // base case 1
  if (n === 1) return 1; // base case 2
  return fibonacci(n - 1) + fibonacci(n - 2); // recursive step
}
// console.log(fibonacci(6)); // 5



const bject = { name: 'khan' }

let data = { age: 24 }
// console.log({ ...bject});
// bject.age = 23

// console.log({ ...bject, ...data });




// closure
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      if (amount > 0) {
        balance += amount;
        return `Deposited ${amount}. New balance: ${balance}`;
      }
      return "Invalid deposit amount";
    },

    getBalance() {
      return balance;
    },

    withdraw(amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        return `Withdrawn ${amount}. New balance: ${balance}`;
      }
      return "Insufficient funds or invalid amount";
    }
  };
}

// const account = createBankAccount(100);
// console.log(account.getBalance());    // 100
// console.log(account.deposit(50));     // Deposited 50. New balance: 150
// console.log(account.withdraw(70));    // Withdrawn 70. New balance: 80
// console.log(account.balance);         // Error


const outer = () => {
  let counter = 0
  return function inner() {
    return counter += 1
  }
}

// let inner = outer()
// console.log(inner())
// console.log(inner())
// console.log(inner())



//  const allRoutes = () => {
//   const routes = [

//     // =====================
//     // Admin, Executive, Manager
//     // =====================
//     { path: "/", element: '', permissions: ['serviceProvider'] },
//     { path: "/sign-out", element: '', permissions: [ 'bookingManager'] },

//   ]
//   return routes
// }


let roles = { 
  'bookingManager' : 'bookingManager',
  'admin' : 'admin',
}

// console.log('roles', Object.keys(roles).map(item => item?.toLocaleLowerCase()));

//  data = allRoutes()
// console.log('data',data.filter(item => item.permissions.includes(...Object.keys(roles))) )
console.log(["superAdmin", "zapsExecutive", "zapsManager", "bookingManager", "bookingManagerAdmin", "serviceProvider"].map(item => item?.toLocaleLowerCase()))
let value = ["superAdmin", "zapsExecutive", "zapsManager", "bookingManager", "bookingManagerAdmin", "serviceProvider"]

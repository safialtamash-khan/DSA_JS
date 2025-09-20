// rever each word in thier own place
// const string = 'hello bhai';


// const result1 =   str.split(' ')
//     .map(word=>word.split('').reverse().join(''))
//     .join(' ');

// console.log(result1);

// in splite need space in fisrt
// in last join need space to join array 

// const val = string?.split(' ')?.map(item => item?.split('').reverse().join('')).join(' ')
// console.log(val);

// console.log(string?.split(' ')); // 'olleh dlrow

// String method 

// charAt()
// const str = 'hello world'

// const value = str.charAt(0) // return string or word by giving index
// const value = str.charAt(6.3) // return string or word by giving index

// const value1 = str.charCodeAt(4)  // str[4] = o give UTF-16 code output > 111

// const value = str.codePointAt(4) // same output
// const value = str.endsWith('world') // output true return boolean if condition is true



// Add charCodeAt and fromCharCode values to each character
// const modifiedStr = Array.from(str, char => {
//     console.log('str', str);
//     console.log('char',char);
//   const charCode = char.charCodeAt(0);
// //   console.log('charCode',charCode);
//   const modifiedChar = String.fromCharCode(charCode ); // You can modify this as needed
//   console.log(modifiedChar);
//   return `${modifiedChar}`;
// }).join('')

// console.log(modifiedStr);
// const value = [...str].map( item =>{
//     const char = item.charCodeAt(0);
//     newStr = String.fromCharCode(char);
//     return newStr
// }).join('')

// console.log(value);



// const value = String.fromCharCode(72, 69, 76, 76, 79);
// console.log(value);

// const value = str.includes('hello');
// console.log(value);

// const value = str.indexOf('o')
// console.log(value);



let phone = "9749665550533";
let phone1 = "974";

let value = phone.replace('974' ,'')
let value1 = phone1.replace('974' ,'')

console.log(value);
console.log("boolean value",Boolean(value));
console.log(Boolean(value1));

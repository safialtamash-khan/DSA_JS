

// function outer() {
//     let value = 1;
//     return function inner() {
//         return value + 1
//     };
// };

// const inner = outer();
// console.log(inner());


function createCouter(count) {
    return {
        increment: function () {
            count++;
            return count;
        },
        decrement: function () {
            count--;
            return count;
        },
        getValue: function () {
            return count;
        }

    }
};

let counter = createCouter(1)
// console.log(counter.increment());
// console.log(counter.decrement());


function createGreeting(name) {
    return function finalMessage(greet) {
        return `${greet} to ${name}`
    }
}

let greetUser = createGreeting('Khan')
// console.log(greetUser('hello'));


function createUserPassword() {
    let password = '';
    return {
        set: function (newPassword) {
           password = newPassword
        },
        create: function (newPassword) {
            password = newPassword
            return password
        },
        // checkPassword: function (oldPassword,checkPassword) {
        //     return oldPassword === checkPassword;
        // },
        checkPassword: function (checkPassword) {
            return password === checkPassword;
        }
    }
}


const createPassword = createUserPassword()
// console.log(createPassword.set('123'));
// console.log(createPassword.checkPassword('123'))
// createPassword.set('321')
// console.log(createPassword.checkPassword('123'))


console.log('0 || ' , 0 || 'empty');
console.log('1 || ' , 1 || 'empty');


console.log('0  ?? ' , 0 ?? '');
console.log('1  ?? ' , 1 ?? '');


console.log('0  && ' , 0 && '');
console.log('1  && ' , 1 && '');


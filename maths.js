function squareroot(number) {
    for (let i = 0; i * i <= number; i++) {
        if (i * i === number) return i;
    }
    return number; // don't know if you should have this line in case nothing found
}


// console.log('squareroot', squareroot(9));

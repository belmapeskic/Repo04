function main(numOne, numTwo){
    // only change code below this line
    var reminder;
    var numOne;
    var numTwo;
    reminder = numOne % numTwo;
    // only change code above this line
    return reminder;
}

console.log(main(5, 2)); // assigned 1
console.log(main(15, 4)); // assigned 3
console.log(main(102, 25)); // assigned 2
module.exports = main;

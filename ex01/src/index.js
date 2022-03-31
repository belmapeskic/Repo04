function main(numOne, numTwo){

    var quotient;
    if(numTwo === 0){
        quotient = 'Divide by 0! Cannot divide by zero!';
    } else {
    // only change code below this line
    var quotation;
    var numOne;
    var numTwo;
    quotient = numOne / numTwo;
    // only change code above this line
}

return quotient;
}

console.log(main(15, 3)); // assigned 5
console.log(main(25, 5)); // assigned 5
console.log(main(420, 10)); // assigned 42
console.log(main(55, 0)); // assigned 'Divide by 0! Cannot divide by zero!'
module.exports = main;

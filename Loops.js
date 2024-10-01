//Problem 1
for(let i = 1; i <= 100; i++){
    let output = " ";
    
    if(i % 3 == 0 && i % 5 == 0){
        output += "FizzBuzz";
    }
    else if(i % 3 == 0){
        output += "Fizz";
    }
    else if(i % 5 == 0){
        output += "Buzz";
    }
    else {
        output += i; // If not divisible by 3 or 5, print the number
    }
    
    console.log(output); // If a number is not divisible by either 3 or 5, log the number.
}


//Problem 2
let n = 5; // Declared a random starting number 
let currentNumber = n + 1; // Start checking from the next number after n


while (true) {
    
    for (let i = 2; i <= Math.sqrt(currentNumber); i++) {
        if (currentNumber % i === 0) {
            // If divisible, currentNumber is not prime, so skip to the next number
            currentNumber++;
            continue;
        }
    }

    console.log(`${currentNumber} is the next prime number after ${n}.`);
    break; // Exit the loop as we found the next prime number
}

//count digit
function countdigit(n){
    let count = 0;
    while (n > 0) {
        count += 1;
        n = Math.floor(n / 10);
    }
    process.stdout.write(count.toString());
}

 countdigit(325);

//reverse a number
function Reverse(N){
    let reverseNum = 0;
    let lastdigit = 0;
    while(N > 0){
        lastdigit = N % 10; //last digit
        N = Math.floor(N / 10);

        reverseNum = (reverseNum * 10) + lastdigit; 
    }
    console.log(reverseNum);
}

 Reverse(1234);


//palindrome Number

function palindrome(N){
    let reverseNum = 0;
    let originalNum = N;
    let lastdigit;

    while(N > 0){
        lastdigit = N % 10;
        N = Math.floor(N / 10);

        reverseNum = (reverseNum * 10) + lastdigit;
    }
    
    if(reverseNum === originalNum){
        console.log("It's a palindrome Number");
    } else {
        console.log("It's not a palindrome number");
    }
}

 palindrome(414);

//ArmstrongNumber 
function isArmstrongNumber(number) {
    let numDigits = String(number).length;
    let tempNumber = number;
    let sum = 0;

    while (tempNumber > 0) {
        let digit = tempNumber % 10;
        sum += Math.pow(digit, numDigits);
        tempNumber = Math.floor(tempNumber / 10);
    }

    return sum === number;
}


let exampleNumber = 35;
if (isArmstrongNumber(exampleNumber)) {
    console.log(`${exampleNumber} is an Armstrong number.`);
} else {
    console.log(`${exampleNumber} is not an Armstrong number.`);
}





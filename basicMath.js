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


//printallDivisor

function Alldivisor(N) {
    for (let i = 1; i <= N; i++) {
        if (N % i === 0) {
            console.log(i);
        }
    }
    
    console.log();
}

Alldivisor(10);

//primeNumber

function isPrimeNumber(N) {
    if (N <= 1) {
        return false;  // 1 is not a prime number
    }

    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            return false;  // N has a divisor other than 1 and itself
        }
    }

    return true;  // N is a prime number
}


let number = 36;
console.log(isPrimeNumber(number)
    ? `${number} is a prime number.`
    : `${number} is not a prime number.`);


  //findGCD
  function findGCD(num1, num2) {
    let ans;

    for (let i = 1; i <= Math.min(num1, num2); i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            ans = i;
        }
    }
 return ans;
}
   console.log(findGCD(4,10));  





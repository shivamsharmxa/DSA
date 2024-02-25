//count digit
function countdigit(n){
    let count = 0;
    while (n > 0) {
        count += 1;
        n = Math.floor(n / 10);
    }
    process.stdout.write(count.toString());
}

// countdigit(325);

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

// Reverse(1234);


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
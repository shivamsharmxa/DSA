// //printing n times
// let count = 0;
// function ntimes(){
//     if(count===5) return;
//     console.log(count);
//     count++;
//     ntimes();
// }

// function main(){
//     ntimes();
// }

// // main();

// //printing name n times

// function func(i, n) {
//     // Base Condition.
//     if (i > n) return;
//     console.log("Shivam");
 
   
//     func(i + 1, n);
// }

// function name() {
//     func(1, 5);
// }


// // name();


// //printing from N to i

// function func(i,n){
//     //base condition
//     if(i<1) return;
//     console.log(i);

//     func(i-1,n);
// }

// function decrement(i,n){
//     func(n,n);
//     return ;
// }
// decrement(5,5);


// //sum of first N numbers

// function sum(n) {
//     let sum = (n * (n + 1)) / 2;
//     console.log(sum);
// }

// function printingSum(n) {
//     sum(n);
// }

// printingSum(5);


// //factorial of n numbers

// function factorial(n){
//     //base condition
//     if(n==0){
//         return 1;
//     }
//     return n*factorial(n-1);
// }

// function printFactorial(n){
//     console.log(factorial(n));
// }

// printFactorial(5);

// // reverse the array 

// function printArray(arr) {
//     console.log("The reversed array is:-");
//     for (let i = 0; i < arr.length; i++) {
//         process.stdout.write(arr[i] + " ");
//     }
//     console.log();
// }
// //function to reverse the array 
// function reversedArray(arr,start,end){
//     if(start<end){
//         [arr[start],arr[end] = arr[end],arr[start]];
//         reversedArray(arr,start + 1,end - 1);

//     }
// }

// function main(){
//     const n =5;
//     const arr=[10,9,8,7,6];
//     reversedArray(arr,0,n-1);
//     printArray(arr);
// }

// main();

// //check if the given string is palindrome or not

// function palindrome(i, s) {
//     if (i >= s.length / 2) return true;

//     if (s[i] !== s[s.length - i - 1]) return false;

//     return palindrome(i + 1, s);
// }

// function checkPalindrome(i, s) {
//     return palindrome(i, s);
// }

// // Example string.
// let naman = "naman";
// console.log(checkPalindrome(0, naman));


// //fibonacci Number
// function fibonacci(N){
//     //base condition 
//     if(N<=1) return N;

//     let last = fibonacci(N-1);
//     let prevLast = fibonacci(N-2);

//     return last + prevLast;
// }

// function printFibonacci(N){
//     return fibonacci(N)

// }
// console.log(printFibonacci(4));


//Printing 1 to N times
function print(N){
    //base Condition
  if(N==0) return;
  print(N-1);
  console.log(N);
  return;
}

function main(){
    print(5);
}


// Printing N to I
function print(N){
    if(N==0) return;
    console.log(N);
    print(N-1);
    return;
}
function main1(){
    print(6);
}

// main1();

//Sum of First N numbers
function sum(N){
    //base condition
    if(N==0) return 0;
    let smalloutput = sum(N-1);
    let output = N + smalloutput;
    return output;
}

function main2(){
    console.log(sum(5));
}
main2();


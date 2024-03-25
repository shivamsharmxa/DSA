
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
// main2();

//factorial of N Number
function fact(N){
    //base condition
    if(N==0) return 1;
    factorial = N* fact(N-1);
    return factorial;
}

function main3(){
    console.log(fact(5));
}
// main3();


//Reverse an array
function reverseArray(arr,start=0,end=arr.length-1){
    //base condition
    if(start>=end){
        return arr;
    }else{
        [arr[start],arr[end]] = [arr[end],arr[start]]
        return reverseArray(arr, start + 1, end - 1);
    }
}
function main4(){
    console.log(reverseArray([1,2,3,4,5]));
}
// main4();

//string is pallindrome or not

function pallindrone(str , start , end=str.length-1){
    if ( start>end) return true;
    if(str[start] != str[end]) return false;

    return pallindrone(str,start+1,end-1);
}
function main5(){
    console.log(pallindrone("naman", 0, "naman".length - 1));
}
// main5();

//fibonacci Number

function fib(N) {
    if (N <= 1) return N; 

    let last = fib(N - 1);
    let secondLast = fib(N - 2);
    let output = last + secondLast;

    return output;
}

function main6() {
    console.log(fib(6));
}

main6();

//last index of the array 
function lastIndex(arr, target, index = arr.length - 1) {
    if (index < 0) return -1;
    if (arr[index] == target) return index;
    return lastIndex(arr, target, index - 1);
}

function main7() {
    // Corrected the function call to lastIndex instead of lastIdx
    var lastIdx = lastIndex([1, 4, 5, 6, 9, 8], 10);
    console.log(lastIdx);
}

main7();
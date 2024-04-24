
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
    var lastIdx = lastIndex([1, 4, 5, 6, 9, 8,7,8], 8);
    console.log(lastIdx);
}

main7();

//first index of the array 
function firstIndex(arr,target,index=0){
    //base case
    if(index<0){
        return -1;
    }
    if(arr[index]==target) return index;
    return firstIndex(arr,target,index+1);
}
function main8(){
   var  FirstIndex = firstIndex([24,56,24,67,89],24);
    console.log(FirstIndex);
}

main8();

//Recursion with String
function replace(str, a, b) {
    // Base Case
    if (str.length === 0) {
        return str;
    }
    var Soutput = replace(str.substring(1), a, b);
    if (str[0] === a) {
        return b + Soutput;
    } else {
        return str[0] + Soutput;
    }
}

function main9() {
    var Replaced = replace("xyaxya", "a", "z");
    console.log(Replaced);
}

main9();

//Remove X
function removeX(str,target){
    //base case 
    if(str.length ===0) return ""

    if(str[0]===target){
        return removeX(str.substring(1),target)
    }
    else{
        return str[0] + removeX(str.substring(1),target)
    }

}

function main10(){
    var removedChar = removeX("xabc", "x")
    console.log(removedChar);
}
main10();

//Remove Pi

function removePi(str) {
    // Base case
    if (str.length <= 1) {
        return str;
    }

    
    var SmallOutput;

    if (str[0] == "p" && str[1] == "i") {
        SmallOutput = removePi(str.substring(2)); 
        return "3.14" + SmallOutput; 
    } else {
        SmallOutput = removePi(str.substring(1)); 
        return str[0] + SmallOutput; 
    }
}

function main11() {
    var ReplacePi = removePi("apiapi");
    console.log(ReplacePi);
}

main11();

//binary search
function binary(arr, x, si, ei) {
    if (si > ei) return -1;

    let mid = Math.floor((si + ei) / 2);
    if (arr[mid] === x)
        return mid;

    if (arr[mid] < x)
        return binary(arr, x, mid + 1, ei); // Update si to mid + 1 to search in the right half
    else
        return binary(arr, x, si, mid - 1); // Update ei to mid - 1 to search in the left half
}

function main12() {
    var BinarySearch = binary([1, 2, 4, 6, 7, 8], 6, 0, 5); 
    console.log(BinarySearch);
}

main12();





//Merge Sort 
function MergeSort(arr) {
    // Base case: if array has one or zero elements, return the array as it is
    if (arr.length <= 1) {
        return arr;
    }

    // Divide the array into parts
    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);

    // Recursively sort the left and right part
    const sortedLeft = MergeSort(leftHalf);
    const sortedRight = MergeSort(rightHalf);

    // Merge the sorted left and right part
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from left and right arrays and add the smaller one to the result array
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Add any remaining elements from the left and right arrays
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

function main13() {
    const SortedArray = MergeSort([12, 4, 5, 34, 1, 9]);
    console.log(SortedArray);
}

main13();


//Another Way
function MergeSort(arr) {
    // Base case: if array has one or zero elements, return the array as it is
    if (arr.length <= 1) {
        return arr;
    }

    // Divide the array into parts
    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);

    // Recursively sort the left and right part
    const sortedLeft = MergeSort(leftHalf);
    const sortedRight = MergeSort(rightHalf);

    // Merge the sorted left and right part
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from left and right arrays and add the smaller one to the result array
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Add any remaining elements from the left and right arrays
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

function main13() {
    const SortedArray = MergeSort([12, 4, 5, 34, 1, 9]);
    console.log(SortedArray);
}

main13();

//Another Way
function MergeSort(arr) {
    // Base case: if array has one or zero elements, return the array as it is
    if (arr.length <= 1) {
        return arr;
    }

    // Divide the array into parts
    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);

    // Recursively sort the left and right part
    const sortedLeft = MergeSort(leftHalf);
    const sortedRight = MergeSort(rightHalf);

    // Merge the sorted left and right part
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from left and right arrays and add the smaller one to the result array
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Add any remaining elements from the left and right arrays
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

function main13() {
    const SortedArray = MergeSort([12, 4, 5, 34, 1, 9]);
    console.log(SortedArray);
}

main13();
 

function MergeSort(arr) {
    // Base case: if array has one or zero elements, return the array as it is
    if (arr.length <= 1) {
        return arr;
    }

    // Divide the array into parts
    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);

    // Recursively sort the left and right part
    const sortedLeft = MergeSort(leftHalf);
    const sortedRight = MergeSort(rightHalf);

    // Merge the sorted left and right part
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from left and right arrays and add the smaller one to the result array
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Add any remaining elements from the left and right arrays
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

function main13() {
    const SortedArray = MergeSort([12, 4, 5, 34, 1, 9]);
    console.log(SortedArray);
}

main13();



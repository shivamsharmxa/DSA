//printing n times
let count = 0;
function ntimes(){
    if(count===5) return;
    console.log(count);
    count++;
    ntimes();
}

function main(){
    ntimes();
}

// main();

//printing name n times

function func(i, n) {
    // Base Condition.
    if (i > n) return;
    console.log("Shivam");
 
   
    func(i + 1, n);
}

function name() {
    func(1, 5);
}


// name();


//printing from N to i

function func(i,n){
    //base condition
    if(i<1) return;
    console.log(i);

    func(i-1,n);
}

function decrement(i,n){
    func(n,n);
    return ;
}
decrement(5,5);


//sum of first N numbers

function sum(n) {
    let sum = (n * (n + 1)) / 2;
    console.log(sum);
}

function printingSum(n) {
    sum(n);
}

printingSum(5);


//factorial of n numbers

function factorial(n){
    //base condition
    if(n==0){
        return 1;
    }
    return n*factorial(n-1);
}

function printFactorial(n){
    console.log(factorial(n));
}

printFactorial(5);

// reverse the array 

function printArray(arr) {
    console.log("The reversed array is:-");
    for (let i = 0; i < arr.length; i++) {
        process.stdout.write(arr[i] + " ");
    }
    console.log();
}
//function to reverse the array 
function reversedArray(arr,start,end){
    if(start<end){
        [arr[start],arr[end] = arr[end],arr[start]];
        reversedArray(arr,start + 1,end - 1);

    }
}

function main(){
    const n =5;
    const arr=[10,9,8,7,6];
    reversedArray(arr,0,n-1);
    printArray(arr);
}

main();

function reversedArray(arr,start,end){
    if(start<end){
        [arr[start],arr[end] = arr[end],arr[start]];
        reversedArray(arr,start + 1,end - 1);

    }
}

function main(){
    const n =5;
    const arr=[10,9,8,7,6];
    reversedArray(arr,0,n-1);
    printArray(arr);
}

main();
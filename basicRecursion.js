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

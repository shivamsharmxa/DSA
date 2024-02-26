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

main();

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


name();

 
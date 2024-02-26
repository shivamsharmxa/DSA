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
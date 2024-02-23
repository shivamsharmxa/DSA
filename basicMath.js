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

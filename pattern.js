//pattern 01
function pattern1(n){
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            process.stdout.write("* ");
        }
        console.log();
    }
    
}
pattern1(5);

//pattern 02 

function pattern2(n){
    for(let i=0; i<n; i++){
        for(let j=0 ; j<=i; j++){
            process.stdout.write("*");
        }
        console.log();
    }
}

pattern2(5);

//pattern 03

function pattern3(n){
    for(let i=1; i<=n; i++){
        for(let j=1; j<=i; j++){
            process.stdout.write(j.toString()+ "");
        }
        console.log();
    }
}
pattern3(5);


//pattern 04

function pattern4(n){
    for(let i=1;i<=n; i++){
        for(let j=1;j<=i; j++){
            process.stdout.write(i +"");
        }
        console.log();
    }
}

pattern4(5);


//pattern 05 

function pattern5(n){
    for (let i=0; i<n; i++){
        for(let j=n; j>i; j--){
            process.stdout.write("*");
        }
        console.log();
    }
}
pattern5(5);

//pattern 06 

function pattern6(n){
    for(let i=1; i<=n; i++){
        for(let j=n; j>=i; j--){
            process.stdout.write(n-j+1 + "");
        }
        console.log();
    }
}

pattern6(5);
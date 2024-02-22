// //pattern 01
// function pattern1(n){
//     for(let i=0; i<n; i++){
//         for(let j=0; j<n; j++){
//             process.stdout.write("* ");
//         }
//         console.log();
//     }
    
// }
// pattern1(5);

// //pattern 02 

// function pattern2(n){
//     for(let i=0; i<n; i++){
//         for(let j=0 ; j<=i; j++){
//             process.stdout.write("*");
//         }
//         console.log();
//     }
// }

// pattern2(5);

// //pattern 03

// function pattern3(n){
//     for(let i=1; i<=n; i++){
//         for(let j=1; j<=i; j++){
//             process.stdout.write(j.toString()+ "");
//         }
//         console.log();
//     }
// }
// pattern3(5);


// //pattern 04

// function pattern4(n){
//     for(let i=1;i<=n; i++){
//         for(let j=1;j<=i; j++){
//             process.stdout.write(i +"");
//         }
//         console.log();
//     }
// }

// pattern4(5);


// //pattern 05 

// function pattern5(n){
//     for (let i=0; i<n; i++){
//         for(let j=n; j>i; j--){
//             process.stdout.write("*");
//         }
//         console.log();
//     }
// }
// pattern5(5);

// //pattern 06 

// function pattern6(n){
//     for(let i=1; i<=n; i++){
//         for(let j=n; j>=i; j--){
//             process.stdout.write(n-j+1 + "");
//         }
//         console.log();
//     }
// }

// pattern6(5);

//pattern 07 

function spacePrinter(start, end){
    for (let j = start; j < end; j++) {
        process.stdout.write(" ");
    }
}

function pattern7(n) {
    for (let i = 0; i < n; i++) {
        // space
        let space = n - i - 1;
        let star = 2 * i;
        spacePrinter(0, space)
        // star
        for (let j = 0; j <= star; j++) {
            process.stdout.write("*");
        }
        // space
        spacePrinter(0, space)
        console.log(); // Move to the next line after each row
    }
}

pattern7(5);


//pattern 08

 function pattern8(n){
     for(let i=0; i<n; i++){
        //for space

        for(let j =0; j<i; j++){
             process.stdout.write(" ");
         }

         //stars
         for(let j=0; j< 2*n -(2*i+1); j++){
             process.stdout.write("*");
         }

         for(let j=0; j<i; j++){
            process.stdout.write(" ");
         }
         console.log();
     }
 }
pattern8(5);

  //pattern 09

 function pattern9(n){
     for(let i=0; i<n; i++){
        //space
         for (let j = 0; j < n - i - 1; j++) {
             process.stdout.write(" ");
         }
         // star
         for (let j = 0; j <= 2 * i; j++) {
             process.stdout.write("*");
         }
         // space
         for (let j = 0; j < n - i - 1; j++) {
             process.stdout.write(" ");
         }
         console.log();
     }
     for(let i=0; i<n; i++){
         //for space

         for(let j =0; j<i; j++){
             process.stdout.write(" ");
         }

         //stars
         for(let j=0; j< 2*n -(2*i+1); j++){
             process.stdout.write("*");
         }

         for(let j=0; j<i; j++){
             process.stdout.write(" ");
         }
         console.log();
     }
 }
 pattern9(5);

 //pattter 10

 function pattern10(n) {
   
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            process.stdout.write("*");
        }
        console.log();
    }

    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            process.stdout.write("*");
        }
        console.log();
    }
}


pattern10(6);

//pattern 11
function pattern11(n) {
    let start = 1;
    for (let i = 0; i < n; i++) {
        if (i % 2 == 0) start = 1;
        else start = 0;
        for (let j = 0; j <= i; j++) {
            process.stdout.write(start + " ");
            start = 1 - start;
        }
        console.log(); 
    }
}

pattern11(6);


//pattern 12

function pattern12(n) {
    let spaces = 2 * (n - 1);
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(j.toString());
        }

        // spaces
        for (let j = 1; j <= spaces; j++) {
            process.stdout.write(" ");
        }

        for (let j = i; j >= 1; j--) {  
            process.stdout.write(j.toString());
        }

        console.log();
        spaces -= 2;
    }
}





pattern12(5);


//pattern 13

function pattern13(n) {
    let num = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(num + " ");
            num = num + 1;
        }
        console.log();
    }
}

pattern13(5);


//pattern 14

function pattern14(n){
    let a = 65;
    for(let i=0; i<n; i++){
        for(let ch = a; ch<= a+i; ch++){
         process.stdout.write(String.fromCharCode(ch));
        }
        console.log();
    }
}
pattern14(5);



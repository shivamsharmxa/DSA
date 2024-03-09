function frequency(arr) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let key = arr[i];
        if (map.has(key)) {
            map.set(key, map.get(key) + 1);
        } else {
            map.set(key, 1);
        }
    }

    // Traverse through the map and print frequencies
    map.forEach((value, key) => {
        console.log(`${key} ${value}`);
    });
}

// Example array
// let arr = [10, 5, 10, 15, 10, 5];
// frequency(arr);


function frequency(arr) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let key = arr[i];
        if (map.has(key)) {
            map.set(key, map.get(key) + 1);
        } else {
            map.set(key, 1);
        }
    }

    let maxFreq = 0, minFreq = arr.length;
    let maxEle = 0, minEle = 0;

    // Traverse through the map to find the elements.
    map.forEach((count, element) => {
        if (count > maxFreq) {
            maxEle = element;
            maxFreq = count;
        }
        if (count < minFreq) {
            minEle = element;
            minFreq = count;
        }
    });

    console.log("The highest frequency element is: " + maxEle);
    console.log("The lowest frequency element is: " + minEle);
}

// Example array

//Map()

let arrOne = [12,13,14,15,16];
const multiFive = (num)=>{
    return num * 2; 
}
let arrTwo = arrOne.map(multiFive);
console.log("Changed array is : ",arrTwo);
console.log("Previous array is : ",arrOne);

//Filter()

let array1 = [15,34,56,21,18];
const divbythree = (num)=>{
    return num%3 == 0
}

let array2 = array1.filter(divbythree);
console.log("number divided by 3 is : ",array2);




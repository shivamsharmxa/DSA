// function frequency(arr) {
//     let map = new Map();

//     for (let i = 0; i < arr.length; i++) {
//         let key = arr[i];
//         if (map.has(key)) {
//             map.set(key, map.get(key) + 1);
//         } else {
//             map.set(key, 1);
//         }
//     }

//     // Traverse through the map and print frequencies
//     map.forEach((value, key) => {
//         console.log(`${key} ${value}`);
//     });
// }

// // Example array
// // let arr = [10, 5, 10, 15, 10, 5];
// // frequency(arr);


// function frequency(arr) {
//     let map = new Map();

//     for (let i = 0; i < arr.length; i++) {
//         let key = arr[i];
//         if (map.has(key)) {
//             map.set(key, map.get(key) + 1);
//         } else {
//             map.set(key, 1);
//         }
//     }

//     let maxFreq = 0, minFreq = arr.length;
//     let maxEle = 0, minEle = 0;

//     // Traverse through the map to find the elements.
//     map.forEach((count, element) => {
//         if (count > maxFreq) {
//             maxEle = element;
//             maxFreq = count;
//         }
//         if (count < minFreq) {
//             minEle = element;
//             minFreq = count;
//         }
//     });

//     console.log("The highest frequency element is: " + maxEle);
//     console.log("The lowest frequency element is: " + minEle);
// }

//frequency of number which is divisible by 2 and 3 
function findDivisibleNumbers(arr) {
    const frequencies = { divisibleBy2: 0, divisibleBy3: 0 };
  
    for (let i = 0; i < arr.length; i++) {
      const number = arr[i];
  
      if (number % 2 === 0) {
        frequencies.divisibleBy2++;
      }
  
      if (number % 3 === 0) {
        frequencies.divisibleBy3++;
      }
    }
  
    return frequencies;
  }
  
  const numbers = [2, 3, 4, 6, 9, 12, 14, 18, 21, 4, 6, 12, 18];
  
  const result = findDivisibleNumbers(numbers);
  
  console.log('Numbers divisible by 2 and their frequencies:', result.divisibleBy2);
  console.log('Numbers divisible by 3 and their frequencies:', result.divisibleBy3);
  

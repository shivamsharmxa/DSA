//frequency of number which is divisible by 2 and 3 
function findDivisibleNumbers(arr) {
    const frequencies = { divisibleBy2: 0, divisibleBy3: 0 };
  //by for loop
    // for (let i = 0; i < arr.length; i++) {
    //   const number = arr[i];
  
    //   if (number % 2 === 0) {
    //     frequencies.divisibleBy2++;
    //   }
  
    //   if (number % 3 === 0) {
    //     frequencies.divisibleBy3++;
    //   }
    // }

    //by Reduce()
  const result = arr.reduce((acc,value) => {
    if (value % 2 === 0){
        acc['divisibleBy2'] += 1
    }
    
    if (value % 3 === 0){
        acc['divisibleBy3'] += 1
    }

    return acc;
  }, {
    divisibleBy2: 0,
    divisibleBy3: 0
  });

//   return result;

//Maximum and Minimum frequencies
  let numberWithMinFrequency;
  let numberWithMaxFrequency;
  let maxFrequency = 0;
  let minFrequency = arr.length;

//   const numbers = [2, 3, 4, 6, 9, 12, 14, 18, 21, 4, 6, 12, 18];
  const anotherResult = arr.reduce((acc, value)=>{
    if (!(value in acc)){
        acc[value] = 1
    }
    acc[value] += 1; 
    return acc
  }, {})

//   console.log(anotherResult)

  for (const [key, value] of Object.entries(anotherResult)){
    if (value <= minFrequency){
        minFrequency = value
        numberWithMinFrequency = key
    }

    if(value >= maxFrequency){
        maxFrequency = value
        numberWithMaxFrequency = key
    }
  };

  console.log(numberWithMaxFrequency, numberWithMinFrequency)

  return result
}
  const numbers = [2, 3, 4, 6, 9, 12, 14, 18, 21, 4, 6, 12, 18];
  const result = findDivisibleNumbers(numbers);
  
  console.log('Numbers divisible by 2 and their frequencies:', result.divisibleBy2);
  console.log('Numbers divisible by 3 and their frequencies:', result.divisibleBy3);




  
  









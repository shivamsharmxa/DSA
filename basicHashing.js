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
let arr = [10, 5, 10, 15, 10, 5];
frequency(arr);

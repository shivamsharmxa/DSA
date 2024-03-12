//Selection Sorting
function selection_sort(arr, n) {
    for (let i = 0; i <= n - 2; i++) {
        let mini = i;
        for (let j = i + 1; j <= n - 1; j++) {
            if (arr[j] < arr[mini]) {
                mini = j;
            }
        }
        // swap
        let temp = arr[mini];
        arr[mini] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

let result = selection_sort([17,14, 12, 21, 5, 2], 6);
console.log(result);
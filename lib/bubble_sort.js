function swap(array, idx1, idx2) {
	let temp = array[idx1]; // save a copy of the first value
	array[idx1] = array[idx2]; // overwrite the first value with the second value
	array[idx2] = temp; // overwrite the second value with the first value
}

// [2, -1, 4, 3, 7, 3]

function bubbleSort(array) {
	let n = array.length; // n = 6
	let sorted = false;
	while (sorted === false) {
		sorted = true;
		for (let i = 1; i < n; i++) {
			if (array[i - 1] > array[i]) {
				swap(array, i - 1, i);
				sorted = false;
			}
		}
	}
	return array;
}

// let array = [2, -1, 4, 3, 7, 3];
// console.log(bubbleSort(array));

// Use this pseudocode to implement the bubble sort
// n := length(array)
// repeat
//  swapped = false
//  for i := 1 to n - 1 inclusive do
//
//     /* if this pair is out of order */
//     if A[i - 1] > A[i] then
//
//       /* swap them and remember something changed */
//       swap(A[i - 1], A[i])
//       swapped := true
//
//     end if
//   end for

// until not swapped

module.exports = {
	bubbleSort,
	swap
};

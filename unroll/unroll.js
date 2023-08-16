
// This function accepts a square array of arrays (n rows; n columns)
// unroll should return a single array containing the values in the square. You should obtain the values by traversing the square in a spiral: from the top-left corner, move all the way to the right, then all the way down, then all the way to the left, then all the way up, and repeat.

// const square = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
//   ];

// Should return: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]

function unroll (squareArray) {
    let result = [];

    // Using destructive and iterative approach, will need an exit condition -- when the matrix has been fully removed.
    while (squareArray.length) {
        // spread existing values, then isolate and spread top row
        result = [...result, ...squareArray.shift()];

        // For odd numbered matricies, matrix will be empty here. Check first before getting error from .reverse() on empty array.
        if (!squareArray.length) return result;
        // spread existing values, then map matrix to grab and spread last values of all rows (right-most column)
        result = [...result, ...squareArray.map(r => r.pop())];

        // spread existing values, then pop last matrix value (bottom row array), and reverse order before spread
        result = [...result, ...(squareArray.pop().reverse())];

        // spread existing values, then map matrix to grab first values of remaining arrays, then reverse before spreading (left-most column)
        result = [...result, ...(squareArray.map(c => c.shift()).reverse())]

        // Matrix has shrunk by 2 rows and 2 columns, but may be larger than 2x2, so still has .length, which will continue the loop.
    }

    // matrix has been fully exhausted, and result has populated in spiral order of destruction
    return result;
}

// First attempt
// function unroll(squareArray) {
//     let outer = 0;
//     let inner = 0;
//     let len = squareArray.length;
//     let result = [];

//     for (let i = outer; i < len; i++) {
//         for (let j = inner; j < len; j++) {
//             inner++;
//             result.push(squareArray[i][j]);
//         }
//     }

//     return result;
// }



module.exports = unroll;

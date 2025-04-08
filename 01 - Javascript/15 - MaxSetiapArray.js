function maxDiSetiapSubarray(arr) {
  // TODO

  const hasil = []

  for (let i = 0; i < arr.length; i++) {
    const maxAngka = Math.max(...arr[i]);
    hasil.push(maxAngka)
  }

  return hasil;

}

console.log(maxDiSetiapSubarray([
  [1, 5, 3],
  [7, 2, 9],
  [4, 0, 6]
]));
// Output: [5, 9, 6]



// // dengan map

// function maxDiSetiapSubarray(arr) {
//   return arr.map(subArray => Math.max(...subArray));
// }
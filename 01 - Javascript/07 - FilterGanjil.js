function filterGanjil(arr) {
    // // TODO: return array baru berisi angka ganjil
    console.log(arr.filter((item) => ( item % 2 !== 0) ))
    return arr.filter((item) => ( item % 2 !== 0) )


  // // alternatif pakai loop 
  // const hasil = [];
  // for ( let i = 0; i < arr.length; i++) {
  //   if ( arr[i] % 2 !== 0){
  //     hasil.push(arr[i]);
  //   }
  // }


  // // pakai reduce

  // return arr.reduce((acc, curr) => {
  //   if (curr % 2 !== 0 ) acc.push(curr);
  //   return acc;
  // },[])


  // // belajar reduce lebih lanjut
  
  // return arr.reduce((acc, curr) => {
  //   // logic disini
  //   return acc;
  // }, initialValue);

  // accumulator: wadah yang nyimpen hasil sementara
  // currentValue: item array yang sedang diproses
  // initialValue: nilai awal dari accumulator

  // const total = angka.reduce((acc,curr) => {
  //   return acc + curr;
  // }, 0);

  // console.log(total);



}
  
console.log(filterGanjil([1, 2, 3, 4, 5, 6, 7])); // Output: [1, 3, 5, 7]
  
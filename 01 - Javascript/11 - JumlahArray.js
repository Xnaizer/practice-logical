function jumlahkanArray(arr) {
    // TODO

    const counting = arr.reduce((acc, curr) => {
        return acc + curr;
    })
    
    return counting;

    // // pakai loop
    // let total = 0;

    // for ( let i = 0; i < arr.length; i++) {
    //     total += arr[i]
    // }

    // return total
}

console.log(jumlahkanArray([1, 2, 3, 4])); // Output: 10

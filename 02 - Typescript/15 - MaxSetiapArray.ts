function maxDiSetiapSubarray(arr:number[][]):number[] {

    const hasil: number[] = [];
    let i:number = 0;

    for ( i = 0; i < arr.length; i++){
        const maxAngka:number = Math.max(...arr[i]);
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
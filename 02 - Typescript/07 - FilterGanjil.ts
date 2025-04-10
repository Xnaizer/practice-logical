function filterGanjil(arr: number[]): number[] { 

    // const hasil: number[] = [];
    // let i:number = 0

    // for ( i = 0; i < arr.length; i++){
    //     if(arr[i] % 2 !== 0 ){
    //         hasil.push(arr[i]);
    //     }
    // }

    // return hasil;

    return arr.filter((item) => item % 2 !== 0)


}

console.log(filterGanjil([1, 2, 3, 4, 5, 6, 7]));
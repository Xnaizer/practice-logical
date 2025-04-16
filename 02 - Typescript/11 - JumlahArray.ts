function jumlahkanArray(arr:number[]):number {
    let hasil: number = 0
    let i: number = 0;

    for ( i = 0; i < arr.length; i++){
        hasil += arr[i]
    }
    

    return hasil;

}



console.log(jumlahkanArray([1, 2, 3, 4])); // Output: 10
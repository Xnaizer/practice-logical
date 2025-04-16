function hitungFrekuensi(str:string):{ [key: string]: number }{
    
    
    const hasil: { [key: string]: number } = {};
    let i: number = 0;

    for (i = 0; i < str.length; i++){

        const huruf:string = str[i];
        console.log(huruf);

        if(hasil[huruf]){
            hasil[huruf]++
        } else {
            hasil[huruf] = 1;
        }

    }


    return hasil;



}

console.log(hitungFrekuensi("hello"));
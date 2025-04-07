function fizzBuzz(n) {
    // TODO: Cetak angka dari 1 sampai n
    // Jika angka habis dibagi 3, cetak "Fizz"
    // Jika habis dibagi 5, cetak "Buzz"
    // Jika habis dibagi 3 dan 5, cetak "FizzBuzz"
    // Selain itu, cetak angkanya


    for ( let i = 1; i < n ; i++){

        if ( i % 3 === 0 && i % 5 === 0  ) {
            console.log("FizzBuzz");
        } else if ( i % 3 === 0  ) {
            console.log("Fizz")
        } else if ( i % 5 === 0 ){
            console.log("Buzz")
        } else {
            console.log(i)
        }

        
    }

    // // logika tambahkan string atau pakai nomor i

    // for(let i = 1; i < n; i++){
        
    //     let output = "";

    //     if ( i % 3 === 0 ) output +="Fizz"
    //     if ( i % 5 === 0 ) output +="Buzz"

    //     console.log(output || i)
    // }

    
    // // pakai tenary operator singkat tapi padat

    // for ( let i = 0; i < n; i++){
    //     console.log(
    //         i % 3 === 0 && i % 5 == 0  ? "FizzBuzz" : i % 3 == 0 ? "Fizz" : i % 5 == 0 ? "Buzz" : i 
    //     )
    // }

}

fizzBuzz(60);
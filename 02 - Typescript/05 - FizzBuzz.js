function fizzBuzz(n) {
    var i = 0;
    for (i = 0; i <= n; i++) {
        var output = "";
        if (n % 3 === 0)
            output += "Fizz";
        if (n % 5 === 0)
            output += "Buzz";
        console.log(output || i);
    }
    // for ( i = 1; i <= n; i++){
    //     if ( i % 3 === 0 && i % 5 === 0){
    //         console.log("FizzBuzz")
    //     } else if ( i % 3 === 0 ){
    //         console.log("Fizz")
    //     } else if ( i % 5 === 0) {
    //         console.log("Buzz")
    //     } else {
    //         console.log(i)
    //     }
    // }
    // for ( i = 1; i < n; i++ ){
    //     console.log(
    //         i % 3 === 0 && i % 5 === 0 ? "FizzBuzz" : i % 3 === 0 ? "Fizz" : i % 5 === 0 ? "Buzz" : i
    //     )
    // }
}
fizzBuzz(60);

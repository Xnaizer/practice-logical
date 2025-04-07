function isPalindrome(str) {
    // TODO: Kembalikan true jika palindrome, false jika tidak

    let revStr = []
    for( i = str.length -1  ; i > -1 ; i--) {
        revStr.push(str[i])
    }

    
    let revString =  revStr.join("")
    console.log("".repeat(100))
    console.log(`Palindrome?`)
    console.log(str)
    
    if (str === revString) {
        return true
    } else {
        return false
    }
    
}
  
console.log(isPalindrome("katak")); // Output: true
console.log(isPalindrome("makan")); // Output: false
console.log(isPalindrome("malam")); // Output: true


// // alternative paling cepet 

// function isPalindrome(str) {
//     return str === str.split("").reverse().join("");
// }


// // bandingkan dari sebagian depan dan belakang

// function isPalindrome(str){
//     for (let i = 0 ; i < str.length / 2; i++){
//         console.log(str[i])
//         console.log(str.length) // cek total panjang mulai dari angka 1

//         if(str[i] !== str[str.length -1 -i]){ // panjang kurang 1 karna length mulai dari index 1, sementara index pengambilang array string mulai dari 0.
//             return false
//         }
        
//         return true
//     }
// }


// console.log(isPalindrome("katak")); // Output: true
// // console.log(isPalindrome("makan")); // Output: false
// // console.log(isPalindrome("malam")); // Output: true



// // pake rekuris ( fak i hate this recursive stuff) deret angka

// function isDeretAngka(a) {
//     if (a === 0) return 0
//     return isMath(a - 1) + a;
// }

// console.log(isMath(1))



// // pake rekursi faktor 5!

// function faktorial(n){
//     if ( n === 0) return 1
//     return faktorial(n - 1) * n
// }

// console.log(faktorial(5))



// // rekursi fibonacci

// function fibonacci(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;
    
//     return fibonacci(n - 2) + fibonacci(n - 1);
// }

// console.log(fibonacci(6))




// // rekursi palindrome 

// function isPalindrome(str) {
//     if (str.length <= 1) return true;
//     if (str[0] !== str[str.length - 1]) return false;
//     return isPalindrome(str.slice(1, -1));
// }
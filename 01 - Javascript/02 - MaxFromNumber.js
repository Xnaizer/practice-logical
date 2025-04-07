// function terbesarDariTigaAngka(a, b, c) {
//     // TODO: Kembalikan nilai terbesar dari ketiga bilangan

//     
//     let maxNum = Math.max(a,b,c)
//     console.log(maxNum);

//     return maxNum;
    
// }

// console.log(terbesarDariTigaAngka(4, 9, 2)); // Output: 9



function terbesarDariTigaAngka(a, b, c) {

    
    if(a > b) {
        if(a > c) {
            return a;
        } else {
            return c;
        }
    } else {
        if (b > c){
            return b;
        } else {
            return c;
        }
    }


    // // Pakai variable let sementara

    // let max = a;

    // if(b > max ) {
    //     max = b;
    // }

    // if(c > max){
    //     max = c;
    // }

    // return max;
    

}

console.log(terbesarDariTigaAngka(111, 9111, 2111))


// function terbesarDariTigaAngka(a,b,c) {
//     return [a,b,c].reduce((max,current) => current > max ? current : max);
// }
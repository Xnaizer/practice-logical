function balikString(str){
    // TODO: Balikkan string, contoh "halo" -> "olah"
    let revStr = []
    for( i = str.length -1  ; i > -1 ; i--) {
        console.log(str[i])
        revStr.push(str[i])

    }
    console.log(revStr);

    return revStr.join("")


    // // cara loop for of

    // let result = ""
    // for (let char of str){
    //     let result = str + result;
    // }
    // return result;

}

console.log(balikString("javascript")); // Output: "tpircsavaj"


// // cara tercepat 

// function balikString(str){
//     return str.split("").reverse().join("");
// }



// // pakai rekursi substr (mengambil string index 1 sampai akhir)

// function balikString(str) {
//     if (str === "") return "";
//     console.log(str)
//     return balikString(str.slice(1)) + str[0];
// }

// console.log(balikString("javascript"))
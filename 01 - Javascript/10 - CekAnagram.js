

function isAnagram(str1, str2) {
    // TODO: return true jika anagram, false jika tidak

    let text1 = str1.split('').sort().join("");
    let text2= str2.split('').sort().join("");

    // if ( text1 == text2){
    //     return true
    // } else {
    //     return false
    // }

    // console.log(text1,text2)

    return text1 === text2;


    // versi lebih advance

    const cleanStr = (str) => {
       return str.toLowerCase().replace(/\s/g, '').split("").sort().join('');
    }
    return cleanStr(str1) === cleanStr(str2);
}

console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "world"));   // Output: false
  
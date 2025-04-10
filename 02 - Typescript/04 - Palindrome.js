function isPalindrome(str) {
    // return str === str.split('').reverse().join("");
    // let revStr:string[] = []
    // let i: number = 0
    // for ( i = str.length -1; i > -1 ; i--){
    //     console.log(str[i]);
    //     revStr.push(str[i]);
    // }
    // let joinStr = revStr.join('')
    // if (str === joinStr ){
    //     return true
    // } else {
    //     return false
    // }
    if (str.length <= 1)
        return true;
    if (str[0] !== str[str.length - 1])
        return false;
    return isPalindrome(str.slice(1, -1));
}
console.log(isPalindrome("katak")); // Output: true
console.log(isPalindrome("makan")); // Output: false
console.log(isPalindrome("malam")); // Output: true

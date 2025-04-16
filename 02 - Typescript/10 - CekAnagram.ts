function isAnagram(str1:string, str2:string):boolean {

    const cleanStr = (str:string) => {
       return str.toLowerCase().replace(/\s/g, '').split("").sort().join('')
    } 

    return cleanStr(str1) === cleanStr(str2);
}


console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "world"));   // Output: false
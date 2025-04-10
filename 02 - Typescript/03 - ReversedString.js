function balikString(str) {
    // let revStr:string[] = []
    // let i: number = 0
    // for ( i = str.length -1; i > -1 ; i--){
    //     console.log(str[i]);
    //     revStr.push(str[i]);
    // }
    // return revStr.join("")
    // let result:string = "";
    // for (let char of str){
    //     result = char + result;
    // }
    // return result;
    if (str === "")
        return "";
    return balikString(str.slice(1)) + str[0];
    // return str.split('').reverse().join('');
}
console.log(balikString("javascript"));

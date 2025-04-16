function balikBoolean(value:any): boolean | string {

    if ( typeof value !== "boolean" ) return "Bukan Boolean"
    return !value;
    
    
}

console.log(balikBoolean(true));  // false
console.log(balikBoolean(false)); // true
console.log(balikBoolean("hello")); // "Bukan boolean"

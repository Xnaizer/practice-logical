function balikBoolean(value) {
    // TODO


    console.log(typeof(value))

    if ( typeof(value) !== "boolean" ) return "Bukan Boolean";
    return !value
}

console.log(balikBoolean(true));  // false
console.log(balikBoolean(false)); // true
console.log(balikBoolean("hello")); // "Bukan boolean"


// function balikBoolean(value) {
//   return typeof value === "boolean" ? !value : "Bukan Boolean";
// }
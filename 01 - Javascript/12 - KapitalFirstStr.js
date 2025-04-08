function capitalize(str) {
    // TODO
    const kata = str.split(" ");
    console.log(kata)

    const kapital = kata.map((katas) => {
       return katas.charAt(0).toUpperCase() + katas.slice(1).toLowerCase()
    })

    return kapital.join(" ")
    
    
}

console.log(capitalize("halo dunia jaVascript")); 
// Output: "Halo Dunia Javascript"

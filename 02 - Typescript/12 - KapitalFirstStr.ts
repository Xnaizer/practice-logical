function capitalize(str:string): string {
    
    const split:string[] = str.split(" ");

    const kapital:string[] = split.map((katas) => {
        return katas.charAt(0).toUpperCase() + katas.slice(1).toLowerCase();
    })

    return kapital.join(' ')

}


console.log(capitalize("halo dunia jaVascript")); 
// Output: "Halo Dunia Javascript"
type GanjilGenap = "Genap" | "Ganjil"

function cekGanjilGenap(angka: number): GanjilGenap{
    
    // if(angka % 2 === 0){
    //     return "Genap"
    // } else {
    //     return "Ganjil"
    // }


    // Tenary Operatornya 

    return angka % 2 === 0 ? "Genap" : "Ganjil"

}


console.log(cekGanjilGenap(7)); // Output: Ganjil
console.log(cekGanjilGenap(10)); // Output: Genap
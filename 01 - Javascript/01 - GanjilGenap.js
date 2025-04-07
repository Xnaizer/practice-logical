function cekGanjilGenap(angka) {
    // TODO: Tampilkan "Ganjil" jika angka ganjil, dan "Genap" jika angka genap



    if ( angka % 2 ==  0 ){
        console.log("Genap");
        return "Genap";
    } else {
        console.log("Ganjil");
        return "Ganjil";
    }


    // // Tenary Operator 

    // const hasil = angka % 2 === 0 ? "Genap" : "Ganjil";
    // console.log(hasil);
    // return hasil;


    //  // pakai switch (Overkill)
    // switch (angka & 2){
    //     case 0 : 
    //         console.log("Genap");
    //         return "Genap";
    //     case 1: 
    //     case -1: 
    //         console.log("Ganjil");
    //         return "Ganjil"

    // }

}

// // pakai Arrow Function

// const cekGanjilGenap = (angka) => (
//     angka % 2 === 0 ? "Genap" : "Ganjil"
// )



cekGanjilGenap(7); // Output: Ganjil
cekGanjilGenap(10); // Output: Genap
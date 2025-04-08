function hitungFrekuensi(str) {
    // TODO: return object frekuensi huruf
    // Output-nya adalah objek yang menunjukkan berapa kali setiap huruf muncul.
    
    const hasil = {};

    for ( let i = 0; i < str.length; i++ ){

        const huruf = str[i]
        console.log(huruf)

        if(hasil[huruf]){
            hasil[huruf]++
        } else{
            hasil[huruf] = 1;
        }
       
    }

    return hasil;

}

console.log(hitungFrekuensi("hello"));
// Output: { h: 1, e: 1, l: 2, o: 1 }

// Kode	            Arti

// hasil["a"]	        //Akses properti "a" di object
// hasil[huruf]	    //Akses properti berdasarkan nilai variabel huruf
// hasil.huruf	        //Akses properti literal "huruf" (bukan nilai variabel)
// hasil[huruf] = 1	//Set key sesuai huruf jadi 1
// hasil[huruf]++	    //Tambah 1 ke jumlah huruf itu (kalau sudah ada)




// // alternatif pake reduce 

// function hitungFrekuensi(str){
//     return str.reduce((acc, huruf) => {
//         acc[huruf] = ( acc[huruf] || 0 ) + 1
//         return acc
//     },{});
// }



// versi lebih advance 

function hitungFrekuensi(str){
    const hasil = {}
    const variabels = str.toLowerCase().replace(/\s/g,'');

    for ( let i = 0; i < bersih.length; i++){
        
        const hitung = variabels[i];

        hasil[hitung] = (hasil[hitung] || 0) + 1;
    }

    return hasil;

}
function hitungVokal(str) {
    // TODO
   const hurufVokal = ['a', 'i', 'u', 'e', 'o'];
   const kalimat = str.replace(/\s/g, '').split("");
   console.log(kalimat)

   let hitung = 0;

   for ( let i = 0 ; i < kalimat.length ; i++){
        console.log(kalimat[i])
       if( hurufVokal.includes(kalimat[i].toLowerCase()) ){
            hitung++;
       }

   }

   return hitung;

}

console.log(hitungVokal("programming is fun")); // Output: 5

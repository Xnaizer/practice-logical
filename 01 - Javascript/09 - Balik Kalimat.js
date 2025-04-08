function balikKataDalamKalimat(kalimat) {
    // TODO: return kalimat dengan setiap katanya dibalik
    
    console.log(kalimat.split(" "))

    return kalimat.split(' ').map((kata) => kata.split("").reverse().join("")).join("");
    

    // // alternatif dengan loop

    // const pisahKata = kalimat.split(" ");
    // let hasil = [];

    // for ( let i = 0; i < pisahKata.length; i++ ){
    //   let kata = pisahKata[i]
    //   let kataTerbalik = "";

    //   console.log(kata)
    //   for ( let j = kata.length - 1; j >= 0; j--){
    //     let kataj = kata[j] 
    //     console.log(kataj)
    //     kataTerbalik += kata[j]
    //   }

    //   hasil.push(kataTerbalik);
    // }
    
    // console.log(hasil)
    // return hasil.join(" ")
    

    // // pakai foor of

    // const kataArray = kalimat.split(" ");
    // const hasil = [];

    // for ( const kata of kataArray) {
    //   hasil.push([...kata].reverse().join(""));
    // }

    // return hasil.join(" ");



  //   // pakai for loop ( masih ga mudeng)

  //   const kataArray = kalimat.split(" ");
  //   let hasil = [];

  //   let i = 0;

  //   while ( i < kataArray.length) {
  //     let kata = kataArray[i];
  //     let balik = "";
  //     let j = kata.length - 1

  //     while(j >= 0){
  //       balik += kata[j];
  //       j--;
  //     }

  //     hasil.push(balik);
  //     i++;
  //   }
    
    
  //   return hasil.join(" ");
  }
  
  console.log(balikKataDalamKalimat("saya belajar javascript"));
  // Output: "ayas rajaleb tpircsavaj"
  
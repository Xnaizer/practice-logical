function hitungVokal(str) {
    // TODO: return jumlah huruf vokal
    // bungkus = [];

    // for ( let i = 0; i < str.length; i++){
    //     bungkus.push(str[i]);
    //     bungkus.filter((item) => {
    //         item.str[i] === 'a'
    //     })
    // }
    // console.log(bungkus)

    // const vokalStr = bungkus.filter((item) => {
    //     item === 'a'
    // }) 

    // console.log(vokalStr) // X SALAH

    let count = 0
    const vokal = ['a', 'i', 'u', 'e', 'o'];

    for ( let i = 0; i < str.length; i++ ){
        if(vokal.includes(str[i].toLowerCase())){
            count++;
        }
    }
    return count;


    // // logika alternatif
    // return str.toLowerCase().split('').filter(char => vokal.includes(char)).length;

}
  
console.log(hitungVokal("Javascript")); // Output: 3


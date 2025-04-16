function hitungVokal(str:string):number {

    const vocals:string[] = ['a', 'i', 'u', 'e', 'o'];
    const kalimats:string[] = str.replace(/\s/g, '').split("");

    let hitung:number = 0;
    let i:number = 0;

    for ( i = 0; i < kalimats.length; i++){
        if(vocals.includes(kalimats[i].toLowerCase())){
            hitung++
        }
    }


    return hitung;

}

console.log(hitungVokal("programming is fun")); // Output: 5

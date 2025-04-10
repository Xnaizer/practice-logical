function hitungVokal(str:string): number {

    let count: number = 0;
    let i: number = 0;
    const vokal: string[] = ['a', 'i', 'u', 'e', 'o'];

    for ( i = 0; i < str.length; i++ ){
        if(vokal.includes(str[i].toLowerCase())){
            count++
        }
    }
    
    return count;


}

console.log(hitungVokal("Javascript")); // Output: 3


function balikKataDalamKalimat(kalimat: string):string {


    // const pisahKata = kalimat.split(' ');
    // let hasil:string[] = [];
    // let i:number = 0;

    // for ( i = 0; i < pisahKata.length; i++){
    //     let kata:string = pisahKata[i];
    //     let kataTerbalik:string = '';
    //     let j:number = 0;
    //     console.log(kata);


    //     for ( j = kata.length - 1; j >= 0; j-- ){
    //         let kataj:string = kata[j];
    //         console.log(kataj);
    //         kataTerbalik += kata[j];
    //     }

    //     hasil.push(kataTerbalik);

    // }

    // return hasil.join(" ");



    return kalimat.split(" ").map((item) => item.split("").reverse().join("")).join(" ")

}


console.log(balikKataDalamKalimat("saya belajar javascript"));
// Output: "ayas rajaleb tpircsavaj"
function hitungVokal(str) {
    var count = 0;
    var i = 0;
    var vokal = ['a', 'i', 'u', 'e', 'o'];
    for (i = 0; i < str.length; i++) {
        if (vokal.includes(str[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}
console.log(hitungVokal("Javascript")); // Output: 3

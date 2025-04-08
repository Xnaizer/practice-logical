function hitungVokal(str) {
    // TODO
    if (str === "" ) return "selesai"
    return hitungVokal(str === 'a') + 1
    return hitungVokal(str === 'i') + 1
    return hitungVokal(str === 'u') + 1
    return hitungVokal(str === 'e') + 1
    return hitungVokal(str === 'o') + 1
}

console.log(hitungVokal("programming is fun")); // Output: 5

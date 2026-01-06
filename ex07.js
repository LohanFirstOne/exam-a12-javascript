function moyenne(tab) {
    let res = 0
    for (let i = 0; i < tab.length; i++) {
        res += tab[i]
    }
    return res / tab.length
}

console.log(moyenne([4, 6, 8]));
function sommePairs(tab) {
    let res = 0;
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] % 2 == 0) {
            res += tab[i]
        }
    }
    return res
}

console.log(sommePairs([1, 2, 3, 4])); 
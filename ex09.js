function compterMots(chaine) {
	let res = 1;
	for (let i = 0; i < chaine.length; i++) {
		if (chaine[i] == " ") {
			res++;
		}
	}
	return res;
}

console.log(compterMots("Bonjour tout le monde")); 

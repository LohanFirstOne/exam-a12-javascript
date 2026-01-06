function premiereLettreMajuscule(chaine) {
	let res = "";

	for (let i = 0; i < chaine.length; i++) {
		if (i === 0 || chaine[i - 1] === " ") {
			res += chaine[i].toUpperCase();
		} else {
			res += chaine[i];
		}
	}

	return res;
}

console.log(premiereLettreMajuscule("bonjour tout le monde"));

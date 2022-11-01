const addToArray = (stuff, first, last) => {
	stuff.unshift(first)
	stuff.push(last)

	return stuff
}

const stuff = ['Meja', 'Buku', 'Topi', 'Baju', 'Kayu']

// console.log(addToArray(stuff, 'Handuk', 'Celana'))

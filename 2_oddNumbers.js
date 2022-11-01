const oddNumbers = (num) => {
	let result = []

	for (let i = 1; i <= 100; i++) {
		i % 2 === 0 ? false : result.push(i)
	}

	return result
}

// console.log(oddNumbers(100))

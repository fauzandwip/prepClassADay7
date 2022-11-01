const arrayRemover = (arr, item) => {
	const index = arr.indexOf(item)
	arr.splice(index, 1)

	return arr
}

const fruits = ['Jeruk', 'Pepaya', 'Jambu', 'Anggur', 'Melon']
const item = 'Jambu'

// console.log(arrayRemover(fruits, item))

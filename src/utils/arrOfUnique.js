const arrOfUnique = (arr, selector) => {
	const allSelectors = arr.map((item) => item[selector]);
	const uniqueSet = new Set(allSelectors);
	const uniqueArray = Array.from(uniqueSet);
	return uniqueArray
}

export default arrOfUnique;
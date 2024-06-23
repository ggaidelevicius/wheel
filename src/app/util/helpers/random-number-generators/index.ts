export const randomNumberFromArrayLength = (array: unknown[]) => {
	return Math.round(Math.random() * array.length)
}

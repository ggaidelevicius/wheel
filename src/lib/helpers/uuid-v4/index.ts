export const generateUuidV4 = () => {
	const replaceFunction = (char: string) => {
		const randomValue = crypto.getRandomValues(new Uint8Array(1))[0] % 16 | 0
		const value = char === 'x' ? randomValue : (randomValue & 0x3) | 0x8
		return value.toString(16)
	}

	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
		/[xy]/g,
		replaceFunction,
	)
}

import type { Place } from '@/components/Selector'

export const getWeightedRandomSelection = (places: Place[]): Place => {
	const totalWeight = places.reduce((sum, item) => sum + item.weighting, 0)
	let random = Math.random() * totalWeight

	for (const item of places) {
		if (random < item.weighting) {
			return item
		}
		random -= item.weighting
	}
	return places[places.length - 1] // fallback in case of rounding errors
}

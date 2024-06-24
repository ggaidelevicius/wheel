'use client'

import { useEffect, useState } from 'react'

export type Place = {
	id: string
	title: string
	weighting: number
	recency: number
	recencyMultiplier: number
}

export const Selector = () => {
	const [selectedPlace, setSelectedPlace] = useState<undefined | Place>()
	const [places, setPlaces] = useState<undefined | Place[]>()

	useEffect(() => {
		const getWheelList = async () => {
			// const wheels = await getWheels()
			// if (wheels && wheels[0].entries) {
			//   setPlaces(wheels[0].entries)
			// }
		}

		getWheelList()
	}, [])

	const handleClick = () => {
		if (places) {
			// setSelectedPlace(places[randomNumberFromArrayLength(places)])
		}
	}

	return (
		<>
			<button onClick={handleClick}>spin</button>
			<p>
				choice: <span>{selectedPlace && selectedPlace.title}</span>
			</p>
		</>
	)
}

// TODO: handle returns for success/failure

import type { Place } from '@/components/Selector'
import { initializeApp } from 'firebase/app'
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore/lite'

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

export const getWheel = async (id: string) => {
	try {
		const wheelDocRef = doc(db, 'wheels', id)
		const wheelDocSnap = await getDoc(wheelDocRef)

		if (wheelDocSnap.exists()) {
			return wheelDocSnap.data()
		} else {
			// eslint-disable-next-line no-console
			console.error(`Document ${id} doesn't exist.`)
			return null
		}
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error(`Error fetching document ${id}: ${error}`)
		throw error
	}
}

export const addToWheel = async (id: string, places: Place[]) => {
	try {
		const wheel = await getWheel(id)

		if (wheel) {
			const updatedEntries = [...(wheel.entries || []), ...places]

			const wheelDocRef = doc(db, 'wheels', id)
			await updateDoc(wheelDocRef, { entries: updatedEntries })

			// eslint-disable-next-line no-console
			console.log(`Successfully added entries to wheel ${id}`)
		} else {
			// eslint-disable-next-line no-console
			console.error(`Wheel ${id} not found. Cannot add entries.`)
		}
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error(`Error adding entries to wheel ${id}: ${error}`)
		throw error
	}
}

export const updateWheelItem = async (wheelId: string, updatedEntry: Place) => {
	try {
		const wheelDocRef = doc(db, 'wheels', wheelId)
		const wheelDocSnap = await getDoc(wheelDocRef)

		if (wheelDocSnap.exists()) {
			const wheelData = wheelDocSnap.data()

			if (wheelData && Array.isArray(wheelData.entries)) {
				const updatedEntries = wheelData.entries.map((entry: Place) =>
					entry.id === updatedEntry.id ? updatedEntry : entry,
				)

				await updateDoc(wheelDocRef, { entries: updatedEntries })

				// eslint-disable-next-line no-console
				console.log(
					`Entry with ID ${updatedEntry.id} updated successfully in wheel ${wheelId}`,
				)
			} else {
				// eslint-disable-next-line no-console
				console.error(`No entries found in wheel ${wheelId}`)
			}
		} else {
			// eslint-disable-next-line no-console
			console.error(`Wheel ${wheelId} doesn't exist.`)
		}
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error(`Error updating entry in wheel ${wheelId}: ${error}`)
		throw error
	}
}

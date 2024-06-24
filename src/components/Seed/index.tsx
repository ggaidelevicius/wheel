'use client'

import { generateUuidV4 } from '@/lib/helpers/uuid-v4'
import { addToWheel } from '@/lib/db/firebase'

const places = [
	{
		title: 'post',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'anthony',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'lupolab',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'maccas',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'lal qila',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'little viet',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'marumo',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'james',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'sup so good',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'senoji',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'u&i',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'jaws',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'pho huynh',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'tsukaya',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'sunlight',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'fortune 5',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'ccp dumplings',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'pinchos leederville',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'vivi',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'get pegged 7/11',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'walk around',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'dailies 1969',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'thai',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'sedap palace',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'draskos',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'invite phil & michael',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'rojiura curry samurai',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'gamble it all',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'ittaba',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'board game jame',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'plus one',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'park bbq at eric house',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'tommy',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'peasants paradice',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'eatclub',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'katsu katsu',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'bivouac',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'chopsticks',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'jigoro',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'city garden',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'papa korean house',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'big don',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'furaibo',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'kukan izakaya',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'open google maps',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'royals',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'tak chee',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'meat wine co',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'bobert',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'lawrence house',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'tommy cooks for us',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'ikea',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'larry',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'nathan',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'greenwood hotel',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'monsterella',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'ippudo',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'katen',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'komodo cafe',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'fibber mcfoos',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: '7grams',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'gus',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'ask a stranger',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'panchos vic park',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'spritz',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'park bbq ezone',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'the bite',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'something else',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'eric',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'get fuxking schwasted',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'nobu',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'bangkok street thai grill house',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'lawrence house',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'porkies',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'king/dragon hotpot',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'super tesudo (blutak)',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'sumiya gin',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'good fortune duck',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: '6head',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'big gus smoked proteins',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'hood burger',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'bintang cafe',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'munchee',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'tobkotsu king ramen',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'tosaka',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'gyuen',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'no friday funtime',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
	{
		title: 'bird',
		weighting: 10,
		id: generateUuidV4(),
		recency: 0,
		recencyMultiplier: 1,
	},
]

export const Seed = ({ id }: { id: string }) => {
	const handleClick = () => {
		addToWheel(id, places)
	}

	return <button onClick={handleClick}>Seed</button>
}

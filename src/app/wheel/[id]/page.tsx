import { getWheel } from '@/lib/db/firebase'
import { notFound } from 'next/navigation'
import { List } from '@/components/List'
import { Seed } from '@/components/Seed'

const Page = async ({ params: { id } }: { params: { id: string } }) => {
	const data = await getWheel(id)
	if (!data || !data.entries) return notFound()

	const wheel = data.entries
	return (
		<>
			<List wheel={wheel} />
			{/* <Seed id={id} /> */}
		</>
	)
}

export default Page

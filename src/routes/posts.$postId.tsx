import { useEffect } from 'react'
import {
	ErrorComponent,
	createFileRoute,
	useRouter,
} from '@tanstack/react-router'
import {
	useQueryErrorResetBoundary,
	useSuspenseQuery,
} from '@tanstack/react-query'
import { PostNotFoundError } from '../posts'
import { postQueryOptions } from '../postQueryOptions'
import type { ErrorComponentProps } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/posts/$postId')({
	loader: ({ context: { queryClient }, params: { postId } }) => {
		return queryClient.ensureQueryData(postQueryOptions(postId))
	},
	errorComponent: PostErrorComponent,
	component: PostComponent,
})

export function PostErrorComponent({ error }: ErrorComponentProps) {
	const router = useRouter()
	if (error instanceof PostNotFoundError) {
		return <div>{error.message}</div>
	}
	const queryErrorResetBoundary = useQueryErrorResetBoundary()

	useEffect(() => {
		queryErrorResetBoundary.reset()
	}, [queryErrorResetBoundary])

	return (
		<div>
			<Button
				onClick={() => {
					router.invalidate()
				}}
			>
				retry
			</Button>
			<ErrorComponent error={error} />
		</div>
	)
}

function PostComponent() {
	const postId = Route.useParams().postId
	const { data: post } = useSuspenseQuery(postQueryOptions(postId))

	return (
		<div className="space-y-2">
			<h4 className="text-xl font-bold underline">{post.title}</h4>
			<div className="text-sm">{post.body}</div>
		</div>
	)
}

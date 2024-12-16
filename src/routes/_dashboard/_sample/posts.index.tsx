import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_dashboard/_sample/posts/')({
	component: PostsIndexComponent,
})

function PostsIndexComponent() {
	return <div>Select a post.</div>
}
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
	'/_dashboard/_sample/_layout/_layout-2/layout-a'
)({
	component: LayoutAComponent,
})

function LayoutAComponent() {
	return <div>I'm layout A!</div>
}

import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_dashboard/_sample')({
	component: LayoutComponent,
})

function LayoutComponent() {
	return (
		<>
			<div className="p-2 flex gap-2 text-lg">
				<Link
					to="/"
					activeProps={{
						className: 'font-bold',
					}}
					activeOptions={{ exact: true }}
				>
					Home
				</Link>{' '}
				<Link
					to="/posts"
					activeProps={{
						className: 'font-bold',
					}}
				>
					Posts
				</Link>{' '}
				<Link
					to="/layout-a"
					activeProps={{
						className: 'font-bold',
					}}
				>
					Layout
				</Link>{' '}
				<Link
					// @ts-expect-error
					to="/this-route-does-not-exist"
					activeProps={{
						className: 'font-bold',
					}}
				>
					This Route Does Not Exist
				</Link>
			</div>
			<hr />
			<Outlet />
		</>
	)
}

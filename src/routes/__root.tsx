import {
	Link,
	Outlet,
	createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { QueryClient } from '@tanstack/react-query'
import { buttonVariants } from '@/components/ui/button'
import { ThemeProvider } from '@/components/theme-provider'

export const Route = createRootRouteWithContext<{
	queryClient: QueryClient
}>()({
	component: RootComponent,
	notFoundComponent: () => {
		return (
			<div>
				<p>This is the notFoundComponent configured on root route</p>
				<Link className={buttonVariants({ variant: 'default' })} to="/">
					Start Over
				</Link>
			</div>
		)
	},
})

function RootComponent() {
	return (
		<ThemeProvider defaultTheme="dark">
			<Outlet />
			<ReactQueryDevtools buttonPosition="top-right" />
			<TanStackRouterDevtools position="bottom-right" />
		</ThemeProvider>
	)
}

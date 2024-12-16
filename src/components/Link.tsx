import { LinkProps, Link as TanLink } from '@tanstack/react-router'

export default function Link({ children, ...props }: LinkProps) {
	return <TanLink {...props}>{children}</TanLink>
}

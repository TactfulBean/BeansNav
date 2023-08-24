export type LinkBox = {
	name: string
	child: Child[]
}

type Child = {
	name: string
	link: string
	avatar: string
}

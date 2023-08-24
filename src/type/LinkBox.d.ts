export type LinkBox = {
	code: number
	result: Result[]
	msg: string
}

type Child = {
	name: string
	link: string
	avatar: string
}

type Result = {
	name: string
	child: Child[]
}

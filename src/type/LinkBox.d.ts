export interface LinkBox {
	code: number
	result: Result[]
	msg: string
}

interface Child {
	name: string
	link: string
	avatar: string
}

interface Result {
	name: string
	child: Child[]
}

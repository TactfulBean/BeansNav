export interface LinkBox {
	code: number
	result: Result[]
	msg: string
}

export interface Child {
	name: string
	link: string
	avatar: string
}

export interface Result {
	name: string
	child: Child[]
}

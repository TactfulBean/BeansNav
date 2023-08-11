export interface Changelog {
	code: number
	result: Result[]
	msg: string
}

export interface Tags {
	color: string
	info: string
	text: string
}

export interface Result {
	header: string
	color: string
	info: string
	tags: Tags[]
}

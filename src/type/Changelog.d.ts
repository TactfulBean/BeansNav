export interface Changelog {
	code: number
	result: Result[]
	msg: string
}
interface Tags {
	color: string
	info: string
	text: string
}

interface Result {
	header: string
	color: string
	info: string
	tags: Tags[]
}

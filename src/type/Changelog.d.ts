export type Changelog = {
	header: string
	color: string
	info: string
	tags: Tags[]
}

type Tags = {
	color: string
	info: string
	text: string
}

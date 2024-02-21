export type Changelog = {
  code: number
  result: Result[]
  msg: string
}

type Tags = {
  color: string
  info: string
  text: string
}

type Result = {
  header: string
  color: string
  info: string
  tags: Tags[]
}

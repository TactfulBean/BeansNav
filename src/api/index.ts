import Request from "@/utils/request.ts"
import jsonpAdapter from "axios-jsonp"

export const getLinkList = () => {
  return Request.instance({
    url: "./config/LinkList.json",
    method: "get"
  })
}

export const getSearchSuggestions = async (keyWord: string) => {
  return Request.instance({
    url: `https://suggestion.baidu.com/su?wd=${keyWord}`,
    method: "get",
    adapter: jsonpAdapter,
    callbackParamName: "cb"
  })

  // const callback = `beansNavCb_${Date.now()}`
  // const url = `https://suggestion.baidu.com/su?wd=${encodeURIComponent(keyWord)}&cb=${callback}&ie=utf-8`
  // const response = await fetch(url, { method: "GET" })
  // const text = await response.text()
  // const match = text.match(/s:\s*\[(.*?)\]\s*\}\s*\)\s*;?\s*$/)
  // if (!match?.[1]) return { s: [] }
  //
  // try {
  //   const rawItems = match[1].match(/"([^"\\]*(?:\\.[^"\\]*)*)"/g) || []
  //   const s = rawItems.map((item) => JSON.parse(item))
  //   return { s }
  // } catch {
  //   return { s: [] }
  // }
}

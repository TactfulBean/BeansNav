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
}

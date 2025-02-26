import Request from "@/utils/request.ts"
import jsonpAdapter from "axios-jsonp"

export const getLinkList = () => {
  return Request.instance({
    url: "https://alist.tactfulbean.top/d/%F0%9F%92%BE%E4%B8%83%E7%89%9B%E4%BA%91Kodo/LinkList.json",
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

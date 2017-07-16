export function htmlDecode (nodeName, inputHTML) {
  let el = document.createElement(nodeName)
  el.innerHTML = inputHTML
  return el.childNodes.length === 0 ? '' : el
}

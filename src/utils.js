export const createElement = (
  tagName,
  parentNode,
  className,
  textContent = null
) => {
  const element = document.createElement(tagName)
  element.className = className
  element.textContent = textContent
  parentNode.appendChild(element)
  return element
}

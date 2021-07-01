import { createElement } from './utils'

export const createDotNav = (parentNode, images) => {
  const dotNav = createDotNav()
  build()

  function build () {
    createDotItems()
    clickDotNavListener(target => changeDotItem(target))
  }

  function createDotNav () {
    return createElement('div', parentNode, 'slider-dot-nav')
  }

  function createDotItem () {
    return createElement('i', dotNav, 'fas fa-circle')
  }

  function createDotItems () {
    for (let i = 0; i < images.length; i++) {
      createDotItem()
    }
  }

  function getDotItemIndex (item) {
    const items = [...dotNav.children]
    return items.indexOf(item)
  }

  function getDotItemByIndex (index) {
    return dotNav.children[index]
  }

  function enableDotItem (selected) {
    selected.classList.add('enabled')
  }

  function disableDotItem () {
    const enabled = dotNav.querySelector('.enabled')
    if (enabled) {
      enabled.classList.remove('enabled')
    }
  }

  function changeDotItem (newDotItem) {
    disableDotItem()
    enableDotItem(newDotItem)
  }

  function changeDotItemByIndex (index) {
    disableDotItem()
    enableDotItem(getDotItemByIndex(index))
  }

  function clickDotNavListener (callback) {
    dotNav.addEventListener('click', event => {
      if (event.target && event.target.className.includes('fas fa-circle')) {
        callback(event.target)
      }
    })
  }
  return { dotNav, getDotItemIndex, clickDotNavListener, changeDotItemByIndex }
}

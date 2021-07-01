import { createElement } from './utils'

const createCurrentImageDOM = (image, parentNode) => {
  const img = createElement('img', parentNode, 'slider-current-image')
  img.setAttribute('src', image)
  return img
}

const createImage = (position, images) => {
  if (images.length - 1 < position) {
    position = 0
  }

  if (position < 0) {
    position = images.length - 1
  }

  return { src: images[position], position }
}

export { createCurrentImageDOM, createImage }

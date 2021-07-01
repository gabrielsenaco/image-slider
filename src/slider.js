import { createElement } from './utils'
import { createDotNav } from './slider-nav-dot'
import { createCurrentImageDOM, createImage } from './slider-image'
import { createControlButtons } from './slider-control-buttons'

export const createSlider = (images, parentNode = document.body) => {
  const sliderDOM = createElement('div', parentNode, 'slider')

  const { prev, next } = createControlButtons(sliderDOM)
  let currentImage = { src: images[0], position: 0 }
  const currentImageDOM = createCurrentImageDOM(currentImage.src, sliderDOM)
  const {
    getDotItemIndex,
    clickDotNavListener,
    changeDotItemByIndex
  } = createDotNav(sliderDOM, images)
  changeDotItemByIndex(currentImage.position)
  dotNavClickListener()
  controlButtonsClickListener()

  function dotNavClickListener () {
    clickDotNavListener(target => {
      const position = getDotItemIndex(target)
      currentImage = { src: images[position], position }
      currentImageDOM.src = currentImage.src
    })
  }

  function controlButtonsClickListener () {
    prev.addEventListener('click', controlButtonClickListener)
    next.addEventListener('click', controlButtonClickListener)
  }

  function controlButtonClickListener (event) {
    const buttonClass = event.target.className
    const position = currentImage.position
    const direction = buttonClass.includes('prev-image')
      ? position - 1
      : position + 1
    currentImage = createImage(direction, images)
    currentImageDOM.src = currentImage.src
    changeDotItemByIndex(currentImage.position)
  }
}

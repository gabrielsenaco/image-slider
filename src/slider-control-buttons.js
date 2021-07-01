import { createElement } from './utils'

export const createControlButtons = parentNode => {
  function _createControlButton (buttonClass) {
    return createElement('i', parentNode, buttonClass)
  }

  const prev = _createControlButton('fas fa-chevron-left control prev-image')
  const next = _createControlButton('fas fa-chevron-right control next-image')

  return { prev, next }
}

/**
 *
 *
 * @export
 * @param {element} parentElem
 * @param {string} parentSelector
 * @param {string} descendentSelector
 * @return {*}
 */
export default function getClosestDescendentByDepth(parentElem, parentSelector, descendentSelector) {
  let parentElement = parentElem;
  let descElements = parentElement.querySelectorAll(descendentSelector);
  let closestDescendent = null;
  let domDistance = null;

  if(descElements) {
    descElements.forEach(element => {
      let closestParent = element.closest(parentSelector);
      let thisDistance = 0;
      let elemParent = element.parentNode;

      while(elemParent !== closestParent) {
        thisDistance = thisDistance + 1;
        elemParent = elemParent.parentNode;
      }

      if (domDistance === null) {
        domDistance = thisDistance;
      } else if (thisDistance < domDistance) {
        domDistance  = thisDistance;
        closestDescendent = element;
      }
    });
  }

  return closestDescendent;
}

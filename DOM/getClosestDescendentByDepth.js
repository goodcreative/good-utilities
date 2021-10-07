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

  descElements.forEach(element => {
    let closestParent = element.closest(parentSelector);

    if(parentElem === closestParent) {
      closestDescendent = element;
    }
  });

  return closestDescendent;
}

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
  // Get all the matching descendents of the parent element passed into the function
  let parentElement = parentElem;
  let descElements = parentElement.querySelectorAll(descendentSelector);
  // Set variables for the closestDescendent that we're going to find...
  let closestDescendent = null;
  // and the minimum distance between parent and child that we're going to track
  let domDistance = null;
  // If any descendent elements have been found
  if(descElements) {
    // Loop through all the descendent elements and work out how many levels are between
    // it and the parent element
    descElements.forEach(element => {
      let thisDistance = 0;
      let elemParent = element.parentNode;

      while(elemParent !== parentElement) {
        thisDistance = thisDistance + 1;
        elemParent = elemParent.parentNode;
      }

      if (domDistance === null || thisDistance < domDistance) {
        domDistance = thisDistance;
        closestDescendent = element;
      }
    });
  }

  // Return the closestDescendent var, which may be null, or could be a DOM node.
  return closestDescendent;
}

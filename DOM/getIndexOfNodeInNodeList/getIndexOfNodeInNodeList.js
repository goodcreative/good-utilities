

/**
 *
 *
 * @export
 * @param {*} node
 * @param {*} nodeList
 * @returns
 */
export default function getIndexOfNodeInNodeList(node, nodeList) {
  const NODE_ARRAY = Array.prototype.slice.call(nodeList);
  return NODE_ARRAY.indexOf(node);
}

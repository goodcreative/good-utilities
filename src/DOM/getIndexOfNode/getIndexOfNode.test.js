import getIndexOfNode from  "./getIndexOfNode";

const TEST_DOM =
'<div id="parentComp" class="component">' +
'  <div id="nestedComp1" class"component">' +
'    <div class="compAction" id="nestedAction1">Action</div>' +
'  </div>' +
'  <div id="nestedComp2" class"component">' +
'    <div class="compAction" id="nestedAction2">Action</div>' +
'  </div>' +
'  <div id="nestedComp3" class"component">' +
'    <div class="compAction" id="nestedAction3">Action</div>' +
'  </div>' +
'  <div id="nestedComp4" class"component">' +
'    <div class="compAction" id="nestedAction4">Action</div>' +
'  </div>' +
'</div>';

test('Get index of node in list of identical elements', () => {
  let testNodeIndex = 1;
  document.body.innerHTML = TEST_DOM;
  let secondNestedComponent = document.querySelector('#nestedComp2');
  let secondNestedComponentIndex = getIndexOfNode(secondNestedComponent);
  expect(secondNestedComponentIndex).toEqual(testNodeIndex);
});

test('Get index of single node in element', () => {
  let testNodeIndex = 0;
  document.body.innerHTML = TEST_DOM;
  let secondNestedComponent = document.querySelector('#nestedAction4');
  let secondNestedComponentIndex = getIndexOfNode(secondNestedComponent);
  expect(secondNestedComponentIndex).toEqual(testNodeIndex);
});

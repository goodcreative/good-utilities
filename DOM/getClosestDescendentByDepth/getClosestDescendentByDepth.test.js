import getClosestDescendentByDepth from  "./getClosestDescendentByDepth";

test('Get nearest descendent with nested component', () => {

  let testResultID = 'parentAction';

  document.body.innerHTML =
  '<div id="parentComp" class="component">' +
  '  <div id="nestedComp" class"component">' +
  '    <div class="compAction" id="nestedAction">Action</div>' +
  '  </div>' +
  '  <div class="compAction" id="parentAction">Action</div>' +
  '</div>';

  let parentComponentElement = document.querySelector('#parentComp');
  let parentAction = getClosestDescendentByDepth(parentComponentElement, '.component','.compAction');
  let parentActionID = parentAction.getAttribute('id');

  expect(parentActionID).toEqual(testResultID);
});

test('Get first nearest descendent with multiple descendents at the same level', () => {

  let testResultID = 'parentAction';

  document.body.innerHTML =
  '<div id="parentComp" class="component">' +
  '  <div id="nestedComp" class"component">' +
  '    <div class="compAction" id="nestedAction">Action</div>' +
  '  </div>' +
  '  <div class="compAction" id="parentAction">Action</div>' +
  '  <div class="compAction" id="parentAction2">Action</div>' +
  '  <div class="compAction" id="parentAction3">Action</div>' +
  '</div>';

  let parentComponentElement = document.querySelector('#parentComp');
  let parentAction = getClosestDescendentByDepth(parentComponentElement, '.component','.compAction');
  let parentActionID = parentAction.getAttribute('id');

  expect(parentActionID).toEqual(testResultID);
});


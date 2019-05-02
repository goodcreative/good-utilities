// Imports
import searchArrayByItemPropertyValue from "./searchArrayByItemPropertyValue";

// Test Data

const testArray = [
  {
    "id":101,
    "name":"John Appleseed"
  },
  {
    "id": 102,
    "name": "Jane Doe"
  },
  {
    "id": 101,
    "name": "John Doe"
  },
];

const testObject = {
  "id": 101,
  "name": "John Appleseed"
};

// Tests
test('Returns an object from an array of objects', () => {
  expect(typeof searchArrayByItemPropertyValue(testObject.id, "id", testArray)).toEqual('object');
});

test('Returns the object that contains ID property with a certain value', () => {
  expect(searchArrayByItemPropertyValue(testObject.id, "id", testArray)).toEqual(testObject);
});

test('Returns the first object that contains a given property value, if that property value is shared', () => {
  expect(searchArrayByItemPropertyValue(testObject.id, "id", testArray).name).toEqual('John Appleseed');
});

test('Returns the correct ID for an object containing a certain', () => {
  expect(searchArrayByItemPropertyValue(testObject.name, "name", testArray).id).toEqual(testObject.id);
});

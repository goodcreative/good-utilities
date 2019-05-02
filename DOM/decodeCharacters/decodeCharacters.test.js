import decodeCharacters from  "./decodeCharacters";

const testAmp = "&amp;";
const testAmpNumberLong = "&#x00026;";
const testAmpNumberShort= "&#38;";
const testAmpResult = "&";

test('Decodes an ampersand HTML entity (english format)', () => {
  expect(decodeCharacters(testAmp)).toEqual(testAmpResult);
});

test('Decodes an ampersand HTML entity (long number format)', () => {
  expect(decodeCharacters(testAmpNumberLong)).toEqual(testAmpResult);
});

test('Decodes an ampersand HTML entity (short number format)', () => {
  expect(decodeCharacters(testAmpNumberShort)).toEqual(testAmpResult);
});



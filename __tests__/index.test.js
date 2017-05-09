'use strict';

const rslash = require('../index');

const unixPattern = 'path/to/file.js';
const windowsPattern = 'path\\\\to\\\\file.js';

test('rslash should return the pattern unchanged if it is passed a Unix style pattern', () => {
    expect(rslash(unixPattern)).toBe(unixPattern);
});

test('rslash should return a valid Windows style pattern if it is passed a Unix style pattern', () => {
    expect(rslash(windowsPattern)).toBe(unixPattern);
});

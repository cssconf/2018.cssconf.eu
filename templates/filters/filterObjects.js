const objectPath = require('object-path');

module.exports = function (
  arr,
  keyPath,
  filterBy
) {
  return arr.slice(0).filter(item => objectPath.get(item, keyPath) === filterBy);
};

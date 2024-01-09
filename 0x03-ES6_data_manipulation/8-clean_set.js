// 8-clean_set.js

function cleanSet(set, startString) {
  const filteredValues = [...set].filter((value) => value.startsWith(startString));
  return filteredValues.join('-').substring(startString.length);
}

export default cleanSet;

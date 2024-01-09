// 7-has_array_values.js

function hasValuesFromArray(set, arr) {
  return arr.every((element) => set.has(element));
}

export default hasValuesFromArray;

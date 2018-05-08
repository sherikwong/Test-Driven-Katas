const twoSum = (array, target) => {
  const newArray = [];

  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {

      if (array[i] + array[j] === target) {
        newArray.push(i, j);
      }
    }
  }

  return newArray;
}

// twoSum([1,2,3], 4);
module.exports = twoSum;

const removeFromArray = function(nums, ...numsToRemove) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < numsToRemove.length; j++) {
      if (nums[i] === numsToRemove[j]) {
        nums.splice(i--, 1);
      }
    }
  }

  return nums;
};

console.log(removeFromArray([ 1, 2, 3, 4 ], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;

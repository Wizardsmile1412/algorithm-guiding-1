const moveZeroes = function (nums) {
  //Start coding here

  let left = 0
  for (let right = 0; right <nums.length; right++){
    if(nums[right] !== 0){
      let temp = nums[left]
      nums[left] = nums[right]
      nums[right] = temp
      left++
      console.log(right)
      console.log(left)
      console.log(nums)
    }
  }
  return nums;
};

// loop

const result1 = moveZeroes([0, 1, 0, 3, 12]);
console.log(result1); // [1,3,12,0,0]

const result2 = moveZeroes([0]);
console.log(result2); // [0]

function moveZeros(nums){
    let left = 0;

    for(let i=0; i<nums.length;i++){
        if(nums[i]!==0){
            [nums[left], nums[i]]= [nums[i],nums[left]];
            left++;
        }
    }
}

const nums = [1,0,3,45,0]
moveZeros(nums)
console.log(nums);
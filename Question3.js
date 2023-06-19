function searchInsert(nums,target){
    let left = 0;
    let right = nums.length - 1;

    while(left <= right){
        let mid = Math.floor((left+right) / 2);

        if(nums[mid]===target){
            return mid;
        }else if (nums[mid] < target){
            left = mid+1;
        }else{
            right = mid - 1;
        }

    }
    return left
}

const nums =[7,3,5,67,73]
const target = 73
const index = searchInsert(nums,target)
console.log(index);
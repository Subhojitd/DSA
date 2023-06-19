function removeElement(nums,val){
    let k = 0;

    for(let i = 0; i<nums.length; i++){
        if(nums[i] !== val){
            nums[k] = nums[i]
            k++;
        }
    }

    return k;
}

const nums = [2,4,5,6,8]
const val = 5
const k = removeElement(nums,val)
console.log(k , nums.slice(0, k));
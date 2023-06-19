function findErrorNums(nums) {
    const n = nums.length;
    let xor = 0;
    
    // XOR all the elements in nums and numbers from 1 to n
    for (let i = 0; i < n; i++) {
      xor ^= nums[i] ^ (i + 1);
    }
    
    // Find the rightmost set bit in xor
    const rightmostSetBit = xor & -xor;
  
    let num1 = 0;
    let num2 = 0;
  
    // Divide the elements into two groups based on the rightmost set bit
    for (let i = 0; i < n; i++) {
      if (nums[i] & rightmostSetBit) {
        num1 ^= nums[i];
      } else {
        num2 ^= nums[i];
      }
      
      if ((i + 1) & rightmostSetBit) {
        num1 ^= i + 1;
      } else {
        num2 ^= i + 1;
      }
    }
    
    // Check which number is missing between 1 to n
    for (let i = 0; i < n; i++) {
      if (nums[i] === num1) {
        return [num1, num2];
      }
    }
  
    return [num2, num1];
  }
  
  // Example usage:
  const nums = [11, 12, 12, 14];
  const [duplicate, missing] = findErrorNums(nums);
  console.log([duplicate, missing]);
  
function plusOne(digits){
    const n = digits.length
    
    //Start from the least significant digit (rightmost)
    for (let i=n-1; i>=0;i--){
        
        //Increment the current digit by one
        digits[i]++

        //If the result is less than 10, no carry , so return the digits array
        if(digits[i]<10){
            return digits;
        }

        //If the result is 10, there is a carry , so set the current digit to 0
        digits[i] = 0;
    }
    //If we reach here, it means there was a carry from the most significant digit 
    //Add a new digit '1' to the begining of the digit array 
    digits.unshift(1)

    return digits

}

const digits = [1,2,3,4,11]
const result=plusOne(digits)
console.log(result);
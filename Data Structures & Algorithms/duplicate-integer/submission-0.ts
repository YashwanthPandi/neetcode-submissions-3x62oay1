class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const givenNumbers:number[] = nums.sort((a, b) => a - b);

        for(let i=1;i< givenNumbers.length ; i++){
            if (givenNumbers[i-1] === givenNumbers[i]){
                return true;
            }
        }
        return false;
    }
}
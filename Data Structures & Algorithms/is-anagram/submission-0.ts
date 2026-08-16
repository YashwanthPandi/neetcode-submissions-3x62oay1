class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

       const firstInp = s.split("").sort().join("");
       const secondInp = t.split("").sort().join("");

       if (firstInp === secondInp ){
        return true;
       }
       else{
        return false;
       }

    }
}

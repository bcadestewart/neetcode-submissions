class Solution {

    isPalindrome(s: string): boolean {

        function isAlnum(c: string): boolean {
            return /[a-z0-9]/i.test(c);
        }

        let left = 0;
        let right = s.length - 1;

        while (left < right) {

            // 1. while left < right and s[left] is not alphanumeric, left++
        while (left < right && !isAlnum(s[left])) {
            left++;
        }
        // step 2 — one loop
        while (left < right && !isAlnum(s[right])) {
            right--;
        }


            // 3. compare s[left].toLowerCase() to s[right].toLowerCase()
       // if(s[left].toLowerCase() == s[right].toLowerCase())
       // {
            
        //}
            //    if they don't match, return false
        if(s[left].toLowerCase() != s[right].toLowerCase())
        {
            return false;
        }

            // 4. move left forward, right backward
            left++;
            right--;
        }

        return true;
    }
}
// palindrome  check 




function isPalindrome(str){ 

    const strLen = str.length 

    for(let i = 0; i <= strLen / 2; i++){ 

        if(str[i] !== str[strLen - 1 - i]){
            return false
        }else{
            return true
        }

    }

} 

console.log(isPalindrome("kayak"))
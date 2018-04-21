function isPalindrome(word) {
  for(var i = 0; i < word.length; i++) {
    if(word.charAt(i) !== word.charAt(word.length - 1 - i)) {
      return false;
    } else if (i === (word.length - 1 - i)) {
      return true;
    }
  }
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("love"));

function isPalindrome(word) {
  // Write your algorithm here
  const lowercaseWord = word.toLowerCase();


  /* 
  Add your pseudocode here
*/
/*

  Add written explanation of your solution here
  intialize the pointers from left to right
  convert our word to a lowercase 
  moving pointers f the characters at the left and right pointers are equal,
*/
// first use variable
  let left = 0;
  let right = lowercaseWord.length - 1;


  while (left < right) {
    if (lowercaseWord[left] !== lowercaseWord[right]) {
      return false;
    }

    left++;
    right--;
    
  }  return true;
}


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

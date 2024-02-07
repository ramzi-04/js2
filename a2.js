function longestWord(words) {
  // Use reduce to find the longest word
  const longest = words.reduce((currentLongest, word) => {
    // Compare lengths and update if the current word is longer
    return word.length > currentLongest.length ? word : currentLongest;
  }, "");

  return longest;
}

// Example usage:
const wordsArray = ["apple", "banana", "cherry", "date", "elderberry"];
const result = longestWord(wordsArray);

console.log(result); // Output: elderberry

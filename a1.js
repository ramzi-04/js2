function averageOfEvenNumbers(numbers) {
  // Filter out the even numbers
  const evenNumbers = numbers.filter((num) => num % 2 === 0);

  // Use reduce to calculate the sum of even numbers
  const sumOfEvenNumbers = evenNumbers.reduce((sum, num) => sum + num, 0);

  // Calculate the average
  const average =
    evenNumbers.length > 0 ? sumOfEvenNumbers / evenNumbers.length : 0;

  return average;
}

// Example usage:
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = averageOfEvenNumbers(numbersArray);

console.log(result); // Output: 6 (average of even numbers 2, 4, 6, 8, 10)

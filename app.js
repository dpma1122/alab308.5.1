// Take an array of numbers and return the sum.
 const array  = [2,3];
 let sum = 0;
 array. forEach( n => sum += n);
 console.log (sum)
//Take an array of numbers and return the average.
const numArray = [7,3]
function calculateAverage(numArray) {
    let sum = 0;
    for (let i = 0; i < numArray.length; i++) {
      sum += numArray[i];
    }
    const average = sum / array.length;
    return average;
    console.log(numArray);
  }
  
//Take an array of strings and return the longest string.
const movies = ["Gladiator II", "Moana 2", "Kraven the Hunter", "Wicked"];
function longestString() {
  let longest = '';
  for (const movie of movies) {
    if (movie.length > longest.length) {
      longest = movie;
    }
  }
  return longest;
}
const longestMovie = longestString(movies);
console.log(longestMovie);
//Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
const myStrings = ["kitkat", "twix", "snickers", "gummybears", "sourpatch", 9];
const minLength = 5;
for (const string of myStrings) {
  if (typeof string === 'string' && string.length > minLength) {
    console.log(string);
  }
}
//For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
//Take a number, n, and print every number between 1 and n without using loops. Use recursion.

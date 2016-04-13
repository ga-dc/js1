
function countWhereTrue (predicate) {
	// return a function that takes one parameter (an array)
		// Initialize a counter
		// For every item in the array
			// pass the item to the given predicate function
			// if the result of the prediciate function is true
				// increment the counter by 1
		// return the count
}

// This function should return true or false depending on if the number
// passed to it is odd or not
function isOdd(number) {

}

// Once you've filled in the two function definitions above, the line below
// should package up 'countWhereTrue()' and 'isOdd()' into a single function that
// accepts an array of items as a parameter, loops through it and returns a count
// of how many of those items are odd numbers.
// This new function is being assigned to the variable 'countTheOdds'.
var countTheOdds = countWhereTrue(isOdd);

// The final line below calls our new 'countTheOdds()' function and passes in an
// array of numbers. Once your code is working, the line below should return
// the number 4
console.log( countTheOdds([1, 2, 3, 4, 5, 6, 7]) );

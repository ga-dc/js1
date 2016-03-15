## Data Collections

### Arrays

Javascript provides us with a number of native methods that allow us to interact with arrays. Find methods that do each of the following and provide an example...


```js
var nums = [1,2,3]
// * Add an element to the back of an array.
nums.push(4)
// * Remove an element from the back of an array.
nums.pop()
// * Add an element to the front of an array.
nums.unshift(0)
// * Remove an element from the front of an array.
nums.shift()
// * Concatenates all the elements in an array into a string.
nums.join('')
// * Separates the characters of a string into an array.
var str = "supercalifragilisticexpialidocious"
str.split("")
```

What will the contents of the below arrays be after the code samples are executed? Come up with an answer yourself before testing it out in the console.
> **HINT:** You might find it helpful to draw the arrays out as you run each line of code.

```js
var numbers = [ 2, 4, 6, 8 ];

```

```js
numbers.pop(); // [2,4,6]
numbers.push( 10 ); // [2,4,6,10]
numbers.unshift( 3 ); // [3,2,4,6,10]
```

What is the return value of the below code sample? Come up with an answer yourself before testing it out in the console.

```js
var morse = [ "dot", "pause", "dot" ];
var moreMorse = morse.join( " dash " ); // "dot dash pause dash dot"
moreMorse.split( " " ); // ["dot","dash","pause","dot"]
```

What will the contents of the below array be after the below code sample is executed? Come up with an answer yourself before testing it out in the console.

```js
var bands = [];
var beatles = [ "Paul", "John", "George", "Pete" ];
var stones = [ "Brian", "Mick", "Keith", "Ronnie", "Charlie" ];
bands.push( beatles ); // [["Paul", "John", "George", "Pete"]]
bands.unshift( stones );// [[ "Brian", "Mick", "Keith", "Ronnie", "Charlie" ],["Paul", "John", "George", "Pete"]]
bands[ bands.length - 1 ].pop(); // [[ "Brian", "Mick", "Keith", "Ronnie", "Charlie" ],["Paul", "John", "George"]]
bands[0].shift(); // [["Mick", "Keith", "Ronnie", "Charlie" ],["Paul", "John", "George"]]
bands[1][3] = "Ringo"; // [["Mick", "Keith", "Ronnie", "Charlie" ],["Paul", "John", "George","Ringo"]]
```

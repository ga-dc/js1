//Step 1:

//Construct a for loop that iterates through, and `console.log()`'s out, numbers 1 - 100:

for (var num = 1; num <= 100; num++) {
  console.log(num);
}

//Step 2:

//Add an `if/else` statement that logs the string `"fizz"` if the value being iterated over is divisible by `3`; otherwise, log out the value:

for (var num = 1; num <= 100; num++) {
  if (num % 3 === 0) {
    console.log('fizz');
  } else {
    console.log(num)
  }
}

//##### Step 3:

//Add an `else if` clause that logs the string `"buzz"` if the value being iterated over is divisible by `5`:

for (var num = 1; num <= 100; num++) {
  if (num % 3 === 0) {
    console.log('fizz');
  } else if (num % 5 === 0) {
    console.log('buzz')
  } else {
    console.log(num)
  }
}

//##### Step 4:

//Add an additional `else if` clause that logs the string `"fizzbuzz"` if the value being iterated over is divisible by both `3` and `5`. __Note:__ this step is intentionally broken! Place the new `else if` __below__ the evaluations for `fizz` and `buzz`; after running the code, and experiencing the undesired results, prompt the students as to why the `fizzbuzz` evaluation never occurred.

for (var num = 1; num <= 100; num++) {
  if (num % 3 === 0) {
    console.log('fizz');
  } else if (num % 5 === 0) {
    console.log('buzz')
  } else if (num % 15 === 0) {
    console.log('fizzbuzz')
  } else {
    console.log(num)
  }
}

//##### Step 5:

//Fix the above code to evaluate the `fizzbuzz` condition:


for (var num = 1; num <= 100; num++) {
  if (num % 15 === 0) {
    console.log('fizzbuzz');
  } else if (num % 5 === 0) {
    console.log('buzz')
  } else if (num % 3 === 0) {
    console.log('fizz')
  } else {
    console.log(num)
  }
}

# javascript-for

The `for` loop is another variant type of loop within Javascript. It is commonly used for iterating over arrays, but it is useful in many other contexts as well.

### Before You Begin

Be sure to check out a new branch (**from master**) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md).

### Exercise

1. Create an `index.html` file and a `main.js` file in the `javascript-for` directory.
1. Create an HTML skeleton in your `index.html` file, and add a script tag to the bottom of the `body` linking to your `main.js` file.
    - **NOTE:** When adding something to the "bottom" of the `body` tag, make sure it is within the bounds of the `body` tag, not after its closing tag.
1. Read about Javascript `for` loops on page 175 of _Javascript & jQuery_ by Duckett.
1. Read the MDN documentation on `for` loops [**here.**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
1. In this exercise, we will be writing three different `for` loops, which will be broken into separate sections below.
---
In this first loop, you will be creating a loop that counts to 20 by 2's using multiplication.
1. Below the console log you wrote from above, make a for loop that meets the following conditions:
    - The starting value for the counter variable used by this loop should be 1. You may name the counter variable whatever you please.
    - The loop should continue while counter variable holds a value less than or equal to 10
    - The loop's counter variable should increase in value by 1 after each iteration of the loop
1. As the statement within the code block of your loop, create a console log with a label of "Multiplication:", as well as logging out the current value of your counter variable multiplied by 2.
1. Open your html document in the browser, and open your console in the browser window. Ensure that the output to the console is what you expected based upon the code you've written.
---
For the second loop, we will again be counting to 20 by 2's, but we will be using our counter variable's value directly, rather than multiplying its value during use.
1. Below the `for` loop you wrote from above, make a for loop that meets the following conditions:
    - The starting value for the counter variable used by this loop should be 2. You may name the counter variable whatever you please, **but it must be a different name than the previous loop's counter variable!**
    - The loop should continue while counter variable holds a value less than or equal to 20
    - The loop's counter variable should increase in value by 2 after each iteration of the loop
1. As the statement within the code block of your loop, create a console log with a label of "Incrementation:", as well as logging out the current value of your counter variable for this loop.
1. Open your html document in the browser, and open your console in the browser window. Ensure that the output to the console is what you expected based upon the code you've written.
---
For the final loop of this exercise, we will be counting down from 10 to 0.
1. Below the `for` loop you wrote from above, make a for loop that meets the following conditions:
    - The starting value for the counter variable used by this loop should be 10. You may name the counter variable whatever you please, **but it must be a different name than the previous loop's counter variable!**
    - The loop should continue while counter variable holds a value greater than or equal to 0
    - The loop's counter variable should decrease in value by 1 after each iteration of the loop
1. As the statement within the code block of your loop, create a console log with a label of "Descending:", as well as logging out the current value of your counter variable for this loop.
1. Open your html document in the browser, and open your console in the browser window. Ensure that the output to the console is what you expected based upon the code you've written.

### Submitting Your Solution

When your solution is complete, change directories to the root of your lessons repository. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

### Quiz

- How does a `for` loop differ from a `while` loop?
- What potential use cases are there for `for` loops?
- Which pieces of information that are provided in the parentheses for a `for` loop are mandatory?

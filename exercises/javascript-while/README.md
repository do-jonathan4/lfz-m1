# javascript-while

The purpose of loops in Javascript is the ability to repeat an action or set of actions multiple times in a row. This allows us to complete repetitious work with one chunk of reusable code, and oftentimes allows us to set up repeatable behavior that can change and adapt in response to different inputs. Loops are one of the principle tools in any programmer's arsenal, so it is important to develop an understanding of the early. There are multiple different varieties of loops available to you, and the first of these that we will go over is the `while` loop. Let's dive in!

### Before You Begin

Be sure to check out a new branch (**from master**) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md).

### Quiz Questions
After completing this exercise, you should be able to discuss or answer the following questions:

1. What is the purpose of a loop?
1. Why might there be different kinds of loops?
1. What is the purpose of a conditional expression as it relates to loops?
1. Could a loop potentially go on forever?
1. Could a loop never start?


### Exercise

1. Create an `index.html` file and a `main.js` file in the `js-while` directory.
1. Create an HTML skeleton in your `index.html` file, and add a script tag to the bottom of the `body` linking to your `main.js` file.
    - **NOTE:** When adding something to the "bottom" of the `body` tag, make sure it is within the bounds of the `body` tag, not after its closing tag.
1. Read about Javascript loops on pages 170-174, and read about `while` loops on page 176 of _Javascript & jQuery_ by Duckett.
1. Read the MDN documentation on `while` loops [**here.**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
1. Review the flowchart representation of a `while` loop, which can be found [**here.**](images/while_flowchart.jpg)
1. In this exercise, we will be making a `while` loop that counts from a specified starting point to a specified ending point. First, please make a variable named `max` with a numeric value of your choosing as its value.
1. Create a variable named `current` with a value of any numeric value less than the value in your `max` variable.
1. Make a console log that outputs the following: "Watch me count to [max value], starting from [current value]!"
    - Use concatenation with your variables to make this possible, rather than hard-coding your chosen numbers into the statement.
1. Make a `while` statement, with a condition that will proceed to the code block if the value of `current` is less than or equal to the value of `max`.
1. Inside of the code block for the `while` loop, log out the value of the `current` variable to the console.
1. Below the console log from the step above, increment the value of `current` by one.
1. Below your `while` loop, create a console log that announces that you are done counting!
1. Open your html document in the browser, and open your console in the browser window. Ensure that the output to the console is what you expected based upon the code you've written.

### Submitting Your Solution

When your solution is complete, change directories to the root of your lessons repository. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

# JavaScript-Conditionals-3

While the majority of conditionals statements you will be creating are of the `if` type, another very useful type of conditional statement is the `switch` statement.

`switch` statements are designed for direct 1 to 1 comparisons. For example, if you wanted to confirm whether a submitted number was identical to any of 15 already known numbers, a `switch` would be perfect for this. This is principally because a `switch` is much more efficient at comparing any individual value against a range of other individual values.

So with the understanding that `switches` are very useful for 1 to 1 comparisons, let's get started.

### Before You Begin

Be sure to check out a new branch (**from master**) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md).

### Exercise

1. Create an `index.html` file in the `javascript-conditionals-3` directory. Prepare it so that you can write Javascript code.
1. Read pp. 164 - 165 on `switches` in JavaScript and jQuery by Duckett.
1. Open the MDN `Description` on switches [**here**.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
2. open the W3 Schools documentation on switches [**here**.](https://www.w3schools.com/js/js_switch.asp)
3. Within your `index.html` file, do the following:
    - declare four variables, num1, num2, operator, and result.
        - num1 and num2 will be assigned numeric values.
        - operator will be assigned a math operator in a string (either "+","-","/", or "*").
        - result will be assigned a null value
    - below the variables, declare a switch statement which:
        - adds, subtracts, multiplies, or divides the two numbers stored in `num1` and `num2`
        based on the operator you assigned to the `operator` variable.
        - stores the result of the calculation in the result variable you created in the previous step.
        - console logs the stored result once the switch has completed running.
        - console logs "Invalid operator" within the default case statement.
    - Below the `switch` statement, declare a conditional statement which replicates the functionality of the switch you created in the previous step.
        - if an invalid operator or number is used, you should console log "invalid operator used".
5. When finished, be sure to add a screenshot of the Chrome Dev Tools Console with your pull request.

### Submitting Your Solution

When your solution is complete, change directories to the root of your lessons repository. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

### Quiz

- What kind of comparisons do switches excel at?
- Does the `default` case have to be at the bottom of the `switch` statement?
- What happens if there is no `break` statement between `cases`?

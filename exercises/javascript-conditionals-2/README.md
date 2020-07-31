# javascript-conditionals-2

Effectively using conditional statements for logic flow in your applications will always be an important skill. No decision can be made within an application without the use of conditional statements.

With this programming truth in mind, you will use your familiarity with truthy and falsy values from the previous exercise to create conditional statements which will evaluate values assigned to variables and console log strings based on those evaluations.

Let's get started!

### Before You Begin

Be sure to check out a new branch (**from master**) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md).

### Quiz Questions
After completing this exercise, you should be able to discuss or answer the following questions:

1. Why do you want to avoid using `==` for comparison?
1. Do all `if` statements require an `else` statement?
1. What is the proper syntax for using the `or` operator?

### Exercise

1. Create a new `index.html` file in the `javascript-conditionals-2 directory, and set it up so that you can write JavaScript in it.
2. Read pp. 156 - 157 and 162 - 163 in JavaScript and jQuery by Duckett.
3. Now open the MDN Documentation on `If...Else` statements [**here**.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
4. Open the W3 Schools Documentation on the `Comparison Operators`  [**here**.](https://www.w3schools.com/js/js_comparisons.asp)
5. Open the W3 Schools Documentation on the `Logical Operators` [**here**.](https://www.w3schools.com/js/js_comparisons.asp)
6. Open the MDN Documentation on `Strict` and `Loose` equality [**here**.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
7. With the available documentation, do the following in your `index.html` file:
    - declare 5 variables named value 1-5 (ex value1, value2, etc)
      - assign them the following values in order 5, 15, 1, 100, and "5".
    - write an if conditional statement which checks if value1 is less than value2. If true console log "value1 is smaller", otherwise, console log "value2 is smaller"
    - write an if conditional statement which checks if value4 is greater than value2. If true console log "value4 is king", otherwise console log "value2 stands tall"
    - write an if conditional statement with an "or" statement which checks whether value2 is less than 1 or greater than 100. If either is true, console log "value2 is not within specified range". Otherwise, console log "value2 falls within specification".
        - you must use your declared variables for this conditional statement, not just numbers!
    - write a conditional statement with an "and" statement which checks whether value2 is greater than or equal to value1 and also less than or equal to value4. If true, console log that "the specified value satisfies both conditions". Otherwise console log that "the specified value does not satisfy both conditions"
    - write a conditional statement which checks whether value1 and value5 are equal in value but not type. If true, console log "the values are the same, but the types are different". Otherwise, console log "the values are different"
    - write a conditional statement which checks whether value1 and value5 have the same value and type. If true, console log "strict comparisons check value and type". Otherwise console log "the variables compared do not share identical values and types".
7. When you have completed the assigned tasks, be sure to include a screenshot of your Chrome Dev Tools Console with your pull request!


### Submitting Your Solution

When your solution is complete, change directories to the root of your lessons repository. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

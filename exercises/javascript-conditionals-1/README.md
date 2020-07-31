# javascript-conditionals-1

The purpose of conditional statements are to allow decision making within an application based on the current truthy or falsyness of an expression.

As the developer, it is your task to create a logical flow of data in your applications, and conditional statements are central to creating that logical flow.

But, before you dive into logic creation, you are going to explore the nature of truthyness and falsyness in JavaScript. Then using your knew understanding of truthy and falsy, you will create a couple conditional `if` statements and use them to explore `==` vs `===` comparisons.

Let's get started.

### Before You Begin

Be sure to check out a new branch (**from master**) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md).

### Quiz Questions
After completing this exercise, you should be able to discuss or answer the following questions:

1. Why is it important to understand truthy and falsy values?
1. Why is the typeof an object `null`?
1. What is the difference between null and undefined?
1. Why do you always use `===` for comparisons?



### Exercise

1. Create an `index.html` file in the `javascript-conditionals-1` directory and add the necessary HTML to run JavaScript code.
2. Read pp. 148-149, and 167 in JavaScript and jQuery by Duckett.
3. Open the MDN documentation on the seven falsy values [**here.**](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
4. Now, Use the information in the documentation to declare 7 variables and assign each of them one of the 7 falsy types.
5. Next, Read the MDN documentation on truthy values [**here.**](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
6. Then, Open the MDN documentation on the `typeof` operator [**here.**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
7. Using the available documentation:
    - console log the `typeof` for each variable that you declared.
        - Make sure to label your console logs!!!
    - Take note the values which show up in the Chrome Dev Tools Console.
    - Also, realize that any value which is not falsy is truthy!
8. When that is complete, read pp. 150 - 153 and 160 - 161 JavaScript and jQuery by Duckett.
9. Open the W3 Schools documentation on `if` statements [**here**](https://www.w3schools.com/js/js_if_else.asp), and the W3 Schools documentation on `comparison` operators [**here**.](https://www.w3schools.com/js/js_comparisons.asp)
8. Using the available documentation:
    - Create an `if` statement which compares 5 and "5" using `==`:
        - console log "equal value" if the expression evaluates to true.
        - console log "unequal value" if the expression evaluates to false.
    - Create another `if` statement which compares 55 and "55" using `===`:
        - console log "identical in value and type" if the expression evaluates to true.
        - console log "not identical in value and type" if the expression evaluates to false.
9. When you run the code, what do you notice about the console logs from the two `if` statements?
10. Now that you have experienced `type coercion`, read p. 166 in JavaScript and jQuery by Duckett, and then this quick post about why `===` should always be used for comparisons [**here**.](https://codeburst.io/javascript-showdown-vs-7be792be15b5)
11. When you have finished reading and you promise to always use `===`, make your pull request and be sure to include a screenshot of the Chrome Dev Tools console.
12. Here are some additional documentation links to give you more information on truthy and falsy:
    - JavaScript Datatypes: [**Click Me!**](https://www.w3schools.com/js/js_datatypes.asp)
    - JavaScript Booleans: [**Click Me!**](https://www.w3schools.com/js/js_booleans.asp)
    - JavaScript Null: [**Click Me!**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)
    - JavaScript Undefined: [**Click Me!**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
    - JavaScript NaN: [**Click Me!**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)
    
### Submitting Your Solution

When your solution is complete, change directories to the root of your lessons repository. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

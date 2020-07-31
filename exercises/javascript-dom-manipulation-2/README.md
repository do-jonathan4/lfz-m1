# javascript-dom-manipulation-2

Now that you have some experience with selecting DOM elements and making modifications, it is time for some practical experience adding and removing values from `text` and `input` elements.

The ability to set and get data from Inputs and Text nodes is extremely important to the developer, because data control and manipulation are part of every good developers tool kit.

So in order to get practical experience in those areas, this exercise is going to focus on retrieving and modifying data from `text` and `input` elements.

Let's get started!

### Before You Begin

Be sure to check out a new branch (**from master**) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md).

### Quiz Questions
After completing this exercise, you should be able to discuss or answer the following questions:

1. What are the differences between `innertext` and `textContent`?
1. What datatype are the values you remove from a text input?
1. Why is it so important to be able to dynamically update text?

### Exercise

1. Read pp. 212 - 217 in JavaScript and Jquery by Duckett.
2. Open the MDN documentation on the `Node.textContent` property [**here**.](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#Differences_from_innerText)
3. Open the MDN documentation on the `HTMLDataElement.value`
property [**here**.](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDataElement/value)
4. Now, create a new `index.html` in the `javascript-dom-manipulation-2` folder, and prepare it for HTML and JavaScript.
5. Within the `index.html` file, do the following:
    - Create an `h1` tag with an `id` of `h1Tag`.
        - Give it the text `hello`
    - Create a text `input` tag with an `id` of `textInput`.
6. Open your `index.html` file in the Chrome browser and confirm that it looks like the example below:

    ![HTML Example](./images/html-example.png)

7. Next, accomplish the following with the `h1` element using JavaScript:
    - select the `h1` element and store it in a variable.
    - retrieve the text content of the `h1` tag and store it in a variable.
    - concatenate the string ", you have properly manipulated text!" onto the text you received from the `h1` tag.
    - Set the newly concatenated string as the text content of the `h1`.
8. When the above is complete, accomplish the following with the `input` element using JavaScript:
    - select the `input` element and store it in a variable.
    - set the value of the input to be `867`.
    - retrieve the value of the `input` and store in it a variable.
    - concatenate `5309` onto the value you retrieved from the `input`.
    - Set the updated value as the value in the `input` element.
9. When you have completed the above, open your `index.html` file again, and confirm that your output matches the example below:

    ![Completed HTML](./images/completed-example.png)

10. When your output matches the example, make sure to include a screenshot with your pull request!

### Submitting Your Solution

When your solution is complete, change directories to the root of your lessons repository. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

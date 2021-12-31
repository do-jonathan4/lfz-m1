# javascript-events-2

In modern JavaScript development, `event listeners` have replaced `HTML Event Attributes` for managing the functionality which occurs when a particular event is fired.

Event listeners are the standard practice at this time, and you should be using them for your event handling going forward. Do not use `HTML Event Attributes`!

With that knowledge in hand, let's get started!

### Before You Begin

Be sure to check out a new branch (**from master**) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md).

### Quiz Questions
After completing this exercise, you should be able to discuss or answer the following questions:

1. What is the difference between the `getElementById()` method and the `querySelector()` method?
1. Who passes in the event object into the `handleClick` callback function?
1. Does a callback function require a name?

### Exercise

1. Read pp. 254 - 257 in JavaScript and jQuery by Duckett.
2. Open the MDN documentation on the `getElementById()` method [**here**.](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
3. Open the MDN documentation on the `querySelector()` method [**here**.](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
4. Open the MDN documentation on the `addEventListener()` method [**here**.](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
5. Create an `index.html` file in the `javascript-events-2` folder, and prepare it for HTML, CSS, and JavaScript code.
6. Using your available documentation, do the following within your `index.html` file:
    - Create a button within the HTML body and give it the text: "Click on Me!"
    - Give the button a background color of your choice using CSS.
    - Give the button an id of `clickButton`.
    - Within your script tags:
        - Declare a variable named `clickButton` and assign the clickButton variable the selector for the element with the id of `clickButton`.
        - Now, attach a click event listener to the new `clickButton` selector which is stored in the `clickButton` variable.
        - Next, give the event listener a callback function named `handleClick` with a single parameter `event`.
            - Within the `handleClick` callback function:
                - console log the event object which is passed in by the event handler when it calls the `handleClick` function (This is explained In the Documentation!)
                - have an alert let you know that your function was called correctly on click.
    - When the above is completed and functioning correctly, open the Chrome Dev Tools console and expand the event object which was logged to the console:
        - Look through the properties, and notice the `target` property from the previous exercise. Also, take a moment to notice what other data is stored in the event object.
7. When the above is complete, make sure to submit a screenshot with your pull request!

### Submitting Your Solution

When your solution is complete, change directories to the root of your lessons repository. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

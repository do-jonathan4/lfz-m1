# JavaScript-Events-1

Events are when something happens in an application. A great example of this is when a button is clicked on a webpage. Another is when an input is clicked to allow the user to type into it. Even the webpage loading is an event.

Events are incredibly useful for the developer, as they allow for functionality in response to events occurring, typically through the use of a `callback` function. Essentially, when an event occurs, a function is called, and something happens.

In this exercise, you will be learning about how `HTML Event Handler Attributes`, which are attributes you add to HTML elements. These attributes will call a designated callback function when the specified event happens to the element which contains the attribute. While this practice has become largely obsolete in modern web design, it is very important to understand how HTML Event Handler attributes function, as you will likely encounter them in many websites.

So with this basic understanding of an event happening on a webpage, and a function being called in response to make something happen, let's get started!

### Before You Begin

Be sure to check out a new branch for this exercise and make a directory for it. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md).

### Exercise

1. Read pp. 244, 248 - 251, and 262 in JavaScript and jQuery by Duckett.
2. Open the W3 Schools HTML Dom Events Documentation [**here**.](https://www.w3schools.com/js/js_htmldom_events.asp)
3. Open the W3 Schools target Event Property Documentation [**here**.](https://www.w3schools.com/jsref/event_target.asp)
4. Read the very short MDN Documentation on the `Window.event` property [**here**.](https://developer.mozilla.org/en-US/docs/Web/API/Window/event)
5. Create an `index.html` file in the `javascript-events-1` folder, and prepare it for HTML, CSS, and JavaScript code.
6. Using your available documentation, do the following within your `index.html` file:
    - Add an `onload` event attribute to the body element, and have it console log "The body has loaded!!!".
    - Create a button within the HTML body and give it the text: "Click on Me!"
    - Give the button a background color of your choice using CSS.
    - Add an `onclick` event attribute to the button you created, and give it a callback function named `handleClick` to call when the button is clicked. Also, give it `event.target` as an argument.
    - Now, define the `handleClick` function with the following specifications:
        - a single parameter, `element`, which will receive the argument which was passed in.
        - Within the `handleClick` function:
        - The function must console log the `element` parameter.
        - The function must console log the `window.event` property.
            - Note: you will see it as `Window.event` in the documentation, but that is the name of the window `class` which is the blueprint of the window object, not the object itself. The actual object is named `window`. This is common in documentation, so keep an eye out for it!
        - The function must call an `alert` which lets the user know that their click was successful.
7. When the above is completed, be sure to include a screenshot with your pull request to show the functionality!


### Submitting Your Solution

When your solution is complete, change directories to the root of your lessons repository. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

### Quiz

- What are some of the drawbacks of HTML Event Handler Attributes?
- Why is the Window.event property useful for finding an element which was interacted with?
- Why is the Window.event property to be avoided in new code?

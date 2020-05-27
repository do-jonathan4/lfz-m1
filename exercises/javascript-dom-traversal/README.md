# JavaScript-Dom-Traversal

When it comes to working with the DOM, a very important skill to have is the ability to traverse the DOM in order to select and manipulate elements.

Imagine working on an application where you need to retrieve text from a child element, or where you have information stored in a custom attribute to use for comparisons between similar elements.

In order to develop those skills, you are going to be traversing an exiting HTML structure in this exercise, so let's get started!

### Before You Begin

Be sure to check out a new branch (**from master**) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md).

### Quiz Questions
After completing this exercise, you should be able to discuss or answer the following questions:

1. What is the difference between the `parentNode` and `parentElement` properties?
1. Why is it important to be able to traverse the DOM?
1. What kind of information is useful to store in custom attributes?

### Exercise

1. Read 208 - 211 in JavaScript and Jquery by Duckett.
    - Note the information on in page 209 on `whitespace nodes`, as this browser behavior is why using the properties below are recommended for this exercise.
    - The below properties will return elements instead of `whitespace nodes` which will make traversing the DOM much simpler.
2. Open the MDN Documentation on the `ParentNode.lastElementChild` property [**here**.](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/lastElementChild)
3. Open the MDN documentation on `Node.parentElement` property [**here**.](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement)
4. Open the MDN documentation on the `nextElementSibling` property [**here**.](https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/nextElementSibling)
5. Other Documentation that might help:
    - document.getElementById [**here**.](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
    - Element.getAttribute [**here**.](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute)
    - Document.querySelector [**here**.](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
    - Node.textContent [**here**.](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
6. Now, do the following using the included HTML structure in the `index.html` file.
    - Use JavaScript to select the element with the id of `section1`
        - then, select the `section1` element's `h3` child element using the appropriate DOM traversal property
        - now, target the  `heading-info` attribute on that `h3` element, and store the `string` value assigned there into a variable named `headingInfo`
        - next, console log the `headingInfo` variable and confirm that is has the correct string assigned to it.
    - now, use JavaScript to select the element with the id of `childH1`
        - then, select the parent element of the `childH1` element using the appropriate DOM traversal property,
        - next, target the `parent-info` attribute on the parent element and store the `string` value assigned there into a variable named `parentInfo`.
        - console log the `parentInfo` variable to confirm that it has the correct string assigned to it.
    - lastly, use JavaScript select the element with the class of `p-element`
        - then, select the `p-element` sibling which has the `sibling-info` attribute on it using the appropriate DOM traversal property
        - now, target the `sibling-info` attribute on the sibling element and store the `string` value assigned there into a variable named `siblingInfo`.
        - finally, console log the `siblingInfo` variable to confirm that it has the correct string assigned to it.
7. When the above is complete, make sure to include a screenshot of your console output with your pull request!

### Submitting Your Solution

When your solution is complete, change directories to the root of your lessons repository. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

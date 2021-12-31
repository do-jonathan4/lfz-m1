# css-positioning

This exercise will cover the CSS `position` property, and how it can be used to affect an element's visual position on the page, as well as where that element is represented in the flow of the document. The position property is designed to allow developers to adjust where an element will fall on the page _visually_ without having to adjust its place in the HTML document.

### Before You Begin

Be sure to check out a new branch (**from master**) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md).

### Quiz Questions
After completing this exercise, you should be able to discuss or answer the following questions:

1. What is the **default** value for the position property of HTML elements?
1. How does setting position **relative** on an element affect document flow and where the element appears on the page?
1. How does setting position **absolute** on an element affect document flow and where the element appears on the page?
1. What are the box offset properties?

### Introduction

1. Read about positioning in pages 358-365 of _HTML & CSS_ by Duckett.
1. Bookmark the [MDN Positioning](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning) tutorial page and the [MDN `position`](https://developer.mozilla.org/en-US/docs/Web/CSS/position) reference page.

### Relative Positioning

1. Read about relative positioning on page 366 of _HTML & CSS_ by Duckett.
1. Open `relative.html` in your browser and complete `relative.css` to position the pokémon like the example below.
    - ***NOTE:*** You do not need to match where the pokemon fall on the words in the background, that will entirely depend upon how wide your viewport is. For the sake of this exercise, the only important part is their vertical placement.

#### Example

<p align="center">
  <img src="images/css-positioning-relative.png" alt="css-positioning-relative">
</p>

### Absolute Positioning

1. Read about absolute positioning on page 367 of _HTML & CSS_ by Duckett.
1. Open `absolute.html` in your browser and complete `absolute.css` to position the elements like the example below. **Note:** The transparent/black gradient (fade) should begin at the bottom of the background image and end at its top.
    - **Points to keep in mind while working through this section:**
      - Absolutely positioned elements position themselves within the first non-static ancestor they have. In this case, you will want all of the items you need to position to work within the `.meme` element, so you will need to make that element `relative` to make it easier to position its child elements.

#### Example

<p align="center">
  <img src="images/css-positioning-absolute.png" alt="css-positioning-absolute">
</p>

### Fixed Positioning

1. Read about fixed positioning on page 368 of _HTML & CSS_ by Duckett.
1. Open `fixed.html` in your browser and complete `fixed.css` to position the page title like the example below.

<p align="center">
  <img src="images/css-positioning-fixed.gif" alt="css-positioning-fixed">
</p>

### Submitting Your Solution

When your solution is complete, change directories to the root of your lessons repository. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

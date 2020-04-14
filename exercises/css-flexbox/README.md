# css-flexbox

Learning the basics of Flexbox, a single axis element positioning toolkit which allows the developer to easily and cleanly control the flow and positioning of child elements.

### Before You Begin

Be sure to check out a new branch (**from master**) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md).

### Introduction

Flexbox is a collection of CSS properties that allow you to easily control the layout and alignment of child elements on a web page. In this exercise, you'll be completing a series of challenges involving some of the most common flexbox CSS properties.

Each challenge comes with its own HTML document and shares some of the CSS in `reset.css` and `pokemon.css`. You won't need to modify `reset.css` or `pokemon.css`. Instead, you'll be adding some additional CSS to the `<style>` tag in each individual HTML document.

1. Open, look over, and bookmark the [CSS-Tricks Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).
1. Open, look over, and bookmark the [MDN Guide to Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox).
1. Bookmark the [Flexbox Froggy](https://flexboxfroggy.com/) learning game.
1. Bookmark Dave Geddes's [Flexbox Zombies](https://mastery.games/p/flexbox-zombies) learning game.
1. Read through all of the CSS in `reset.css` and `pokemon.css`.

### `display: flex`

1. Read all of the code in `display-flex.html` and open it in your browser.
1. Use [the flexbox cheat sheet](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) for reference.
1. Set the card deck's `display` property to `flex`. The default `flex-direction`  of a `flex` container is `row`, so the pokemon cards should appear in a horizontal row automatically.
1. Give the card deck and each pokemon card some padding to add some whitespace around each card.

#### Example

<p align="middle">
  <img src="images/display-flex.png" alt="display-flex">
</p>

### `flex-wrap`

1. Read all of the code in `flex-wrap.html` and open it in your browser.
1. Use [the flexbox cheat sheet](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) for reference.
1. Make the card deck a `flex` container by setting its `display` property to `flex`.
1. Allow items within the card deck to appear on a new row by setting its `flex-wrap` property to `wrap`.
1. Make only six card containers appear per row by setting their `flex-basis` to one-sixth of the card deck's width - _i.e._ `calc(100% / 6)`.
1. Add padding to the card deck and each pokemon card to put some whitespace around each card.

#### Example

<p align="middle">
  <img src="images/flex-wrap.png" alt="flex-wrap">
</p>

### `justify-content`

1. Read all of the code in `justify-content.html` and open it in your browser.
1. Use [the flexbox cheat sheet](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) for reference.
1. Make the card deck a `flex` container by setting its `display` property to `flex`.
1. Make each card container one-fourth the width of the card deck by setting their `flex-basis` property to `25%`.
1. Center the row of card containers by setting the card deck's `justify-content` property to `center`.
1. Add padding to the card deck and each pokemon card to put some whitespace around each card.

#### Example

<p align="middle">
  <img src="images/justify-content.png" alt="justify-content">
</p>

### `align-items`

1. Read all of the code in `align-items.html` and open it in your browser.
1. Use [the flexbox cheat sheet](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) for reference.
1. Make the card deck a `flex` container by setting its `display` property to `flex`.
1. Make the card container take up only one-third of the card deck's width by setting its `flex-basis` property to `calc(100% / 3)`.
1. Make the card deck take up the entire viewport height by settings its `min-height` property to `100vh`;
1. Center the card container vertically and horizontally by setting the **card deck's** `align-items` and `justify-content` properties to `center`.

<p align="middle">
  <img src="images/align-items.png" alt="align-items">
</p>

### Submitting Your Solution

When your solution is complete, change directories to the root of your lessons repository. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

### Quiz

- What is the default `flex-direction` of a `flex` container?
- What is the default `flex-wrap` of a `flex` container?
- Why should flexbox not be used for building complete web page layouts?

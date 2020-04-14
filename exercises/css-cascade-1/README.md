# css-cascade-1

This exercise will be your introduction to the first Factor that contributes to the CSS Cascade: Source Order.

### Before You Begin

Be sure to check out a new branch (**from master**) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md).

### Exercise

The CSS "Cascade" is the process by which the CSS language determines what styling should ultimately be applied to an element. In situations where a property has been declared for an element only once, this is a very straight-forward process. For instance:

```css
p {
    color: red;
}
```

There is no ambiguity here. Since there are no other competing styles, all `p` elements in the document this CSS is applied to would have a red text color.

However, it is common in CSS development to declare styling for an element on the same property multiple times throughout your stylesheet. For instance, given the following HTML:

```html
<h1 class="news-headline medium-text">Some News Headline</h1>
```

And the following CSS:

```css
.news-headline {
    font-size: 60px;
}

.medium-text {
    font-size: 25px;
}

```

What styling ultimately gets applied?

In situations like this, the CSS Cascade is responsible for determining which declaration of that property for that element is the final styling for that element. There are four major factors in the CSS Cascade that you will need to know to truly understand this process. The first facet of the CSS Cascade that you will learn about is "source order". Source order is, simply put, the order that your CSS rules are written in your stylesheet. When speaking specifically about source order, the styling provided for an element **last** in your stylesheet is the styling that will ultimately take effect.

1. Read **ONLY** the section entitled [Within a single stylesheet](https://css-tricks.com/precedence-css-order-css-matters/#article-header-id-0) within Chris Coyier's article _Precedence in CSS_.
1. Open the included `index.html` document, and look at the `h1` element in the body. Notice that it already has three classes applied to it.
1. Open the included `style.css` document.
1. Within the `style.css` document, create a new CSS rule targeting all elements with the class `first-class`, and apply a text color of "goldenrod".
1. Open your index.html file. What color is the text?
1. Below the CSS rule you wrote in the step above, create another CSS rule for all elements with the class `different-class`, and apply a text color of "indigo".
1. Open your index.html file. What color is the text?
1. Below the CSS rule you wrote in the step above, create another CSS rule for all elements with the class `other-class`, and apply a text color of "chartreuse".
1. Open your index.html file. What color is the text?


### Submitting Your Solution

When your solution is complete, change directories to the root of your lessons repository. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

### Quiz

- What purpose does the CSS Cascade serve?
- What is source order?
- In what situations might you need to apply styling to a single element multiple times in one stylesheet?

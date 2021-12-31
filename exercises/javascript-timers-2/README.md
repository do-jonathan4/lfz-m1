# javascript-timers-2

A brief introduction to using setInterval in JavaScript.

### Before You Begin

Be sure to check out a new branch (**from master**) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md).

### Quiz Questions
After completing this exercise, you should be able to discuss or answer the following questions:

1. What does the setInterval function return?
1. What argument does the clearInterval function take?
1. What are some scenarios where setInterval can be useful?

### Exercise

1. Read about `setInterval` in the links below.

    [setInterval W3](https://www.w3schools.com/jsref/met_win_setinterval.asp)

    [setInterval MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)

    [clearInterval W3](https://www.w3schools.com/jsref/met_win_clearinterval.asp)

    [clearInterval MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval)

1. Create an `index.html` and add a basic [HTML Skeleton](../html-skeleton/README.md).
1. Add a `<script>` tag at bottom of your `<body>` tag like so:

    ```html
      <body>
      <!-- your html goes here -->


      <script>
      //your javascript code goes here
      </script>
      </body>
    ```
1. Create an `<h1>` HTML element with the following text node:

    ```
    Ready?
    ```

1. Using `setInterval`, `clearInterval` and vanilla JavaScript, change the text node in the `<h1>` element to the following text nodes in order:
    ```
    3
    ```
    ```
    2
    ```
    ```
    1
    ```
    ```
    Hello World!
    ```

    Make sure to keep a one second interval between each change.

<p align="center">
  <img src="images/jst-2.gif" alt="js-timers">
</p>

### Submitting Your Solution

When your solution is complete, change directories to the root of your lessons repository. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

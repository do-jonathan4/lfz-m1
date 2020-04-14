# javascript-reference-data-types-2

A brief introduction to using arrays in JavaScript.

### Before You Begin

Be sure to check out a new branch (**from master**) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md).

### Exercise

1. Read about objects in pages 70-73, and 118 of _JavaScript and jQuery_ by Duckett.

1. Create an `index.html` and add a basic [HTML Skeleton](../html-skeleton/README.md).

1. Create a `main.js` and add a `<script>` tag to your `index.html` with a path to the `main.js` file.

1. Create an **array literal** with three values `'red'`, `'white'`, and `'blue'` and assign it to a variable called `colors`.  Make sure to keep the order the same

1. Log the first, second, and third values in the array, with proper labels.  If you are having trouble logging to the console feel free to checkout the [guide](../guides/logging-to-the-console.md).

    <p align="center">
      <img src="images/rdt-2-1.JPG" alt="js-rdt-arrays">
    </p>

1.  By accessing the values in the `colors` array, form this sentence, assign it to a variable called `sentence1` and log it to the console.

    <p align="center">
      <img src="images/rdt-2-2.JPG" alt="js-rdt-arrays">
    </p>

1.  In the `colors` array replace `'blue'` with `'green'`.

1.  By accessing the values in the `colors` array, form this sentence, assign it to a variable called `sentence2` and log it to the console.

    <p align="center">
      <img src="images/rdt-2-3.JPG" alt="js-rdt-arrays">
    </p>

1.  Log the colors array to the console to have a look.

    <p align="center">
      <img src="images/rdt-2-4.JPG" alt="js-rdt-arrays">
    </p>

    Another reminder to always **look around you**.

1. Create an **array literal** with five values containing names of the students around you and assign it to a variable called `students`.  If you don't know the name or five students around you, either check on slack or ask.

1. Get the size of the array by using the `length property` and assign it to a variable called `amountOfStudents`.

1. Log this sentence to the console using the `amountOfStudents` variable.

    <p align="center">
      <img src="images/rdt-2-5.JPG" alt="js-rdt-arrays">
    </p>

    Notice how the `length property` gets the size of the array by counting from one.   But when accessing areas in the array, you count from zero.  Interesting right?

1. Using the variable `amountOfStudents` and the `students` array, get the last student in the array, assign it to a variable called `lastStudentInArray`, and log it to the console.

    Remember the length property gets the size of the array by counting from one, and the indecies of the array start from zero.

    <p align="center">
      <img src="images/rdt-2-6.JPG" alt="js-rdt-arrays">
    </p>

1. Finally, log the `student` array to the console, and have a look.

    <p align="center">
      <img src="images/rdt-2-7.JPG" alt="js-rdt-arrays">
    </p>


### Submitting Your Solution

When your solution is complete, change directories to the root of your lessons repository. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

### Quiz

- What is an array?
- How do you create an array literal?
- What is the key for the value inside an array?
- Arrays have a property named length.  Since they have a property, that implies that they are also ______.

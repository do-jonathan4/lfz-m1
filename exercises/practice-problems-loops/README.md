# Practice Problem Loops challenge

The objective of this collection of loops exercises is to familiarize you with the syntax and structure of For, For In, and While loops, and to have practice with problem solving.


### Before You Begin

Be sure to check out a new branch (**from master**) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md).

### Exercise
For this exercise you will be creating functions which use loops to create and customize a series of arrays and strings, and then return those created structures.

Your goal is to define each function according to its description, such that all of its tests pass.

Begin by skimming through `index.html` in your code editor, then opening it in your web browser. You should see **`ReferenceError: ... is not defined`** a few times on the page.

Complete the exercises below in the following order and continue untill all tests pass.

As a reminder, all functions which receive arguments should be designed to work with any style of the argument. For example, and function which receives a string should be able to function correctly with any string, not just the example ones.

Good Luck!


1. ### `forLoop1()`

    #### Parameters

      - `none`

    #### Return Value

    [0,1,2,3,4,5,6,7,8,9]


2. ### `forLoop2()`

    #### Parameters

    - `none`

    #### Return Value

    [0,2,4,6,8,10,12,14,16,18]


3. ### `forLoop3()`

    #### Parameters

    - `none`

    #### Return Value

    [0,3,6,9,12,15,18,21,24,27]


4. ### `forLoop4()`

    #### Parameters

    - `none`

    #### Return Value

    [0,5,10,15,20,25,30,35,40,45]


5. ### `forLoop5()`

    #### Parameters

    - `none`

    #### Return Value

    [20,18,16,14,12,10,8,6,4,2]


6. ### `forLoop6()`

    #### Parameters

    - `none`

    #### Return Value

    [60,55,50,45,40,35,30,25,20,15,10,5,"Boom!"]


7. ### `forLoop7()`

    #### Parameters

    - `none`

    #### Return Value

    [75,45,30,15,"Poof!"]


8. ### `whileLoop1()`

    #### Parameters

    - `none`

    #### Return Value

    [0,1,2,3,4,5,6,7,8,9]


9. ### `whileLoop2()`

    #### Parameters

    - `none`

    #### Return Value

    [0,3,6,9,12,15,18,21,24,27]


10. ### `whileLoop3()`

    #### Parameters

    - `none`

    #### Return Value

    [49,42,35,28,21,14,7,0]

11. ### `whileLoop4()`

    #### Parameters

    - `none`

    #### Return Value

    [17,15,13,11,9,7,5,3,1]

12. ### `whileLoop5(string)`

    #### Parameters

    - `string` any JavaScript string.

    #### Return Value

    The function will concatenate every other character in the `string` argument to a new string and return it.

    #### Examples
    ``` js
    var string = "abcdefghijklmnopqrstuvwxyz";
    whileLoop5(string); // -> "acegikmoqsuwy"
    ```

13. ### `whileLoop6(number)`

    #### Parameters

    - `number` any JavaScript number.

    #### Return Value

    An array which counts up from the argument number and generates an array with a length that matches the argument number.

    #### Examples
    ``` js
    var number = 7;
    whileLoop6(number); // -> [8,9,10,11,12,13,14]
    ```

14. ### `whileLoop7(string)`

    #### Parameters

    - `string` any JavaScript string.

    #### Return Value

    A string of characters concatenated from the odd indices of the argument string

    #### Examples
    ``` js
    var string = "This is a pretty long string";
    whileLoop6(string); // -> "hsi  rtyln tig"
    ```

15. ### `forInLoop1(object)`

    #### Parameters

    - `object` any JavaScript object.

    #### Return Value

    An array of the property names for the supplied object

    #### Examples
    ``` js
    var object = {
    index_1: 1,
    index_2: 2,
    index_3: 3,
    index_4: 4,
    index_5: 5,
    index_6: 6,
    index_7: 7,
    index_8: 8,
    index_9: 9,
    index_10: 10,
    };
    forInLoop1(object);
    // -> [index_1,index_2,index_3,index_4,index_5,index_6,index_7,index_8,index_9,index_10]
    ```

16. ### `forInLoop2(object)`

    #### Parameters

    - `object` any JavaScript object.

    #### Return Value

    An array of the property values for the supplied object

    #### Examples
    ``` js
    var object = {
    index_1: 1,
    index_2: 2,
    index_3: 3,
    index_4: 4,
    index_5: 5,
    index_6: 6,
    index_7: 7,
    index_8: 8,
    index_9: 9,
    index_10: 10,
    };
    forInLoop2(object);
    // -> [1,2,3,4,5,6,7,8,9,10]
    ```

17. ### `forInLoop3(object)`

    #### Parameters

    - `object` any JavaScript object.

    #### Return Value

    An array of the property names and values for the supplied object

    #### Examples
    ``` js
    var object = {
    index_1: 1,
    index_2: 2,
    index_3: 3,
    index_4: 4,
    index_5: 5,
    index_6: 6,
    index_7: 7,
    index_8: 8,
    index_9: 9,
    index_10: 10,
    };
    forInLoop3(object);
    // -> ["index_1: 1","index_2: 2","index_3: 3","index_4: 4","index_5: 5","index_6: 6","index_7: 7","index_8: 8","index_9: 9","index_10: 10"]
    ```

18. ### `forInLoop4(object)`

    #### Parameters

    - `object` any JavaScript object.

    #### Return Value

    An array of the property values which have the datatype "string"

    #### Examples
    ``` js
    var object = {
    name: "jimmy",
    age: 32,
    dog: false,
    cat: true,
    favorite_food: "sushi",
    favorite_number: 42,
    favorite_movie: "Tron: Legacy",
    greatest_fear: "clowns",
    favorite_song: "",
    hours_of_sleep: null
    };
    forInLoop4(object);
    // -> ["jimmy","sushi","Tron: Legacy", "clowns", ""]
    ```

19. ### `forInLoop5(object)`

    #### Parameters

    - `object` any JavaScript object.

    #### Return Value

    An array of the property values which have a falsy value

    #### Examples
    ``` js
    var object = {
    name: "jimmy",
    age: 32,
    dog: false,
    cat: true,
    favorite_food: "sushi",
    favorite_number: 42,
    favorite_movie: "Tron: Legacy",
    greatest_fear: "clowns",
    favorite_song: "",
    hours_of_sleep: null
    };
    forInLoop5(object);
    // -> [false,"", null]
    ```

20. ### `forInLoop6(object)`

    #### Parameters

    - `object` any JavaScript object.

    #### Return Value

    An array of the property values which have the datatype "number"

    #### Examples
    ``` js
    var object = {
    name: "jimmy",
    age: 32,
    dog: false,
    cat: true,
    favorite_food: "sushi",
    favorite_number: 42,
    favorite_movie: "Tron: Legacy",
    greatest_fear: "clowns",
    favorite_song: "",
    hours_of_sleep: null
    };
    forInLoop6(object);
    // -> [32,42]
    ```

21. ### `forInLoop7(object)`

    #### Parameters

    - `object` any JavaScript object.

    #### Return Value

    An array of the property values which are boolean values

    #### Examples
    ``` js
    var object = {
    name: "jimmy",
    age: 32,
    dog: false,
    cat: true,
    favorite_food: "sushi",
    favorite_number: 42,
    favorite_movie: "Tron: Legacy",
    greatest_fear: "clowns",
    favorite_song: "",
    hours_of_sleep: null
    };
    forInLoop7(object);
    // -> ["dog", "cat"]
    ```


5. When your tests are all passing successfully, congratulations! You now have some experience with loops and are ready for more practice problems!
    - Move on to the `Submitting You Solution` section below!


### Submitting Your Solution

When your solution is complete, change directories to the root of your lessons repository. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

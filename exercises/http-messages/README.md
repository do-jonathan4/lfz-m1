# http-messages

Communicating between clients and servers on the web.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/http-messages` directory in your terminal.

### Quiz Questions
After completing this exercise, you should be able to discuss or answer the following questions:

1. What is a client?
1. What is a server?
1. Which HTTP method does a browser issue to a web server when you visit a URL?
1. What are the formats of HTTP Requests and Responses?

### Exercise

1. Read the introduction to the [Client-Server model](https://en.wikipedia.org/wiki/Client%E2%80%93server_model), [Client-server roles](https://en.wikipedia.org/wiki/Client%E2%80%93server_model#Client_and_server_role), and [Client-server communication](https://en.wikipedia.org/wiki/Client%E2%80%93server_model#Client_and_server_communication) on Wikipedia.

1. Read about [HTTP Message formats](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages) in the MDN Web Docs.
1. [Use HTTPie](https://httpie.org/doc#usage) in your terminal to send a `GET` request to `http://example.com` and compare the output to the **response** format that you've read about. **Note:** The `http` command should already be available in your development environment. If not, notify an instructor.

    <p align="center">
      <img src="images/http-1-1.gif" alt="http-1">
    </p>

1. Send the same request again, but with the [`--verbose` output option](https://httpie.org/doc#output-options) to see the **request** you sent followed by the **response** you received.

    <p align="center">
      <img src="images/http-3-1.gif" alt="http-1">
    </p>

1. Visit [`https://jsonplaceholder.typicode.com/users`](https://jsonplaceholder.typicode.com/users) in your web browser and inspect the request in the **Network** tab of the developer tools.

1. Use the following HTTPie command to create a file named `users.json`. Then inspect the contents of the file.
    ```bash
    http --body GET https://jsonplaceholder.typicode.com/users > users.json
    ```

    <p align="center">
      <img src="images/http-4-1.gif" alt="http-1">
    </p>


1. Use the following HTTPie command to create a file named `example.html`. Then inspect the contents of the file.
    ```bash
    http --body GET https://example.com > index.html
    ```

    <p align="center">
      <img src="images/http-5-1.gif" alt="http-1">
    </p>


### Submitting Your Solution

When your solution is complete, return to the root of your `senior-front-end-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

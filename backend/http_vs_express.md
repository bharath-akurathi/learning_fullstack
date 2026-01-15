# Node.js: Why we use Express & EJS instead of the native HTTP module

This document outlines the differences between using Node.js's native `http` module versus the modern stack of Express.js and EJS.

---

## 1. Why the `http` module is rarely used directly

The built-in `http` module is powerful, but it is **low-level**. It acts as the raw building blocks. Using it for a full web application requires writing significant "boilerplate" code for basic tasks.

### The Pain Points:
* **Complex Routing:** You must use manual `if/else` statements to check the request URL and HTTP method.
* **Manual Heavy Lifting:** You are responsible for handling HTTP status codes (200, 404), setting headers (`Content-Type`), and parsing incoming data streams (chunks) manually.
* **No Middleware:** There is no standard way to inject logic (like authentication or logging) between the request and the response.

### Code Example: The `http` approach (Hard Way)
Notice how verbose routing is for just two pages.

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    // Manual routing logic
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Home Page');
    } else if (req.url === '/about' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('About Page');
    } else {
        // Manual 404 handling
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found');
    }
});

server.listen(3000);

```

---

## 2. Why Express.js is used

Express is a minimalistic framework built **on top of** the `http` module. It abstracts away the complex details, providing a robust set of features for web and mobile applications.

### The Benefits:

* **Clean Routing:** Provides semantic methods like `.get()`, `.post()`, `.put()`, making code readable.
* **Middleware Architecture:** Allows you to create a "pipeline" for requests (e.g., check if a user is logged in -> parse JSON -> handle request) easily.
* **Automatic Handling:** Automatically sets headers and status codes unless explicitly overridden.

### Code Example: The Express approach (Easy Way)

The same functionality as above, but cleaner and scalable.

```javascript
const express = require('express');
const app = express();

// Clean, readable routing
app.get('/', (req, res) => res.send('Home Page'));
app.get('/about', (req, res) => res.send('About Page'));

// 404 handling is implicitly handled or added via middleware
app.listen(3000);

```

---

## 3. Why EJS (Embedded JavaScript) is used

While Express handles the server logic, it doesn't handle the UI. **EJS** is a Template Engine that generates HTML markup with plain JavaScript.

### The Benefits:

1. **Dynamic Content:** Standard HTML files are static. EJS allows you to inject server-side variables directly into the HTML (e.g., displaying a logged-in user's name).
2. **Logic in Views:** You can use JavaScript loops (`forEach`, `for`) and conditionals (`if/else`) directly inside your HTML structure.
3. **Partials:** You can create reusable components (like a navbar or footer) and include them in every page with a single line of code, preventing code duplication.

### Example EJS Syntax

```html
<h1>Welcome, <%= username %>!</h1>

<ul>
    <% users.forEach(function(user) { %>
        <li><%= user.name %></li>
    <% }); %>
</ul>

```

---

## Summary Comparison

| Feature | `http` Module | Express + EJS |
| --- | --- | --- |
| **Routing** | Manual `if/else` checks | Clean `app.get('/path')` syntax |
| **Code Volume** | High (Repetitive) | Low (Concise) |
| **Scalability** | Difficult to maintain | Easy to scale and organize |
| **Views** | HTML strings inside JS | Separate `.ejs` files with logic |


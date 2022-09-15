# The Use Case of Promises

**Promises** provide another way to deal with *asynchronous* code execution.

**Take a couple of minutes to answer the following:** 

1. What functions/methods have we used that execute *asynchronously*? 
2. What “mechanism” have we used to enable code to run after an asynchronous operation is complete?

**Promises** provide an alternative to *callbacks* as a way to work with asynchronous code execution.

Functions/methods that implement asynchronous operations must be written to:

- Accept a callback
- Return a promise
- Or do both (Mongoose queries are an example of this)

# What’s a Promise?

A **promise** is a special JavaScript object.

A **promise** represents the eventual completion, or failure, of an asynchronous operation.

- Although we usually *consume* promises returned by functions, we’ll start by creating a promise to see better how they work.

## Making Promises

In the `app.js` file, let’s make a promise using the `Promise` class/constructor:

```jsx
const p = new Promise()
```

Save and run in the terminal:

```bash
node app.js
```

This will generate an error because a function argument must be passed in.

So, let’s give `new Promise()` an *executor* function as an argument that has two parameters:

```jsx
const p = new Promise(function(resolve, reject) {
  console.log(resolve, reject)
})

console.log(p)
```

Observations:

- The *executor* is immediately called by the Promise constructor passing functions as args for the `resolve` and `reject` parameters.
- The promise created is an object with a `<pending>` state.

A *promise* is always in one of three states:

- `pending`: Initial state, neither fulfilled nor rejected.
- `fulfilled`: The async operation was completed successfully.
- `rejected`: The async operation failed.

Once a *promise* has been *settled*, i.e., it’s no longer *pending*, its state will not change again.

## Resolving Promises

So, how does a *promise* become `fulfilled`? By calling the `resolve` function:

```jsx
const p = new Promise(function(resolve, reject) {
  let value = 42
  resolve(value)
})
```

The promise, `p`, has been *resolved* with the value `42`.

- Note that promises can only be resolved with a single value; however, that value can be anything such as an object, etc.

How do we get the *value* of a resolved promise? By calling the promise’s `then` method:

```jsx
const p = new Promise(function(resolve, reject) {
  const value = 42
  resolve(value)
})

p.then(function(result) {
  console.log(result)
})
```

The `then` method will execute the callback as soon as the promise is resolved.

<aside>
💡 You can call `then` multiple times to access the value of a resolved promise.

</aside>

So far our code is *synchronous*, let’s make it *asynchronous*:

```jsx
const p = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('Time is up!')
  }, 2000)
})

p.then(function(result) {
  console.log(result)
})
```

We’re using `setTimeout` to create an *asynchronous* operation

So, we’ve seen how the `resolve` function fulfills a promise; I bet you know what the `reject` function does.

## Rejecting Promises

Now let’s call the `reject` function instead of `resolve`:

```jsx
const p = new Promise(function(resolve, reject) {
  setTimeout(function() {
    reject('Something went wrong!')
  }, 2000)
})
```

After 2 seconds, we’ll see a `UnhandledPromiseRejectionWarning: ...` error.

- Reading the error more closely reveals that we need a `.catch()` to handle the promise rejection.

Let’s *chain* a `catch` method call:

```jsx
p.then(function(result) {
  console.log(result)
}).catch(function(err) {
  console.log(err)
})
```

All better!

## Promises - Review

![https://i.imgur.com/B0nzUpC.png](https://i.imgur.com/B0nzUpC.png)

We’ve covered the fundamentals of promises. Next, we’ll see how we can chain multiple promises. Before that though, some review questions!

## Review Questions ❓

1. As a way of working with asynchronous operations, promises provide an alternative to _________ functions.
2. What three states can a promise be in?
3. What method do we call on a promise to obtain its resolved value?

# Chaining Promises

Do you remember having to nest callback functions?

It can get ugly:

![A sad pyramid of callback functions](https://i.imgur.com/Zyq5zZU.png)

A sad pyramid of callback functions

One advantage of promises is that they “flatten” the async flow and thus avoid the so-called *pyramid of doom*.

We can chain as many `.then` methods we want:

```jsx
p
.then(function(result) {
	console.log(result, '<-- first .then')
  return 42;
})
.then(function(result) {
  console.log(result, '<-- second .then')
  return 'Done!'
})
.then(function(result) {
  console.log(result, '<-- third .then')
})
```

Let’s see what happens if we return promises instead of primitives.

- First we need a cool function with an asynchronous operation:
    
    ```jsx
    function asyncAdd(a, b, delay) {
      return new Promise(function(resolve) {
        setTimeout(function() {
          resolve(a + b)
        }, delay)
      })
    }
    ```
    
- The function returns a promise that resolves to the result of adding two numbers after a delay (ms).

This code demonstrates promise chaining in action:

```jsx
asyncAdd(5, 10, 2000)
.then(function(sum) {
  console.log(sum)
  return asyncAdd(sum, 100, 1000)
})
.then(function(sum) {
  console.log(sum)
  return asyncAdd(sum, 1000, 2000)
})
.then(function(sum) {
  console.log(sum)
})
```

Note how, when the `then` callback returns a promise, the next `then` is called when *that* promise resolves.

We’ve made our own promises, resolved them, and chained them!

- More commonly, we’ll be *consuming* promises returned by libraries such as Mongoose.

## Many Promises!

What if we have several promises, and want to get all their data asynchronously but wait for everything to be done before accessing it? 

We can use `Promise.all()` !

`Promise.all()` waits until all the promises are resolved and then returns an array of all values. 

```jsx
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
		'https://jsonplaceholder.typicode.com/albums',
]
```

If you wanted to wait for responses for three different `fetch` requests, you could use `Promise.all()` to get it done!

```jsx
Promise.all(urls.map(url =>
  fetch(url).then(response => response.json())
))
.then(data => console.log(data))
```

Alternatively, you could use `async/await`:

```jsx
const texts = await Promise.all(urls.map(async url => {
  const response = await fetch(url)
  return response.json()
}))

console.log(texts)
```

# Async & Await

Async Await with a try catch block is part of the new ES7 syntax. 

This feature acts as syntactic sugar on top of promises. Check [**MDN - async and await**](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await) for more information on async and await. 

Let us make a fetch call with async and await. 

jsonplaceholder is a convenient place holder of testing your code for 3rd party API data. 

```jsx
async function fetchUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
}

fetchUser()
	
```

Check your browser console.

How would you capture the same data using `.then`? Give it a try! 

# Level Up 🚀

# Activity! 👀

![[Credit: Hubble, NASA, ESA, & D.Q. Wang](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F121722bf-88a5-4641-aa36-b4011498c52d%2FUntitled.png?table=block&id=29d948fc-e58c-4919-a231-ad7171aeaa04&spaceId=5c934bf4-e4de-476b-93dd-d0eb69db59ce&width=2000&userId=4b4a9700-5f5d-43fa-b6c4-633a2401b4e5&cache=v2)](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F121722bf-88a5-4641-aa36-b4011498c52d%2FUntitled.png?table=block&id=29d948fc-e58c-4919-a231-ad7171aeaa04&spaceId=5c934bf4-e4de-476b-93dd-d0eb69db59ce&width=2000&userId=4b4a9700-5f5d-43fa-b6c4-633a2401b4e5&cache=v2)

Using Async Await with a try catch block or .then and .catch, let us call the [**NASA API](https://api.nasa.gov/).** No need to sign up for a key - we will just use the DEMO KEY.

### **DEMO_KEY Rate Limits**

In documentation examples, the special DEMO_KEY API key is used. This API key can be used for initially exploring APIs before signing up, but it has much lower rate limits, so you’re encouraged to signup for your own API key if you plan to use the API (signup is quick and easy). The rate limits for the DEMO_KEY are:

- Hourly Limit: 30 requests per IP address per hour
- Daily Limit: 50 requests per IP address per day

### **Example query**

[https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY](https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY)

Our goal is to use the query to grab five images from the NASA [**APOD**](https://apod.nasa.gov/apod/astropix.html) API

For extra DOM practice you can append these results on the browser but for this exercise we will just view the results in our console.

## [Callbacks](/Unit_2/callbacks.md)

# References 📖

- [**MDN - Using Promises**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [**MDN - async and await**](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
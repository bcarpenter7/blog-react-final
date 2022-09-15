![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f0dd25e5-c26e-4612-bd00-d38b1cf85c8f/jQuery_logo.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f0dd25e5-c26e-4612-bd00-d38b1cf85c8f/jQuery_logo.png)

# What is jQuery?

## JavaScript Library

jQuery is an open-source JavaScript **library** designed to make front-end development more productive and satisfying. [**John Resig**](https://en.wikipedia.org/wiki/John_Resig) created it in 2006. jQuery is the world’s most popular JS library, with more than 55% of the top 10,000 websites using it.

You’ll see the terms *library* and *framework* often used interchangeably. Yes, these two terms are similar; however, there is a subtle difference:

- Libraries, such as *jQuery* and *lodash,* focus on providing a set of utility or helper methods to make programming more efficient.
- Frameworks are more comprehensive, providing capabilities not found in utility JS libraries.
- Frameworks often use libraries to implement their features. But, you’ll never find a library using a framework.
- For an analogy, you can think of libraries as the tools and frameworks as the construction crew.

## Why Use jQuery?

- **Browser Incompatibility**: jQuery provides a layer of abstraction that allows us not to worry about cross-browser compatibility issues. This, more than anything else, led to the widespread adoption of jQuery. Developers no longer had to detect what browser their app was running in and code a bunch of if-else statements containing different code to do the same thing. However, today’s modern browsers’ Web APIs are very compatible - especially after IE11's deprecation in June of 2022.
- **Productivity**: jQuery makes us more productive developers. jQuery’s motto is: *“write less, do more”*
- **Satisfaction**: Many developers consider using jQuery to be more “fun” than writing plain vanilla JS.

<aside>
🧠 Today’s vanilla JS, the Fetch API, CSS animations, and the popularity of front-end frameworks such as React have resulted in a huge decline in jQuery’s usage on new projects. However, as of now, it’s still one of the largest JavaScript libraries.

</aside>

## What Can jQuery Do?

First, there is nothing jQuery can do that can’t be accomplished with native vanilla JavaScript. This makes sense because jQuery **has** to use JS to do what it does.

Okay, so *what* can it do?

- Manipulate DOM elements with ease.
- Perform simple animations.
- Make binding to events more powerful.
- Communicate with servers via AJAX (asynchronous JS and XML).

## jQuery Documentation

[**jQuery’s main documentation**](http://api.jquery.com/) can be unwieldy.

[jQuery API](https://api.jquery.com/)

Those new to jQuery are best served by jQuery’s [**Learning Center**](http://learn.jquery.com/) as the first reference.

[Learning Center](https://learn.jquery.com/)

## Review Questions ❓

- What is the difference between a *library* and a *framework*?
- What is the use case for jQuery? (what, when, and why)

# Setting up jQuery

## Create a Directory and Files

Let's create an **`index.html`** page inside of a project directory called **`first-jquery`**:

With Terminal in your `**lectures**` directory:

```bash
mkdir first-jquery
cd first-jquery
touch index.html
```

Then open the project directory in your code editor.

## HTML Boilerplate

Create your HTML boilerplate - you got this!

## Including jQuery

To use any JavaScript library in our web app, we need to ensure that the script files are included in **`index.html`**.

There are two ways we can include jQuery:

- [**Download jQuery**](http://jquery.com/download/) and save it somewhere within our project folder. Then use the familiar `<script>` tag like this:
    
    ```html
    <script src="js/jquery-3.6.0.min.js"></script>
    ```
    
- Use a [**CDN**](https://en.wikipedia.org/wiki/Content_delivery_network) (content delivery network) like this:
    
    ```html
    <script 
      src="https://code.jquery.com/jquery-3.6.0.min.js"
      integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
      crossorigin="anonymous"
    ></script>
    ```
    

Downloading libraries and saving them to a folder in your project allows you to work with your project without an internet connection.

However, using a CDN can provide performance benefits (especially on mobile devices) and save storage & bandwidth on your server.

Let’s use a CDN to load the jQuery library:

```html
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Intro to jQuery</title>
  <script 
    src="https://code.jquery.com/jquery-3.6.0.min.js"
    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
    crossorigin="anonymous"
  ></script>
</head>
```

## Sample HTML

Now let’s throw in some meaningless HTML that we can play with during the lesson. Copy and paste the following HTML between the `<body>` tags:

```html
<h1>Intro to jQuery</h1>
  
<div id="outer">
  Outer div
  <div id="inner" class="big-and-round">
    Inner div
  </div>
</div>
  
<p>Things we can do with jQuery:</p>
<ul>
  <li>Make it easier to select DOM elements and navigate between them</li>
  <li>Make it easier to modify properties of selected DOM elements.</li>
  <li>Easily create simple animations.</li>
  <li class="special-li">Make binding to events more powerful.</li>
  <li>
    Make it easier to create apps that use AJAX (asynchronous JS and XML),
    in other words, dynamically get data from, and send data to servers.
  </li>
</ul>
```

# Selecting Elements with jQuery

Before we can change the properties of DOM elements, we must first *select* them.

You’ve already had some practice doing this with native JavaScript.

### Review Question ❓

- **What native JS methods have we used to select elements in the DOM?**

## The *jQuery* Function, aka - `$()`

The *jQuery function* provides different functionality - depending upon what we pass to it.

The function `$()` is actually a shorthand alias for a function named `jQuery()`.

## Using `$()` to Select Elements

To select elements, we pass `$()` a string argument that represents a CSS3 selector, just like we did when using `querySelector` & `querySelectorAll`. jQuery also has some non-standard selectors of its own.

Here is a quick summary of the ways we can select elements using the jQuery function:

[Selections](https://www.notion.so/cebfe2eb6bb34b83be72c7b96f7f02b4)

![https://i.imgur.com/AqB9VL3.jpg](https://i.imgur.com/AqB9VL3.jpg)

To select elements by the *type* of the element, use the name of the tag, just like CSS. This would select all `<h1>` tags: `$('h1')`

All CSS3 selectors rules apply. For example, this is how you could select just the first `<li>` tag using the `:first-child` *pseudo-class selector* `$('li:first-child')`

## You Do 💪

In Chrome’s console (`cmd-opt-J`), use jQuery to select the `<div>` that have a class of `big-and-round`.

Unlike selection using `querySelectorAll`, which returns a `NodeList`, the jQuery `$()` returns something a little more robust.

# The jQuery Object/Set

The jQuery selector function, `$()`, returns a special object, known as the **jQuery Object**, AKA a **jQuery set** or **wrapped set** because it “wraps” the selected DOM elements and provides them with jQuery’s super-power methods:

Let’s check out the structure of the *jQuery Object*. First, let’s create a *jQuery Object* using `$()` to select all of the `<li>` elements in the console:

```jsx
> let $li = $('li');
< undefined
> dir($li)
< [...]  
```

<aside>
⚠️ Note that the naming convention for variables used to hold a jQuery object starts the name with a $. It is highly recommended that you follow this best practice if you use jQuery in your projects. However, there’s nothing special about the $ - to JavaScript, it’s just like any other character used to name a variable.

</aside>

Exploring `$li` in the console will reveal an array-like object with lots of functionality - just look at all those methods in the `__proto__` (link to an object’s prototype)!

To check how many elements a jQuery set contains in its array, we can use its `length` property:

```jsx
> $li.length
< 5
```

Let’s see what an element within the *jQuery Object* array holds:

```jsx
> $li[0]
< <li>...
```

Aha! Each element in the array is a **native DOM element, just like we use in vanilla JavaScript.**

## Review Questions ❓

- What does the jQuery function return when it is passed a string representing a CSS3 selector rule?
- The *jQuery Object* contains an array of zero or more native _____ ______.

## Accessing the Native DOM Elements in a jQuery Object

As we’ve seen, the *jQuery Object* contains an array of the selected native DOM elements.

Those DOM elements can be accessed using bracket notation like with any other array.

## You Do 💪

Assuming you don’t know how many `<li>` DOM elements are contained in the `$li` jQuery set, assign the last `<li>` in `$li` to a variable named `lastLi`.

## Adding jQuery Powers to Native DOM Elements

Although native DOM elements have numerous useful methods and properties by default, they don’t have jQuery’s shortcuts and super powers like these:

```jsx
$li.fadeOut()
$li.fadeIn()
```

Luckily, we can turn any regular DOM element into a super-powered jQuery object by wrapping it in the jQuery function. Stay in the console, and go through these steps:

```jsx
// Set a var to reference a raw DOM element
let li = $li[0]

// Bummer, no super powers
li.fadeOut() // causes an error

// Turn it into a jQuery object with super powers!
var $el = $(li)
$el.fadeOut()  // see you later alligator
// Example using chaining 
$(li).fadeIn()  // back so soon?

// More big fun...
$el.hide()
$el.show()
$el.toggle()
// A callback can be provided too!
$el.toggle(function() {
  console.log('done being toggled!')
});
```

## Iterating Elements in a jQuery Object

Although the jQuery Object is an array-like object, it does not have the built-in handy array methods like `forEach()`. However, jQuery usually provides its own methods, typically named using fewer characters.

Instead of `forEach()`, jQuery provides the `each()` method on the jQuery set that can be used to iterate over each raw DOM element:

```jsx
$('li').each(function(idx) {
  console.log(idx + ': ' + this.innerHTML)
});
```

Note that the `each()` method passes in an argument to the callback representing the index of the current iteration. **How is this different from an array’s `forEach()` method?**

Additionally, jQuery has set the `this` keyword to point to the iteration’s current native DOM element.

## The jQuery `eq()` Method

The `eq()` method can be used to index into the array of DOM elements like we did using square brackets. However, `eq()` automatically wraps the DOM element in a jQuery object with all of the magic:

```jsx
let $li = $('li')

// Fade out just the second <li>
$li.eq(1).fadeOut()
```

# Modifying the Content of Elements

[**This page from the Learning Center**](http://learn.jquery.com/using-jquery-core/manipulating-elements/) contains methods and techniques we can use to manipulate elements.

## The `html()` Method

jQuery’s `html()` method is used for both getting & setting a DOM element’s `innerHTML` property.

Here’s how we can use jQuery to change the text of the “inner” `<div>` from “Inner div” to “jQuery Rocks!”:

```jsx
$('#inner').html('jQuery Rocks!')
```

When using a setter to modify the DOM, the change applies to **all elements in the jQuery set**. For example:

```jsx
// Change the content of all <li>'s
$('li').html('Hello SEI')
```

That’s pretty powerful stuff and would have required a little more code to accomplish without jQuery.

<aside>
⚠️ Note that native JS uses a data property, innerHTML, whereas jQuery uses the html() method.

</aside>

## Getters & Setters

Many of jQuery’s methods are designed to both **get** and **set** data on an element.

Whether a method behaves as a ***getter*** or ***setter*** depends upon the arguments passed to it.

For example, the `html()` method:

- `html()`: No arguments, behaves as a getter
- `html('new value')`: One argument, behaves as a setter

<aside>
🧠 When the same method performs different functionality when a different number and/or type of argument(s) are provided, we say that the method has been *overloaded*.

</aside>

# Modifying the CSS of Elements

## The `css()` Method

jQuery has a `css()` method used to get and set the CSS properties of elements.

Here’s how we can change the `color` and `font-weight` on all of the `<li>` elements:

```jsx
$('li').css({ color: 'green', 'font-weight': 'bold' })
```

Above, we have passed the `css()` method an **object** where the keys represent the CSS property.

Notice how we had to write the key `font-weight` as a string - **why is this?**

You can also use the *normalized* names of the properties we’ve seen on the `style` property of DOM elements:

```jsx
$('li').css({ color: 'green', fontWeight: 'bold' })
```

The `css()` method also has a different *signature* that can be used to set a single CSS property at a time:

```jsx
$('p').css('font-size', '30px');
```

## You Do 💪

In the console, write the code that will set the background color of *only the last* `<li>` element to yellow.

## Chaining Methods

Each jQuery method, **when used as a setter**, returns the updated jQuery object. This allows us to **“chain”** methods like this:

```jsx
// Change our <p> tag's content and color
$('p').html('Awesome things jQuery can do:').css('background-color', 'peachpuff')
```

Often, you will see method chaining indented like this to enhance readability:

```jsx
// Change our <p> tag's content and color
$('p')
  .html('Awesome things jQuery can do:')
  .css('background-color', 'peachpuff')
```

## Review Questions ❓

- What jQuery method can be used to both get & set the content of the elements held in a jQuery object?
- What jQuery method is used to change the styling of the elements held in a jQuery object?

# Part 2: Page Setup

## Create a `js/app.js` File

For this next part, we’re going to use the same `**index.html**` inside the `**first-jquery**` directory we created earlier.

But let’s create an `**app.js**` file inside of a `**js**` directory to put our JavaScript in:

```bash
mkdir js
touch js/app.js
```

## Load Order Matters

The browser parses JavaScript in the order it is loaded. So we have to be sure to load jQuery before any code that depends on it.

In our projects, a best practice load order looks like this:

1. jQuery - has no dependencies, so load it first
2. Other third-party libraries (some might depend upon jQuery)
3. Third-party frameworks - for example, AngularJS
4. Finally, your application’s `.js` file(s)

Let’s take the above’s advice and add our `**app.js**` **after** jQuery:

```html
<head>
  <!-- other stuff above -->
  <script 
    src="https://code.jquery.com/jquery-3.6.0.min.js"
    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
    crossorigin="anonymous"
  ></script>
  <script defer src="js/app.js"></script>
</head>
```

## Sprinkle in Some CSS - Bootstrap

Let’s also include the CDN of a popular CSS framework, [**Bootstrap**](http://getbootstrap.com/).

Bootstrap defines a 12-column layout grid, lots of pre-defined CSS classes for styling, components such as carousels, etc.

Here’s what we should have so far:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Intro to jQuery</title>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
    integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
    crossorigin="anonymous"
  >
  <script 
    src="https://code.jquery.com/jquery-3.6.0.min.js"
    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
    crossorigin="anonymous"
  ></script>
  <script defer src="js/app.js"></script>
</head>
<body>
    
</body>
</html>
```

[**Bootstrap**](http://getbootstrap.com/) also changes the default styling of most elements thus making your site more eye-pleasing out of the box.

## Starting HTML

Our sample app is going to display a list homes for sell in Lake Arrowhead.

Here’s some HTML to get us started - **replace** the existing `<body>` tags with the following:

```html
<body class="container">

  <h1 class="jumbotron">Lake Arrowhead Homes For Sale</h1>

  <table id="homes" class="table">
    <thead>
      <tr>
        <th>Address</th>
        <th>Sq. Ft.</th>
        <th>Bedrooms</th>
        <th>Baths</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>27374 Matterhorn Drive</td>
        <td>1,664</td>
        <td>3</td>
        <td>2</td>
        <td>$279,500</td>
        <td><button class="btn btn-xs btn-danger">Remove</button></td>
      </tr>
      <tr>
        <td>243 El Dorado</td>
        <td>4,900</td>
        <td>6</td>
        <td>6.5</td>
        <td>$990,000</td>
        <td><button class="btn btn-xs btn-danger">Remove</button></td>
      </tr>
      <tr>
        <td>1228 Klondike Drive</td>
        <td>2,158</td>
        <td>4</td>
        <td>2.5</td>
        <td>$400,000</td>
        <td><button class="btn btn-xs btn-danger">Remove</button></td>
      </tr>
    </tbody>
  </table>
  <br>
  <button id="addHome" class="btn btn-danger">Add Home</button>

</body>
```

## Open it Up!

We’re all set to get started. Open the file and your page should load and an alert should appear.

# Adding & Removing Classes

Somebody messed up and styled our *Add Home* button with Bootstrap’s `btn-danger` class making it red. We know that a button that adds something new should probably be colored something other than red. Let’s make it green instead.

Change the button from red to green by removing the `btn-danger` class and adding the `btn-success` class with jQuery:

```jsx
$('#addHome').removeClass('btn-danger').addClass('btn-success')
```

That’s better!

## Review Question ❓

What’s it called when we call a method immediately after a previous method like we did above?

## You Do 💪

**Using jQuery, add the Bootstrap class named “text-center” to the `<h1>` tag.**

<aside>
⚠️ In case you’re wondering, “NO”, we would not ordinarily style our page using jQuery :) We’re doing this just to learn about jQuery. jQuery should be used to change styling dynamically as needed by the app.

</aside>

## Does an Element have a class?

jQuery’s has a `hasClass('<the class(es) as a string>')` method that returns `true`/`false` depending whether **any** of the elements in the wrapped set have the class(es):

For example:

```jsx
const isStyled = $('p').hasClass('left-aligned big')
// the isStyled var will be true if any <p> elements have 
// the classes of "left-aligned" and "big"
```

There’s also a `toggleClass(<the class as a string>)` method used to toggle a class.

## Creating New Elements

jQuery makes creating new elements easy. Lets add a hyperlink (`<a>`) to our page that, when clicked, takes our users to Zillow’s website!

## New Element from an HTML String

As you’ve seen, the jQuery function performs different functionality depending upon its arguments. Now let’s see how it can create elements!

One way is to just provide a string representing the HTML to the jQuery function:

```jsx
// returns a jQuery set of new DOM elements
const $newLink = $('<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com</a>')
```

<aside>
⚠️ Note that the jQuery function recognizes the fact that we are passing in a string that resembles HTML instead of a CSS selector - that’s how it knows to create a new element instead of selecting elements. jQuery - you’re so smart!

</aside>

Remember that in programming, there are usually multiple ways to accomplish the same thing, for example, these three code examples are all equivalent ways of creating a`<p class="bold"></p>` element:

```jsx
const $p = $('<p class="bold">')
```

```jsx
const $p = $('<p>', {class: 'bold'})
```

```jsx
const $p = $('<p>').addClass('bold')
```

Which approach you use is up to you (or your boss).

## Adding the Element to the DOM

The `$newLink` variable now holds our newly created elements in memory, however, we still need to add them to the page. One of the ways is to use the `append()` method:

```jsx
$('body').append($newLink)
```

`append()` will insert new elements at the end, but still inside of the specified element’s closing tag.

Other methods available include:

- `appendTo()`
- `insertBefore()`
- `insertAfter()`
- `before()`
- `after()`
- `prepend()`
- `prependTo()`

The practice challenge will provide an opportunity to practice adding elements…

## Check it Out

Refresh your page and there’s the link!

However, we have a UX problem - the link navigates us away from our app. Wouldn’t it be better instead to open Zillow in another tab? We’ll do that in the next section!

# Modifying Attributes

jQuery makes it easy to add/modify the attributes of an element with the `attr()` method.

Lets use it to add a `target` attribute to our link:

```jsx
$('#zillowLink').attr( "target", "_blank" )
```

Refresh - Yay!!!

There’s also a `removeAttr()` method we can use to remove attributes.

## Adding Event Listeners

### Basic Event Listeners

When our shiny green *Add Home* button is clicked, we want to add one of the homes from an array that we will preloaded with a few homes.

Here is how we can add a *click* event listener to the *Add Home* button:

```jsx
$('#addHome').on('click', function(evt) {
  console.log(evt)
})
```

Refresh the page and open the console to see what the `evt` argument (jQuery’s *event* object) passed in by jQuery looks like.

jQuery’s *event* object is pretty much the same as native JavaScript’s - yes, it has all of the useful properties…

**❓ What property on the event object references the element that dispatched the event?**

When googling, you will find plenty of jQuery code using a different syntax for adding a event listeners similar to this:

```jsx
$('#addHome').click(function(evt) {
  console.log(evt, this)
})
```

This syntax in fact uses the `.on` method internally.

<aside>
💡 Generally, more weight should be given to newer results when googling for answers to development questions.

</aside>

[**These docs**](http://api.jquery.com/category/events/) have a complete list of event methods.

[Events | jQuery API Documentation](https://api.jquery.com/category/events/)

## Event Delegation

We already learned about *event delegation* in native JavaScript - what is it?

*Event delegation* in jQuery is a bit more powerful because we can tell jQuery **which specific descendants** we’re interested in listening to by specifying another CSS selector.

For example, if you would like to listen for clicks on only `<div>` elements with a class of `circle`, you could use jQuery to set a delegated event listener on the `<body>` as follows:

```jsx
$('body').on('click', 'div.circle', function() {
  // 'this' will be a <div> with a class of 'circle'
})
```

**What’s different about the way we attach a delegated event listener in jQuery vs. vanilla JS?**

Taking advantage of *event delegation* seems like a perfect approach for our *Remove* buttons that are on each home.

One event listener, regardless of how many homes in our table?! Yes, thanks to event delegation!

We just need to decide on which **ancestor** element to attach the delegated event listener to so that all of the [Remove] `<button>`s are listened to…

Our best bet would be the `<tbody>` element within the `<table>` because it’s the nearest common element of the buttons we want to listen to:

```jsx
$('#homes tbody').on('click', 'button', function() {
  console.log(this)
})
```

## More on DOM Manipulation

### Removing Elements

If our users click on the *Remove* button, we obviously want to remove that home’s row from the table:

```jsx
$('#homes tbody').on('click', 'button', function() {
  $(this).closest('tr').remove()
})
```

Because we want to remove the `<tr>`, not the `<button>` represented by `this`, we can use `closest('tr')` to move up through the ancestors until the first `<tr>` element is found.

Pretty cool!

<aside>
💡 Take a look at the `.find()` and `.children()` methods if you need to look for the nearest descendent going down the DOM instead of up the DOM like we just saw using the `closest()` method.

</aside>

### Removing Elements “Gracefully”

Currently, the sudden disappearance of the home’s row is a little harsh. Let’s use one of jQuery’s built-in [**effects**](http://learn.jquery.com/effects/intro-to-effects/) to help us out:

```jsx
$('#homes tbody').on('click', 'button', function() {
  $(this).closest('tr').fadeOut(1000, function() {
    // now that the tr is hidden, let's completely remove it from the DOM
    $(this).remove();
  });
});
```

Here, we are taking advantage of the fact that we can provide a callback function to the `fadeOut` method to be called once the fade is complete.

That’s better!

# You Do - Add New Homes 💪

Now for a fun challenge.

You’ve already seen everything you need to make this happen! jQuery’s there for you and Google and your fellow students are your friend.

## Goal

When the “Add Home” button is clicked:

1. Take a home out of an array of home objects (see below)
2. Append a row containing the data for the home to the table.

First, copy this array of new home data to your script:

```jsx
const newHomes = [
  {
    address: "27569 Cedarwood Drive",
    sf: "2,535",
    bedrooms: 3,
    baths: 2.5,
    price: "$496,500"
  },
  {
    address: "316 Annandale Drive",
    sf: "1,326",
    bedrooms: 4,
    baths: 2,
    price: "$275,000"
  },
  {
    address: "251 Grandview Road",
    sf: "3,800",
    bedrooms: 3,
    baths: 2,
    price: "$699,900"
  },
  {
    address: "28571 Manitoba",
    sf: "2,960",
    bedrooms: 4,
    baths: 3.5,
    price: "$775,000"
  },
]
```

## Hints:

- Don’t forget that the jQuery function can create HTML by passing in a string that looks like HTML - just like we did when we added the Zillow hyperlink earlier in the lesson. This string of HTML can include everything you want to be inserted, the cells, classes, content, button, etc.
- You can use DevTools to inspect an existing row and copy its text to use as a “template” for the string used to create the new row.
- Consider using a template literal to interpolate the values of the home object’s properties into the string before passing to the jQuery function.
- It always helps to pseudocode (write the coding steps in plain, non-technical language).

## Bonus Challenge

- Disable the *Add Home* button if there are no more homes in the array.

## Super Bonus Challenge

- Add a button, that when clicked, restores all previously removed homes and appends them to the bottom of the table.
    
    Hint: When you remove an element like we did with the `<tr>`s, they are returned by the `remove` method.
    

# Level Up 🚀

## jQuery Plugins

There are lots of “plugins” available for jQuery that provide all sorts of functionality, such as UI components:

[**jQuery Plugin Registry**](https://plugins.jquery.com/)

[jQuery Plugin Registry](https://plugins.jquery.com/)

## Code Minification

Often you will see library and framework files end with `**.min.js**`. This is a naming convention used to signify that the code has been *minified*.

Minification is the process of making a javascript file smaller by removing all line breaks and whitespace, reducing the length of variable and function names, and stripping out all comments.

The **benefits** of using minified versions of libraries is that they use less memory; and take less time to load, parse and execute since they are significantly smaller - usually around a third in size.

The **downside** of using minified code is that it can’t easily be understood or debugged. We won’t have to worry about debugging jQuery, but reading source code is a great way to learn coding techniques and in this case you would want to use the non-minified versions.

# References

[**Official jQuery website**](https://jquery.com/)

[jQuery](https://jquery.com/)

[**jQuery Learning Center**](http://learn.jquery.com/)

[Learning Center](https://learn.jquery.com/)

[**Manipulating Elements - jQuery Learning Center**](http://learn.jquery.com/using-jquery-core/manipulating-elements/)

[Manipulating Elements](https://learn.jquery.com/using-jquery-core/manipulating-elements/)
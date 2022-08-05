# Game of Thrones fansite

Remember when GoT was a thing? Now you can make your own GoT fan site!

You've been given a zip file for a GoT site with information about some of the characters, but it doesn't really work yet. 

`index.html` and `style.css` include the initial structure and styling.

In `script.js`, you will find an array of objects with each character's name and bio, and some code for you to fill in.

## Part 1: The more-info button
Each character has a button with the class `more-info`, it's already hooked up to an event handler function.
Make that button work for each character by writing only one event handler that works for all characters (there are more instructions in `script.js`).
Make sure you first focus on figuring out which button was pressed (which characters name), before you try to get the bio for that character.

Once you've got the bio, create and add a `<p>` element after the button to show that bio.

## Part 2: Search
Add a text input box at the top of the page, and a button called 'search'.

Make it so that you can type in the name of any of the characters and press 'search' and it will hide all the other characters, showing only the one you searched for.

## Extensions
- When you click the `more-info` button to show the character bio, the button should change to a 'hide' button which should let you hide the extra info.
- Add another button that, when clicked, arranges all characters in alphabetical order.
- Add another button that randomly shuffles the characters.
- Create the HTML elements for each character completely in Javascript and append them to the <div class="got-characters"> element when the page loads.

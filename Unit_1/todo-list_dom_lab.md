# Todo list

## Part 1

Create a web page for keeping track of todo's!
It should have a numbered list, a text input box and a button. 

For easy testing, make sure the numbered list starts with 2 or 3 todos when you refresh the page.

You should be able to write in the text input box and click the button.
When you click the button, it should add a new todo (with the text from the input) to the end of the todo list.

Make sure that:

 - You cannot add an empty todo, with no text
 - When you add a todo, once the todo is added, it clears the text input box

## Part 2

Add a `selected` class to your css, and add it to at least one of the todos. The css should clearly highlight which todos have the `selected` class, perhaps with a background colour.

Create a second text input box and some more buttons (make each button call a different function in your JS). These buttons should each make some visible changes to the todos.

These buttons should use the new text box to figure out which todo to change. You can enter a number in the text box and then press these buttons:
 - `select` (adds `selected` class to the todo for that number, e.g. if the text-box has a 3 in it, it should add the `selected` class to the 3rd todo)
 - `unselect` (removes `selected` class on the todo for that number) 

Add these buttons too:
 - `select all` (adds 'selected' class to all todos)
 - `clear selection` (removes 'selected' class from all todos)

Try selecting a few todos and deleting them.

## Extension
Add these buttons too:
 - `select random` (selects a random todo from the list)
 - `move up` (moves the selected todo to the top of the order)
 - `move down` (moves the selected todos to the bottom of the order)
 - `sort` (sorts all the todos alphabetically)
 - `setcolor <colour>` (changes the background colour of the todo)
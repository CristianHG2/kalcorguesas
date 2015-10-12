# kalcorguesas
Repository of Kalcor's burgers (Kalcorguesas) (English) [EXPLICIT!]

## Creating new objects

Object creation is pretty simple due to the fact that we tried to develop this as modular and simple to modify as possible. The first thing you want to do is open the `objects.js` file located under the `js` directory, look for the array of the type of object you want to add and add a new element to the array based on either the template on the comments or other elements (Current objects type are `tasks`, `objects` and `boosts`), then, just add the element on markup on the `index.html` file located under the `sources` directory. Use the other elements as an example. After that, just add a `data-type` attribute to the DOM (HTML) element, it can be 1 for `objects` or "burgers", 2 for `tasks` and 3 for `helpers` or "boosts"

## Using the typeWriter function

The `$(element).typeWriter(text, interval, options)` function simulates a typewriter. It is called just as we demonstrated and it's generally called at the end of a task. In order to add text to the typewriter, open the file `taskstext.js` located under the directory `js` and add a new element with the ID/name of your task.

## Important!

Remember that every object/variable/element that is related to a game object **MUST** have the same ID/name of the game object that is located at `objects.js`

**Developer's note:** This a joke, and we'll even spell it out for you, it's a j o k e, it is not to be taken seriously. We admire the work of Mr. Kalcor and that's actually the reason we developed this "game" (If you can call it that at such an early stage), you can consider a thank you from us to Kalcor.

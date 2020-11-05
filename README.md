# Task

Create a catalogue of 10 items and each item should have
a button that lets you set an item as available or 
unavailable.

There should be visual representation showing an items availablity.
**ie we should be able to see what's available in the UI**. You 
could do this by toggling a class on the item.

# Deliverables

- A github repo showing your completed code
- Your site hosted somewhere on the internet eg. vercel, netlify, firebase
- This readme file updated with the approach you took and an explanation on your decisions

# My approach in solving this problem
1. I created an array of 10 objects containing keys and values of ID(number), name(string), price(number) and availability(boolean).
2. I created a function("createItem) to display the objects in the array as items. I used the app div in the HTML file to display the contents of the array.
3. I created a div("store") and another div("item") with document.createElement and gave them a class with .className
4. I appended three paragraph tags(p) and a button to the item div and set their text content to the values in the array
5. I then mapped the function to the array using .map(createItem)
6. I then set an ID attribute to each value using set attribute to label each item in the item div
7. I then added an event listener to the button and added a function to apply the line-through style on the button and p tags when the button is clicked

Note: Getting this to work was not as easy as it seems. I had to try different things and debug a whole lot before I got it to work.

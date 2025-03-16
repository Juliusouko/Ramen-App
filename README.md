In this project, you'll create a web application for rating ramen dishes entirely from scratch. You'll practice handling user events, manipulating the DOM, structuring JavaScript code effectively, and using Git basics. No server communication or external servers are required; instead, you'll use static data provided within your project.

Objectives
Use JavaScript to update the DOM based on user interactions dynamically

Practice handling user input and events

Organize your code logically into functions

Learn how to create and manage a project repository using Git

Project Requirements
Deliverables
Display Ramen Images:

Create a displayRamens() function.

Load images from the ramens array using standard JavaScript array methods (e.g., forEach) and append them as <img> elements inside the #ramen-menu div.

Ramen Detail Display:

Clicking a ramen image triggers a handleClick function that displays the ramen details (name, restaurant, and optionally rating and comment) in the #ramen-detail div.

Handle New Ramen Form Submission:

Create an addSubmitListener function.

When a user fills out the form and submits it, add the new ramen image to the #ramen-menu div. Updating the DOM is sufficient (no data persistence required).

Initialize App:

Write a main function that initializes your application by invoking:

displayRamens()

addSubmitListener()

Ensure that the DOM content is fully loaded before the main function runs.

Advanced Requirements (Optional)
Display the details for the first ramen automatically on page load without user interaction.

Allow users to edit the rating and comments for selected ramen and display updated info dynamically.

Implement deletion functionality to remove a ramen from the display.


# simple-todo-board
Simple localstorage based todo board app built with vuejs 

### Design Approach
- Main logic is kept at main.js. 
- Each card holds 
  - id: Random id helps in identifying each card uniquely
  - title: User input.
  - description: User input.
  - status: Identifies in which column card actually belongs
- All cards are stored as array of objects inside an object 'todos'
- Upon clicking add card button, bootstrap modal will appears with a simple form. After clickig create card button inside modal, form validation will be preocessed.
- If all the fields are valid, will check whether user is creating or updating a card using a flag. 
- If user is creating a valid card, it will appends at the end of 'todos' object
- If user is updating a card, that card object is updated by finding its index from 'todos' object
- When a modal is toggled, a listener is attatched to it to reset the form accordingly.
- Deleting a card from 'todos' object is handled by inbuilt js array splice method.

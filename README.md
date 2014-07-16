# Let's Get Quizzical

### About
Let's Get Quizzical is a one page trivia application that was built in JavaScript with Backbone.js.  
Users are prompted to choose one of three categories and the game begins.  Each game consists of 7 questions  
that are chosen randomly from the selected category's question bank.  The user has ten seconds to  
choose an answer.  The score they receive will be based on how quickly they choose an answer.  If time  
runs out before an answer is chosen, the game will automatically go to the next question.  Users can  
then save their final score when prompted after the quiz is completed.  If the name exsists in the  
database already, they will be asked if they want to add the current score to the score that is already  
associated with that name.  Otherwise they can choose a new name.  The full version of the app can be  
found [here](https://lets-get-quizzical.firebaseapp.com).

### Technologies
The functionality of the game is built in JavaScript.  The use of Backbone.js allows the game to be one page  
that renders different Backbone views.  User scores are saved using Firebase.  The styling was created with  
Bootstrap, HTML5 and CSS3.

### Challenges
The first major challenge was using a framework that was new to me, Backbone.js.  Early on in the project  
I kept encountering memory leaks when trying to remove views from the page.  This was causing all kinds of  
problems with my timer as well as scoring because views I had thought had been removed were still listening  
for events.  I combated this by rendering the views I needed when the app loaded and simply re-rendering them  
with updated information when needed.  Initially I was created a new view view everytime I needed a new model.
I also used regular JavaScript arrays and objects for collections and models to simplify what could listen  
to events and what could not.

The second major challenge was the timer.  I had used setTimeout before, however this time around, the state  
of the timer affected which events were being triggered.  This resulted in unexpected behavior from both the timer  
other views that were being rendered.  One way to combat that was to create as few views as needed as mentioned above.  Also using clearTimeout helped me pause and control the timer.

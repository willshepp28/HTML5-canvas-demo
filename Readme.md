# HTML5 Canvas Demo 


----

**What is this?** 

This is the display of the hangman game, created with canvas.

Check out the App Live at https://hangman-frontend.herokuapp.com/<br>


---

## Hangman Canvas
![Hangman](https://s3.amazonaws.com/hangman-app/wireframe/hangman-canvas.png)


```js

/*
|--------------------------------------------------------------------------
| Sets the coordinates of the gallows
|--------------------------------------------------------------------------
*/
    var bottomOfGallow = setcoordinates(120,275,225,275); // creates the very bottom of the gallow
    var middleOfGallow = setcoordinates(175,275,175,60); // creates the middle of the gallow 
    var topGallow = setcoordinates(107,60,178,60);  // creates the top of the gallow
    var gallowDrop = setcoordinates(110,60,110,108); // creates the drop point at the edge of the top of the gallow


/*
|--------------------------------------------------------------------------
| Sets the coordinates of the hangman
|--------------------------------------------------------------------------
*/
    var head = circle(110,123,15); // creates the head of hangman
    var torso = setcoordinates(110,137,110,188);   // creates the torso of hangman
    var rightArm = setcoordinates(86, 160, 120, 160); // creates the right arm of hangman
    var leftArm = setcoordinates(130, 160, 110,160); // creates the left arm of hangman
    var rightLeg = setcoordinates(110, 185, 89, 205); // creates the right leg of hangman
    var leftLeg = setcoordinates(110, 185, 130, 206)  // creates the left leg of hangman


```
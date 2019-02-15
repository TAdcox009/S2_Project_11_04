"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: Todd Adcox Jr 
   Date:  2-14-19 

   Filename:   ph_clock.js     

*/

// Variable named minsLeft is set to a value of 0. This variable will keep track of the minutes left.
// Variable named secsLeft is set to a value of 15. This variable will keep track of the seconds left within each minute.
// Variable named timeLeft is set to a value of the variable equal to the number of minsLeft multiplied by 60 plus the number of secsLeft.
var minsLeft = 0;
var secsLeft = 15;
var timeLeft = minsLeft * 60 + secsLeft;

// The countdown function will be used to update the minsLeft, secsLeft, and timeLeft variables every second.
// A new value is going to be set for the minsLeft variable by dividing the timeLeft variable by 60, using the Math.floor() method.
// A new value for the secsLeft variable is equal to the value of the timeLeft variable minus 60 times the minsLeft variable.
function countdown() {
    minsLeft = Math.floor(timeLeft / 60);
    secsLeft = timeLeft - 60 * minsLeft;
    var minsString = addLeadingZero(minsLeft);
    var secsString = addLeadingZero(secsString);
}



// c. Randall wants the countdown clock to display leading zeroes when the minsLeft or secsLeft values are between 0 and 9. The addLeadingZero() function has been provided for you to add these zeroes if necessary. Create a new variable named minsstring and set it equal to the value returned by the addLeadingZero() function using minsLeft as the parameter value.

// d. Call the addLeadingZero() function again using secsLeft as the parameter value and store the result in the secsstring variable.

// e. Within the element with the ID minutes, change text content to the value of the minsString variable. Within the element with the ID seconds, change the text content to the value of the secsString variable.

// f. Randall has supplied you with a function named checkTimer()that will check whether there is any time left to submit the order. Add a command to call this function. The function has no parameters.

// g. Use the decrement operator to decrease the value of the timeLeft variable by 1.

// 9. Scroll back to the top of the file and, directly below the statement that declares the timeLeft variable, insert a command to run the countdown() function every second. Store this timed command in a variable named clockiD.







/* ------------------------------------------------- */


/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */

function checkTimer() {
    if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
    var numStr = (num < 10) ? ("0" + num) : "" + num;
    return numStr;
}
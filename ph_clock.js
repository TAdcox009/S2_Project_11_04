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

// 9. Scroll back to the top of the file and, directly below the statement that declares the timeLeft variable, insert a command to run the countdown() function every second. Store this timed command in a variable named clockiD.


// Variable named minsLeft is set to a value of 30. This variable will keep track of the minutes left.
// Variable named secsLeft is set to a value of 0. This variable will keep track of the seconds left within each minute.
// Variable named timeLeft is set to a value of the variable equal to the number of minsLeft multiplied by 60 plus the number of secsLeft.
// runs the countdown function at an interval of 1000.
var minsLeft = 30;
var secsLeft = 0;
var timeLeft = minsLeft * 60 + secsLeft;
var clockId = setInterval("countdown()", 1000);

// The countdown function will be used to update the minsLeft, secsLeft, and timeLeft variables every second.
// A new value is going to be set for the minsLeft variable by dividing the timeLeft variable by 60, using the Math.floor() method.
// A new value for the secsLeft variable is equal to the value of the timeLeft variable minus 60 times the minsLeft variable.
//When the minsLeft or secsLeft values are between 0 and 9, a new variable named minsstring is set equal to the value returned by the addLeadingZero() function using minsLeft as the parameter value.
function countdown(){
    minsLeft = Math.floor(timeLeft / 60);
    secsLeft = timeLeft - 60 * minsLeft;
    var minsString = addLeadingZero(minsLeft);
    var secsString = addLeadingZero(secsLeft);

    // In the element with #minutes the text content is going to change to the value of the minsString variable.
    // In the element with #seconds the text content is going to change to the value of the secsString variable.
    document.getElementById("minutes").textContent = minsString;
    document.getElementById("seconds").textContent = secsString;

    //This is calling the function checkTimer() and it has no parameters.
    checkTimer();

    //This is going to decreasethe value of the timeLeft variable by 1.
 timeLeft --;
}
   
// function named stopclock() the purpose is to stop the clock when the time has run out and to notify the user that the time has expired, this function has no parameters.
//  the insertAdjacentHTML() method is being used to insert the following HTML code before the end of the page element with the ID TimeHead.
// Use the clearInterval() method to clear the timed command stored in the clockID and stop it from continuing to run.
function stopClock() {
    document.getElementById("TimeHead").insertAdjacentHTML('beforeend', "<br />(Order Expired)" );
    clearInterval(clockId);
}



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
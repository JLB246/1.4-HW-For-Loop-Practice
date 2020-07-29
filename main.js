/* Recall the syntax and parts of a For Loop:
for ( INITIALIZATION; CONDITION; AFTERTHOUGHT ) {
  "BODY" OF THE FOR LOOP GOES HERE.
  THIS IS THE PART THAT GETS REPEATED.
}

Here's an example For Loop that will count up 
from 1 to 100 and log each number. Run this code 
and note the results before moving on. */

/* Challenge 1: Define each of the below terms in
your own words.  

variable declaration: This is when you create a variable and specify its type

variable definition: This is the value or content of the variable.

loop: A function used to repeat commands  

iteration: An approach used to see if a specific condition exists in a block of code.  

counter variable: This counts how many times a code is executed 

*/


/* Challenge 2: Write your own For Loop that counts
up by 10s from 1000 to 1100, logging the value in 
each iteration. */
for (var i = 1000; i <= 1100; i=i+10){
  console.log(i);
}

for (var i = 1400; i <= 1600; i=i+20){
  if (i < 1500){
    console.log(i + '-low')
}
else if(i === 1500){
    console.log(i+'-medium')
}
else if(i > 1500){
  console.log(i+'-high')
}
}
/* Challenge 3: Write your own For Loop that counts
up by 20s from 1400 to 1600. Use an if/else statement 
inside your loop to log the counter alongside a "-low" 
when it's < 1500, a "-medium" when it's equal to 1500 
and a "-high" when the counter is > 1500. 
if (i < 1500){
    console.log(i+'-low')
}
else if(i === 1500){
  console.log('-medium')
}
else(i > 1500){
  console.log('-high')
}




So for example, your output from this loop 
should begin with:

1400-low
1420-low
1430-low...

and end with

...
1580-high
1600-high

Hint: Remember that you can "append" a number to a string
with a + operator like: console.log(i + '-high')
*/

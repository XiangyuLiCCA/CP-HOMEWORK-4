# CP-HOMEWORK-4
How many lines are drawn each frame? In other words, how often does the for loop run?

The number of lines is affected by the for loop. In this code, the left and right borders are removed, and a line is drawn every ten pixels, so there are 38 lines.

What do the first, second, and third appearances of the number 10 do in the code?

//x = 10 for Start in 10 pixels on left side
    // x < width-10 for stop in 10 pixels on right side
    // x= x + 10 means 10 pixels between each two points. This will affect the number of lines
    
How many times does the loop body run each frame, once the x and y arrays are full?

6 times, because there has 6 Circles.

What are two ways of increasing the spacing between rings?

change "i = i + 20" to affect the radius of each circle

How can you make the ellipse trail longer?

change code "x = x.slice(-100) and y = y.slice(-100);" to make the program keep more values.
  

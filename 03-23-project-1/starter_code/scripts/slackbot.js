// Description:
//
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//

module.exports = function(robot) {
  //  YOUR CODE HERE
  //  Example
   robot.hear(/javascript/i, function(msg) {
     return msg.send("I love JavaScript!");
   });
}

/************************************

EXAMPLES OF THE KEY HUBOT FUNCTIONS

************************************/

/* Variables for random example */

var squirrels;
squirrels = ["http://img.skitch.com/20100714-d6q52xajfh4cimxr3888yb77ru.jpg", "https://img.skitch.com/20111026-r2wsngtu4jftwxmsytdke6arwd.png", "http://cl.ly/1i0s1r3t2s2G3P1N3t3M/Screen_Shot_2011-10-27_at_9.36.45_AM.png", "http://shipitsquirrel.github.com/images/squirrel.png"];

module.exports = function(robot) {
  /* Basic example of respond / send. If the user enters hi or hello the bot responds "Howdy!" */
  return robot.respond(/hi|hello/i, function(msg) {
    return msg.send("Howdy!");
  });

  /* Random Example
  If a user enters 'ship it' we return a random squirrel, which is popular for symbolizing shipping something with engineers */
  return robot.hear(/ship it/i, function(msg) {
    return msg.send(msg.random(squirrels));
  });
};

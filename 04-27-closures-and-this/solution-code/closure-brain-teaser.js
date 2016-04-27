
function queueCreator(waitList){
  for (var i=0; i<waitList.length; i++) {
    waitList[i].id = function() {
      return i + 1;
    }(); // IIFE
  }
  return waitList;
}

var people = [{name:'George'},{name:'Chris'}];

var queueList = queueCreator(people);

console.log(queueList[0].id); // 1

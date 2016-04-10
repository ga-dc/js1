(function timedCountDown(endTime) {
  for (var i=1; i<=endTime; i++) {
      (function runCountDown(j){
          setTimeout( function timer(){
              console.log( j );
          }, j*1000 );
      })( i );
  }
})(5);

(function() {
    'use strict';
var numbers = [];
for (let i=0; i<5; i++) {
    setTimeout(function() {
        numbers.push(i);
    },500);
}
   setTimeout(function() {
       console.log(numbers);
   }, 500);

   }) });

funciton () {
    'use strict';
    if (true {
        console.log(MY_VAL);    //const cannot be called before it is declared 
        const MY_VAL =1;    // it will throw syntax error
    }
    })();

    function car(){
        this.speed = 0;
        setInterval( () => {
            this.speed++;
            document.getElementById("status").innerHTML = this.speed;},300);
    }
    var car1 = new car();


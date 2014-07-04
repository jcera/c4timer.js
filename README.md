C4Timer.js
========================
<br/>
####What is this?
> A simple implementation of timer/countdown. <br/>
> Don't mind the name, the author is just a fan of **CS (Counter-Strike)**

<br/>
####Basic Usage
===
```javascript

//sample usage
var options = {

    endDate: null,

    onTick: function(remainingTime) {
        //this is where you do something magical. *evil-grin*
        //sample usage: render the `remainingTime` on a span.
    },

    onEnd: function() {
        //this is when the Terrorist won already. :(
        //just kidding, this is being called right after the duration ended,
        //you can use this to display or flash something at the screen
    }
    
};

var c4Timer = new C4Timer(options);
//where's your diffuse kit? :D
c4Timer.start();

````




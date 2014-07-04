C4Timer.js
========================
<br/>
####What is this?
> A simple implementation of timer/countdown. <br/>
> Don't mind the name, the author is just a fan of **CS (Counter-Strike)**

<br/>

####Basic Usage
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
```

`endDate` - if this is `"falsy"`, like `null` or `undefined`, `C4Timer` will fallback to tomorrow midnight's datetime as its `endDate`.
<br/>
<br/>
`onTick` and `onEnd` - if these properties are ignored, it will fallback to an empty function.

<br/>
<br/>

####Roadmap
===
* Explore other timing mechanics such as delta-time to make this as accurate as possible
* Add a time-format customization functionality
* Some stuffs. lol

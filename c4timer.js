(function(w) {

    var _endDate = tomorrow(),
        _onTick = function() {},
        _onEnd = function() {},
        _ended = false;

    function tomorrow() {
        var tomorrowMidnight = new Date(new Date().getTime() + 86400000);
        tomorrowMidnight.setHours(0, 0, 0, 0);
        return tomorrowMidnight;
    }

    function validDate(d) {
        if (!d || Object.prototype.toString.call(d) !== "[object Date]")
            return tomorrow();
        else
            return d;
    }

    function checkEnded(isEnded) {
        _ended = isEnded;
    }

    function remainingTime() {
        var diff = _endDate.getTime() - new Date().getTime(),
            hrs = Math.floor(diff / 3600000),
            mins = Math.floor(diff % 3600000 / 60000),
            secs = Math.floor(diff % 60000 / 1000);

        checkEnded(hrs <= 0 && mins <= 0 && secs <= 0);

        return hrs + ":" + mins + ":" + secs;
    }

    var C4Timer = w.C4Timer = function(props) {
        if (props) {
            _endDate = validDate(props.endDate);
            _onTick = props.onTick || _onTick;
            _onEnd = props.onEnd || _onEnd;
            _ended = false;
        }
    };

    C4Timer.prototype.start = function() {
        var id = setInterval(function() {
            if (!_ended) {
                _onTick(remainingTime());
            } else {
                _onEnd();
                clearInterval(id);
            }
        }, 1000);
    };

    return C4Timer;
    
})(window);

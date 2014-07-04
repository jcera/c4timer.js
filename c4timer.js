(function() {

    var _endDate, _onTick, _onEnd, _end;

    function tomorrow() {
        var tomorrowMidnight = new Date(new Date().getTime() + 86400000);
        tomorrowMidnight.setHours(0, 0, 0, 0);
        return tomorrowMidnight;
    };

    function remainingTime() {
        var diff = _endDate.getTime() - new Date().getTime();

        var hrs = Math.floor(diff / 3600000);
        var mins = Math.floor((diff % 3600000) / 60000);
        var secs = Math.floor((diff % 60000) / 1000);

        if (hrs <= 0 && mins <= 0 && secs <= 0)
            _end = true;

        return hrs + ":" + mins + ":" + secs;
    }

    var C4timer = window.C4timer = function(props) {
        _endDate = props.endDate;
        _onTick = props.onTick || function() {};
        _onEnd = props.onEnd || function() {};
        _end = false;

        //check if it is `falsy` or not a date object, if not, fallback to tomorrow's date.
        if (!_endDate || Object.prototype.toString.call(_endDate) !== "[object Date]") {
            _endDate = tomorrow();
        }
    };

    C4timer.prototype.start = function() {
        var intervalId = setInterval(function() {
            if (!_end) {
                _onTick(remainingTime());
            } else {
                _onEnd();
                clearInterval(intervalId);
            }
        }, 1000);
    };

    return C4timer;
})();

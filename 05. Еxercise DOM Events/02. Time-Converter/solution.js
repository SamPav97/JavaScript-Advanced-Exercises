function attachEventsListeners() {
    //get the buttons
    //make object
    // on click in function call function that converts
    // on click register in inputs by getting to parent and queryselecting a input[type="text"]

    let btn1 = document.getElementById("daysBtn");
    let btn2 = document.getElementById("hoursBtn");
    let btn3 = document.getElementById("minutesBtn");
    let btn4 = document.getElementById("secondsBtn");

    let obj = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    btn1.addEventListener('click', onClick);
    btn2.addEventListener('click', onClick);
    btn3.addEventListener('click', onClick);
    btn4.addEventListener('click', onClick);

    function convert(value, unit) {
        let days = value / obj[unit]
        return {
            days,
            hours: days * obj.hours,
            minutes: days * obj.minutes,
            seconds: days * obj.seconds
        }
    }

    function onClick(e){
        let input = e.target.parentElement.querySelector('input[type="text"]');
        let res = convert(Number(input.value), input.id)

        let values = document.querySelectorAll('input[type="text"]');

        values[0].value = res.days
        values[1].value = res.hours
        values[2].value = res.minutes
        values[3].value = res.seconds
    }



}
function lockedProfile() {
    // get all buttons
    //get the is checked from event tho
    // set an event if clicked reveal the div in the profile thru the event
    // change button to show left
    // only do that if unlcok checked

    let buttons = document.querySelectorAll('button');


    buttons[0].addEventListener('click', onClick);
    buttons[1].addEventListener('click', onClick);
    buttons[2].addEventListener('click', onClick);

    function onClick(e) {
        let unlock = e.target.parentElement.querySelector('input[value="unlock"]');
        if (unlock.checked) {
            let showHide = e.target.parentElement.querySelector('button').textContent
            if (showHide == 'Show more') {
                e.target.parentElement.querySelector('div').style.display = 'block';

                e.target.parentElement.querySelector('button').textContent = 'Hide it';
            } else {
                e.target.parentElement.querySelector('div').style.display = 'none';

                e.target.parentElement.querySelector('button').textContent = 'Show more';
            }


        }
    }
}
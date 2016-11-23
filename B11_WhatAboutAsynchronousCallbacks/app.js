// long running function
// How JavaScript synchonously handles asynchronous requests by using the event queue

function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event!');
}

// listen for the click event
document.addEventListener('click', clickHandler);


waitThreeSeconds();
console.log('finished execution');

// JavaScript handles the events that occur while the waitThreeSeconds function is running by queing them
// up in the event queue. Once those functions have executed, they exit the stack and the queued events are moved
// to the top of the stack. This can be seen in the console as 'click event' will not appear before finished execution.

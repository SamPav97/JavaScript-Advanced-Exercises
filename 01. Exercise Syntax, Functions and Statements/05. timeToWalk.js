function timeToWalk(numSteps, footLength, speed) {
    let distance = (numSteps * footLength);
    let speedMetersSec = speed / 3.6;
    let time = distance / speedMetersSec;
    let breaks = distance / 500 | 0

    let timeMin = Math.floor(time / 60);
    let timeSex = Math.round(time - (timeMin * 60));
    let timeHr = Math.floor(time / 3600)

    console.log((timeHr < 10 ? '0' : '') + timeHr + ':' + 
    (timeMin + breaks < 10 ? '0' : '') + (timeMin + breaks) + ':' + 
    (timeSex < 10 ? '0': '') + timeSex);
}

timeToWalk(2564, 0.70, 5.5)
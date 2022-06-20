function attachEventsListeners() {
    let btn = document.getElementById('convert');

    btn.addEventListener('click', onClick);

    let obj = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    }

    function onClick() {
        let input = Number(document.getElementById('inputDistance').value);
        let convertFrom = document.getElementById('inputUnits').value;
        let convertTo = document.getElementById('outputUnits').value;
        

        let valueInMeters = input * obj[convertFrom];
        let converted = valueInMeters / obj[convertTo];

        document.getElementById('outputDistance').value = converted;



    }



}



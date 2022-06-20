function encodeAndDecodeMessages() {
    //get input text and output text
    //get buttons
    //uponencode
    //upon decode

    let textAreas = document.querySelectorAll('textarea');

    let buttons = document.querySelectorAll('button');

    buttons[0].addEventListener('click', onEncode);

    buttons[1].addEventListener('click', onDecode);

    function onEncode() {
        let toEncode = textAreas[0].value;
        let encoded = ''

        for (let i = 0; i < toEncode.length; i++) {
            encoded += String.fromCharCode(toEncode.charCodeAt(i)+1)
        }

        textAreas[1].value = encoded
        textAreas[0].value = ''
    }

    function onDecode() {
        let toDecode = textAreas[1].value;
        let decoded = ''

        for (let i = 0; i < toDecode.length; i++) {
            decoded += String.fromCharCode(toDecode.charCodeAt(i)-1)
        }

        textAreas[1].value = decoded
    }
}
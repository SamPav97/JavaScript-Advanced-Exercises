function calculator() {
let field1 = null;
let field2 = null;
let resField = null;

    return {
        init: (sel1, sel2, resSel) => {
            field1 = document.getElementById(sel1.slice(1));
            field2 = document.getElementById(sel2.slice(1));
            resField = document.getElementById(resSel.slice(1));
        },

        add: () => {
            resField.value = Number(field1.value) + Number(field2.value);
        },
        subtract: () => {
            resField.value = Number(field1.value) - Number(field2.value);
        }
    }
}





function editElement(element, match, replacer) {
        const text = element.textContent;
        //const pattern = new RegExp(match, 'g')
        const res = text.split(match).join(replacer)
        element.textContent = res
}
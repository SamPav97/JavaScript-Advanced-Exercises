function attachGradientEvents() {
    const gradient = document.getElementById("gradient");
    gradient.addEventListener('mousemove', OnMouseOver);
    const res = document.getElementById('result')


    function OnMouseOver(ev){
        res.textContent = Math.floor(ev.offsetX / gradient.clientWidth * 100) + '%';
    }
}
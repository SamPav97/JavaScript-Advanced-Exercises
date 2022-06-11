function solve() {
  let text = document.getElementById('input').value.split('.').filter(s => s.length != 0);
  let output = document.getElementById('output');

  let count = 0;

  while (text.length > 0) {
    let paragraph = text.splice(0, 3).join('. ') + '.';
    let p = document.createElement('p');
    p.textContent = paragraph;
    output.appendChild(p);
  }
}
function solve() {
  let txt = document.getElementById("text").value;
  let demand = document.getElementById("naming-convention").value;
  let res = '';

  if (demand == "Camel Case") {
    res = txt.toLowerCase();
    res = res.split(' ').map(x => x[0].toUpperCase() + x.substring(1)).join('');
    res = res[0].toLowerCase() + res.substring(1)
    document.getElementById("result").innerHTML += res;

  } else if (demand == "Pascal Case") {
    res = txt.toLowerCase();
    res = res.split(' ').map(x => x[0].toUpperCase() + x.substring(1)).join('');
    document.getElementById("result").innerHTML += res;
  } else {
    document.getElementById("result").innerHTML += "Error!"
  }
}
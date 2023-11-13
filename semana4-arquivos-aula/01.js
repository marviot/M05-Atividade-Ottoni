const ps = document.getElementsByClassName('paragrafo');
let s = '';
for (let e of ps) {
  s += e.innerHTML + '\n';
}
alert(s);

const div = document.getElementById('intro');
div.removeChild(div.children[div.children.length - 1]);

const h1s = document.getElementsByTagName('h1');
const sec2 = document.getElementById('sec2');
sec2.innerHTML = h1s[0].innerHTML;

const novo = document.createElement('pre');
novo.innerHTML = div.children[1].innerHTML;
sec2.appendChild(novo);


function cadastrar() {

  const div = document.createElement('div');
  document.body.appendChild(div);
  let s = '';
  for (let c of document.forms['formcad']) {
    if (c.type == 'radio' && !c.checked)
      continue;
    s += `<p><b>${c.name}</b>: ${c.value}</p>`;
  }
  div.innerHTML = s;
}

function criarJSON() {

  const div = document.createElement('div');
  document.body.appendChild(div);
  let s = '{';
  const cs = document.forms['formcad'];
  for (let i = 0; i < cs.length; i++) {
    if (cs[i].type == 'radio' && !cs[i].checked)
      continue;
    s += `"${cs[i].name}": "${cs[i].value}"`;
    s += i < cs.length - 1 ? ', ' : ' }';
  }
  div.innerHTML = s;
}
function ajustaSec2() {
  const sec2 = document.getElementById('sec2');
  const input1 = document.getElementById('input1');
  sec2.style.backgroundColor = input1.value;
}

function ajustaBordaSec2() {
  const sec2 = document.getElementById('sec2');
  sec2.style.border = document.getElementById('input2').value;
}

function escondeSec2() {
  const sec2 = document.getElementById('sec2');
  if (sec2.style.visibility == 'visible')
    sec2.style.visibility = 'hidden';
  else
    sec2.style.visibility = 'visible';
}
const v = ['A', 'L', 'X', '3'];

console.log(v);

const percorre = function (e, i) {
  console.log(`v[${i}] = ${e}`);
}

v.forEach(percorre);

const a = v.map(function (e) {
  return e + e;
});

console.log(a);

const b = v.filter(function (e) {
  return e >= 'L';
});

console.log(b);

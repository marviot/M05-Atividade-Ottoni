const pessoa = {
  nome: 'JOAO',
  idade: 20,
  endereco: {
    rua: 'RUA X',
    nro: '25'
  },
  fones: [
    '3299995555',
    '3299991111'
  ],
  veiculos: [
    {
      modelo: 'ONIX',
      ano: 2015
    },
    {
      modelo: 'HILUX',
      ano: 2020
    }
  ]
};

console.log(JSON.stringify(pessoa));


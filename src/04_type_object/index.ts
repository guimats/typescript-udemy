const objetoA: {
  readonly chaveA: string; // readonly faz com que o valor da chave não possa ser alterado
  chaveB: string;
  chaveC?: string; // pode ou não ser declarado (uso do '?')
  //   [key: string]: unknown; // dessa forma deixa o objeto aberto, podendo adicionar outros valores
} = {
  chaveA: 'A',
  chaveB: 'B',
};

// objetoA.chaveA = 'Outro valor';
objetoA.chaveB = 'Outro valor';
objetoA.chaveC = 'Novo valor C';
// objetoA.chaveD = 'Novo valor D';

console.log(objetoA);

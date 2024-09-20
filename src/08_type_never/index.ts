// never -> quando nunca será retornado nada da função (loop infinito, lança erro)
export function criaErro(): never {
  throw new Error('Erro qualquer');
}

criaErro();

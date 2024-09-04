// Array<T> or T[]
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenacaoString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

console.log(multiplicaArgs(1, 2, 3, 4));
console.log(concatenacaoString('a', 'b', 'c'));
console.log(toUpperCase('a', 'b', 'c'));

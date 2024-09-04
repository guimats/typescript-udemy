/* eslint-disable */
let nome: string = 'Luiz';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol')
// let big: bigint = 10n;

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b', 'c'];

// outra forma de tipar arrays
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings2: string[] = ['a', 'b', 'c'];

//Objetos -> ponto de interrogação '?' para deixar um atributo da classe como opcional
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
    nome: 'Luiz',
    idade: 30
};

// Funçoes
function soma(x: number, y: number): number {
    return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;

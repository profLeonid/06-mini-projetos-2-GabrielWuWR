'use strict'

function criarListaNumeros(quantidade) {
    let listaNumero = [];

    for (let i = 1; i <= quantidade; i++) {
        listaNumero.push(i);
    };

    return listaNumero;
};

function criarListaPares(quantidade) {
    let listaNumero = [];

    for (let i = 0; i <= quantidade; i ++) {
        listaNumero.push(i * 2);
    };

    return listaNumero;
};

function criarListaImpares(quantidade) {
    let listaNumero = [];

    for (let i = 1; i <= quantidade; i ++) {
        listaNumero.push(i * 2 - 1);
    };

    return listaNumero;
};

function criarListaMultiplos5(quantidade) {
    let listaNumero = [];

    for (let i = 1; i <= quantidade; i++) {
        let conta = i * 5;
        listaNumero.push(conta);
    };

    return listaNumero;
};

function criarListaPotencia2(quantidade) {
    let listaNumero = [];

    for (let i = 0; i < quantidade; i++) {
        let conta = 2 ** i;
        listaNumero.push(conta);
    };

    return listaNumero;
}

console.log(criarListaPotencia2(5))

function criarLinha(num, par, impar, mut5, potencia) {
    const tbody = document.getElementById('tbody');
    const tr = document.createElement('tr');

    const tdNum = document.createElement('td');
    tdNum.textContent = num;

    const tdPar = document.createElement('td');
    tdPar.textContent = par;

    const tdImpar = document.createElement('td');
    tdImpar.textContent = impar;

    const tdMut5 = document.createElement('td');
    tdMut5.textContent = mut5;

    const tdPotencia = document.createElement('td');
    tdPotencia.textContent = potencia;

    tr.replaceChildren(tdNum, tdPar, tdImpar, tdMut5, tdPotencia);
    tbody.appendChild(tr);
}

function handleClick() {
    const quantidade = Number(document.getElementById('quantidade').value);

    const listaNumeros = criarListaNumeros(quantidade);
    const listaPares = criarListaPares(quantidade);
    const listaImpares = criarListaImpares(quantidade);
    const listaMultiplos5 = criarListaMultiplos5(quantidade);
    const listaPotencia2 = criarListaPotencia2(quantidade);

    document.getElementById('tbody').replaceChildren();

    for (let i = 0; i < quantidade; i++) {
        criarLinha(listaNumeros[i], listaPares[i], listaImpares[i], listaMultiplos5[i], listaPotencia2[i]);
    };
}
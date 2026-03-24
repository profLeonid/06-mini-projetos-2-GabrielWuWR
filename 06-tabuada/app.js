'use strict';

function gerarListaNumeros(quantidade) {
    let listaNumero = [];
    if (quantidade < 0) {
        quantidade = quantidade * -1

        for (let i = 1; i <= 10; i++) {
            listaNumero.push(-i);
        };
    } else {
        for (let i = 1; i <= 10; i++) {
            listaNumero.push(i);
        };
    }
    return listaNumero;
};

function gerarTabuadaAdicao(quantidade) {
    let resposta = [];

    if (quantidade < 0) {
        quantidade = quantidade * -1;

        for (let i = 0; i < 10; i++) {
            resposta.push(-quantidade + i);
        };
    } else {
        for (let i = 0; i < 10; i++) {
            resposta.push(quantidade + i);
        };
    };

    return resposta;
};

function gerarTabuadaSubtracao(quantidade) {
    let resposta = [];

    if (quantidade < 0) {
        quantidade = quantidade * -1;

        for (let i = 1; i <= 10; i++) {
            resposta.push(-quantidade - i);
        }
    } else {
        for (let i = 1; i <= 10; i++) {
            resposta.push(quantidade - i);
        }
    };

    return resposta;
};

function gerarTabuadaMultiplicacao(quantidade) {
    let respota = [];

    if (quantidade < 0) {
        quantidade = quantidade * -1;

        for (let i = 1; i <= 10; i++) {
            respota.push(-quantidade * i);
        }
    } else {
        for (let i = 1; i <= 10; i++) {
            respota.push(quantidade * i);
        }
    }

    return respota;
};

function gerarTabuadaDivisao(quantidade) {
    let resposta = [];

    if (quantidade < 0) {
        quantidade = quantidade * -1;

        for (let i = 1; i <= 10; i++) {
            let conta = -quantidade / i;
            resposta.push(conta.toFixed(2));
        }
    } else {
        for (let i = 1; i <= 10; i++) {
            let conta = quantidade / i;
            resposta.push(conta.toFixed(2));
        }
    }

    return resposta;
};

function criarLinha(numero, numeroAdicao, numeroSubtracao, numeroMultiplicacao, numeroDivisao) {
    const tbody = document.getElementById('tbody');
    const tr = document.createElement('tr');

    const tdNum = document.createElement('td');
    tdNum.textContent = numero;

    const tdNumAdicao = document.createElement('td');
    tdNumAdicao.textContent = numeroAdicao;

    const tdNumSubtracao = document.createElement('td');
    tdNumSubtracao.textContent = numeroSubtracao;

    const tdNumMultiplicacao = document.createElement('td');
    tdNumMultiplicacao.textContent = numeroMultiplicacao;

    const tdNumDivisao = document.createElement('td');
    tdNumDivisao.textContent = numeroDivisao;

    tr.replaceChildren(tdNum, tdNumAdicao, tdNumSubtracao, tdNumMultiplicacao, tdNumDivisao);
    tbody.appendChild(tr);
};

function handleClick() {
    const quantidade = Number(document.getElementById('quantidade').value);

    const listaNumeros = gerarListaNumeros(quantidade);
    const listaTabuadaAdicao = gerarTabuadaAdicao(quantidade);
    const listaTabuadaSubtracao = gerarTabuadaSubtracao(quantidade);
    const listaTabuadaMultiplicacao = gerarTabuadaMultiplicacao(quantidade);
    const listaTabuadaDivisao = gerarTabuadaDivisao(quantidade);

    document.getElementById('tbody').replaceChildren();

    if (quantidade < 0) {
        for (let i = -quantidade; i > -10; i--) {
            let indice = i * -1;
            criarLinha(listaNumeros[indice], listaTabuadaAdicao[indice], listaTabuadaSubtracao[indice], listaTabuadaMultiplicacao[indice], listaTabuadaDivisao[indice]);
        }
    } else {
        for (let i = 0; i < 10; i++) {
            criarLinha(listaNumeros[i], listaTabuadaAdicao[i], listaTabuadaSubtracao[i], listaTabuadaMultiplicacao[i], listaTabuadaDivisao[i]);
        }
    }
}
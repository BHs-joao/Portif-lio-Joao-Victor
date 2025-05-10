
let display = document.getElementById('display');

function adicionar(valor) {
    display.value += valor;
}

function limpar() {
    display.value = '';
}

function resultado() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Erro';
    }
}

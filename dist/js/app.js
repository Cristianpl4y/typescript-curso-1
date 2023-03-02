import { NegociacaoController } from './controllers/negociacao-controller.js';
const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
const btnImporta = document.querySelector('#botao-importa');
if (btnImporta) {
    btnImporta.addEventListener('click', () => {
        controller.importarDados();
    });
}

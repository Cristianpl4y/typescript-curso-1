export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    // Renderiza e atualiza o template no elemento que pego pelo constructor
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}

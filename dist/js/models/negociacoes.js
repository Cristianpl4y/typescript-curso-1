export class Negociacoes {
    constructor() {
        // Exemplo de Generics
        this.negociacoes = [];
    }
    add(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}

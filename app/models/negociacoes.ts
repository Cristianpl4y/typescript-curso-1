import { Negociacao } from './negociacao';
export class Negociacoes {

    // Exemplo de Generics
    private negociacoes: Negociacao[] = []

    add(negociacao: Negociacao){
        this.negociacoes.push(negociacao)
    }

    lista(): readonly Negociacao[] {
        return this.negociacoes
    }

}
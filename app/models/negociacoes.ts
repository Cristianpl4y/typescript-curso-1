import { Negociacao } from './negociacao';
export class Negociacoes {

    // Exemplo de Generics
    private negociacoes: Array<Negociacao> = []

    add(negociacao: Negociacao){
        this.negociacoes.push(negociacao)
    }

    lista(): ReadonlyArray<Negociacao>{
        return this.negociacoes
    }

}
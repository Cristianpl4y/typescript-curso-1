import { Negociacao } from './negociacao';
export class Negociacoes {

    // Exemplo de Generics
    private negociacoes: Negociacao[] = []

    public add(negociacao: Negociacao){
        this.negociacoes.push(negociacao)
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes
    }

}
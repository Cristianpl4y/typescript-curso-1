import { Negociacao } from "../models/negociacao.js"

export class NegociacoesService {


    private urlApi = 'http://localhost:8080/dados'


    public async obterNegociacoes(): Promise<Negociacao[]> {
        return fetch(this.urlApi).then(res => res.json()) // Converti para json
                .then((dados: NegociacoesDoDia[]) => {
                    // pego os dados de retorno da api e converto para um array de negociações
                    return dados.map(dadoApi => {
                        return new Negociacao(new Date(), dadoApi.vezes , dadoApi.montante)
                    })
                })
    }

}
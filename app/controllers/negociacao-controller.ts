import { DiasDaSemana } from './../enums/dias-da-semana.js';
import { MensagemView } from './../views/mensagem-view.js';
import { NegociacoesView } from './../views/negociacoes-view.js';
import { Negociacao } from './../models/negociacao.js';
import { Negociacoes } from './../models/negociacoes.js';
import { NegociacoesService } from '../services/negociacoes-service.js';
export class NegociacaoController {
    private inputData: HTMLInputElement
    private inputQuantidade:  HTMLInputElement 
    private inputValor:  HTMLInputElement
    private negociacoes = new Negociacoes()
    private negociacoesView = new NegociacoesView('#negociacoesView')
    private mensagemView = new MensagemView('#mensagemView')
    private negociacoesService = new NegociacoesService()

    constructor(){
        this.inputData = document.querySelector('#data') as HTMLInputElement // Ex de um casting explícito ( Eu estou forçando a mudança do tipo )
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement
        this.inputValor = document.querySelector('#valor') as HTMLInputElement
        this.negociacoesView.update(this.negociacoes) 
    }

    public adiciona(): void {
        // Ex de uso de método estático
        const negociacao =  Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        )

        // Aceitando apenas dias úteis
        if(!this.diaUtil(negociacao.date)){
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas!')
            return
        }

        this.negociacoes.add(negociacao)
        this.limparFormulario()
        this.atualizaView()
        
        
    }


    public async importarDados(): Promise<void> {
        // Consumindo uma API
       await this.negociacoesService.obterNegociacoes()
        .then(arraydenegociacoes => {
            // pego cada negociacao e adiciono 
            for(let negociacao of arraydenegociacoes){
                this.negociacoes.add(negociacao)
            }
            this.negociacoesView.update(this.negociacoes)
            this.mensagemView.update('Importação dos dados adicionada com sucesso!')
        })
    }


    private diaUtil(date: Date): boolean {
        return date.getDay() > DiasDaSemana.DOMINGO && date.getDate() < DiasDaSemana.SABADO
    }

    

    private limparFormulario(): void {

        this.inputData.value = ''
        this.inputQuantidade.value = ''
        this.inputValor.value = ''

        this.inputData.focus()
        this.inputQuantidade.focus()
        this.inputValor.focus()
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes)
        this.mensagemView.update('Negociação adicionada com sucesso!')

    }
}
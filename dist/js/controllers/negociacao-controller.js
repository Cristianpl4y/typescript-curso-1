var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { DiasDaSemana } from './../enums/dias-da-semana.js';
import { MensagemView } from './../views/mensagem-view.js';
import { NegociacoesView } from './../views/negociacoes-view.js';
import { Negociacao } from './../models/negociacao.js';
import { Negociacoes } from './../models/negociacoes.js';
import { NegociacoesService } from '../services/negociacoes-service.js';
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.negociacoesService = new NegociacoesService();
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.diaUtil(negociacao.date)) {
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas!');
            return;
        }
        this.negociacoes.add(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }
    importarDados() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.negociacoesService.obterNegociacoes()
                .then(arraydenegociacoes => {
                for (let negociacao of arraydenegociacoes) {
                    this.negociacoes.add(negociacao);
                }
                this.negociacoesView.update(this.negociacoes);
                this.mensagemView.update('Importação dos dados adicionada com sucesso!');
            });
        });
    }
    diaUtil(date) {
        return date.getDay() > DiasDaSemana.DOMINGO && date.getDate() < DiasDaSemana.SABADO;
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
        this.inputQuantidade.focus();
        this.inputValor.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }
}

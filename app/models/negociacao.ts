export class Negociacao {
  
    // Declarando no próprio construtor.
    constructor(
       private _data: Date,
       public readonly quantidade: number,
       public readonly valor: number
    ) {}

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get date(): Date {
        // Usando programação defensiva
        const data = new Date(this._data.getTime())
        return data;
    }

    // Todo método estático eu posso chamar direto da classe
    // Ex: Negociacao.criaDe();
    public static criaDe(dateString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g
        const date = new Date(dateString.replace(exp, ',')) 
        const quantidade = parseInt(quantidadeString)
        const valor = parseFloat(valorString)
        return new Negociacao(date, quantidade, valor);
    }
}
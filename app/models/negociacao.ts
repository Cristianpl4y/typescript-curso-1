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
}
export class Negociacao {
  
    // Declarando no próprio construtor.
    constructor(
       private _data: Date,
       private _quantidade: number,
       private _valor: number
    ) {}

    get volume(): number {
        return this._quantidade * this._valor;
    }

    get date(): Date {
        // Usando programação defensiva
        const data = new Date(this._data.getTime())
        return data;
    }
}
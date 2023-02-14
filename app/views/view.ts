export abstract class View<T> {
    
    protected elemento: HTMLElement

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor)
    }

    // Renderiza e atualiza o template no elemento que pego pelo constructor
    public update(model: T): void {
        const template = this.template(model)
        this.elemento.innerHTML = template
    }


    protected abstract template(model: T): string
}
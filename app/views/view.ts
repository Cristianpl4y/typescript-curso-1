export abstract class View<T> {
    
    protected elemento: HTMLElement
    private escapar = true // sempre escapar

    constructor(seletor: string, escapar?: boolean){
        this.elemento = document.querySelector(seletor)
        if(escapar){
            this.escapar = escapar
        }
    }

    // Renderiza e atualiza o template no elemento que pego pelo constructor
    public update(model: T): void {
        let template = this.template(model)

        // Protegendo o template
        if(this.escapar){
            const expRemoveXSS = /<script>[\s\S]*?<\/script>/ 
            template = template.replace(expRemoveXSS, '')
        }

        this.elemento.innerHTML = template
    }


    protected abstract template(model: T): string
}
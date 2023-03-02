export class View {
    constructor(seletor, escapar) {
        this.escapar = true;
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique.`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            const expRemoveXSS = /<script>[\s\S]*?<\/script>/;
            template = template.replace(expRemoveXSS, '');
        }
        this.elemento.innerHTML = template;
    }
}

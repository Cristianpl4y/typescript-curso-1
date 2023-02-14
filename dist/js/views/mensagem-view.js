import { View } from './view.js';
export class MensagemView extends View {
    template(model) {
        return `
        <p class="alert alert-success">${model}</p>
        `;
    }
}

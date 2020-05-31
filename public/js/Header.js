import { Component } from './component.js';

export class Header extends Component {
    render({ title, description }) {
        return `
            <div>
             <header class="header">
                <h1 class="logo" alt="${title}">${title}</h1>
             </header>

             <h2 class="description" title="${description}">${description}</h2>
            </div>
        `;
    }
}

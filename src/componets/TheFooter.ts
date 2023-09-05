import { Component } from "../core/jimin";
import aboutStore from'../store/about'

export default class TheFooter extends Component {
    constructor() {
        super({
            tagName : 'footer',
        })
    }
    render() {
        const { github } = aboutStore.state
        this.el.innerHTML = `
            <div>
                <a href="${github}">GitHub Repository</a>
            </div>
            <div>
                <a href="https://github.com/moana16">${new Date().getFullYear()} MOANA</a>
            </div>
        `

    }
}
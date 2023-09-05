import { Component } from "../core/jimin";

interface State {
    [key : string] : unknown
    menus : {
        name : string
        url : string
    }[]
}

export default class TheHeader extends Component {
    public state!: State //명확한 할당 단언
    constructor() {
        super({
            tagName : 'header',
            state : {
                menus : [
                    {
                        name : 'Search',
                        url : '#/'
                    },
                    {
                        name : 'Movie',
                        url : '#/movie?id=tt4520988'
                    },
                    {
                        name : 'About',
                        url : '#/about'
                    }
                ]
            }
        })
        window.addEventListener('popstate', () => {
            this.render()
        })
    }
    render() {
        this.el.innerHTML = `
            <a
                href="#/"
                class="logo">
                <span>OMDbAPI</span>.COM
            </a>
            <nav>
                <ul>
                    ${this.state.menus.map(menu => {
                        const href = menu.url.split("?")[0]
                        const hash = location.hash.split('?')[0]
                        const isActive = href == hash
                        return `
                            <li>
                                <a 
                                class="${isActive ? 'active' : ''}"
                                href="${menu.url}">${menu.name}</a>
                            </li>
                        `

                    }).join('')}
                </ul>
            </nav>
            <a href="#/about" class="user">
                <img src="https://avatars.githubusercontent.com/u/65649035?s=96&v=4" alt="User" />
            </a>
            
        `

    }
}
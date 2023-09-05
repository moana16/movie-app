import { Component } from "../core/jimin";
import movieStore, { searchMovies} from "../store/movie";

export default class MovieListMore extends Component {
    constructor() {
        super({
            tagName : 'button',
        })
        movieStore.subscribe('pageMax',() => {
            const { page, pageMax } =  movieStore.state
            pageMax > page 
                ? this.el.classList.remove('hide') 
                : this.el.classList.add('hide')
        })
        
    }
    render() {
        this.el.classList.add('btn', 'view-more','hide')
        this.el.innerText = 'View more..'

        this.el.addEventListener('click', async () => {
            this.el.classList.add('hide')
            const res = await searchMovies(movieStore.state.page + 1)

        })
    }
}
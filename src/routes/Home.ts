import Headline from "../componets/Headline";
import MovieList from "../componets/MovieList";
import MovieListMore from "../componets/MovieListMore";
import Search from "../componets/Search";
import { Component } from "../core/jimin";

export default class Home extends Component {
    render() {
        const headline = new Headline().el
        const search = new Search().el
        const movieList = new MovieList().el
        const movieListMore = new MovieListMore().el
        this.el.classList.add('container');
        this.el.append(
            headline,
            search,
            movieList,
            movieListMore
        )
    }
}
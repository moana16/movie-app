import { createRouter } from "../core/jimin";
import About from "./About";
import Home from './Home';
import Movie from './Movie';
import NotFound from "./NotFound";

export default createRouter([
    {path : '#/', component : Home},
    {path : '#/movie', component : Movie},
    {path : '#/about', component : About},
    {path : '.*', component : NotFound} //모든 페이지와 모두 일치할수 있는 정규표현식
])

import { Store } from "../core/jimin"

interface State {
    photo : string
    name : string
    email : string
    blog : string
    github : string


}
export default new Store<State>({
    photo : "https://avatars.githubusercontent.com/u/65649035?s=96&v=4",
    name : 'MOANA / KimJiMin',
    email : 'moana16@naver.com',
    blog : 'https://chichi-dev.tistory.com/',
    github : 'https://github.com/moana16',

})
import React,{Component} from 'react';
import Jokes from "./jokesStore";
class JokeComponent extends Component{
    render(){
        return (
        <div>
        <h1>Jokes</h1>
        <p>{Jokes._jokes}</p>
        </div>
        );
    }
}
export default JokeComponent
import React,{Component} from 'react';
import carStore from "./carStore";
class carComponent extends Component{
    render(){
        return (
        <div>
        <h1>Data</h1>
        <p>{data._data}</p>
        </div>
        );
    }
}
export default carComponent
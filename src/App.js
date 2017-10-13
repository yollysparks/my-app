import React,{Component} from 'react';
import upper,{text1,text2, text3} from "./dataStore1";
import person,{firstname,lastname,gender,email,phone} from "./dataStore2";

class App extends Component{
    render(){
      return  (
        <div >
        <p>{upper("please uppercase me")}</p>        
        <p>{text1}</p>
        <p>{text2}</p>
        <p>{text3}</p>  
        <p>{firstname},{email}</p>
        
        </div>
      );
         
   }
}

export default App

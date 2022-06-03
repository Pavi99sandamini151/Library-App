import React , {Component} from "react";
import picture from './images/library.jpg';



export default class Image extends Component{
    render(){
      return(
          <div>
            <img class="image" src={picture} />

          </div>
              
      )
    }
}
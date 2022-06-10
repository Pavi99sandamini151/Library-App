import React , {Component} from "react";
import Footer from "./Footer";
import picture from './images/library.jpg';



export default class Image extends Component{
    render(){
      return(
          <div>
            <img class="image" src={picture} />
            <div class="text-block">
                <h4>Nature</h4>
                <p>What a beautiful sunrise</p>
            </div>
            <Footer></Footer>  
          </div>
            
      )
    }
}
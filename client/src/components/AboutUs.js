import React , {Component} from "react";
import photo from './images/about us1.jpg';


export default class AboutUs extends Component{
    render(){
      return(
          <div class="about-us-container">
            <div className="left">
              <img className="photo" src={photo}></img>
            </div>
            <div className="right">
               <h1 class="heading">About Us</h1>
               <p class="paragraph">loream loream</p>
            </div>
          </div>
      )
    }
}
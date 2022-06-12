import React , {Component} from "react";
import photo from './images/about us1.jpg';
import Footer from "./Footer";


export default class AboutUs extends Component{
    render(){
      return(
        <div>
          <div class="about-us-container">
            <div className="left">
              <img className="photo" src={photo}></img>
            </div>
            <div className="right">
               <h1 class="heading">About Us</h1>
               <p class="paragraph">loream loream</p>
                <div className="card-container">
                  <div class="card">
                      <div class="card-body">
                      <a href="#">This is some text within a card body.</a>
                    </div>
                  </div>
               </div>
            </div>

            
          </div>
          <Footer></Footer> 
        </div>  
      )
    }
}
import React , {Component} from "react";
import photo from './images/about us1.jpg';
import pic from './images/boos.png';
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
               
                <div className="card-container">
                  <div class="card">
                      <div class="card-body">
                      <a class="card-link" href="#">About the Library</a>
                      <div className="image-card"><img className="book-pic" src={pic}></img></div>
                      
                    </div>
                  </div>
                  <div class="card">
                      <div class="card-body">
                      <a class="card-link" href="#">News</a>
                      <div className="image-card"><img className="book-pic" src={pic}></img></div>
                    </div>
                  </div>
                  <div class="card">
                      <div class="card-body">
                      <a class="card-link" href="#">Reports</a>
                      <div className="image-card"><img className="book-pic" src={pic}></img></div>
                    </div>
                  </div>
                  <div class="card">
                      <div class="card-body">
                      <a class="card-link" href="#">Give to the library</a>
                      <div className="image-card"><img className="book-pic" src={pic}></img></div>
                    </div>
                  </div>
                  <div class="card">
                      <div class="card-body">
                      <a class="card-link" href="#">Terms of use</a>
                      <div className="image-card"><img className="book-pic" src={pic}></img></div>
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
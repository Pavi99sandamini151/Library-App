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
                      <a  href="#" class="fa-solid fa-books">About the Library </a>
                      <div className="image-card"></div>
                      <i class="fa-solid fa-books"></i>
                    </div>
                  </div>
                  <div class="card">
                      <div class="card-body">
                      <a class="fa-solid fa-books" href="#">News</a>
                      
                    </div>
                  </div>
                  <div class="card">
                      <div class="card-body">
                      <a class="fa-solid fa-books" href="#">Reports</a>
                      
                    </div>
                  </div>
                  <div class="card">
                      <div class="card-body">
                      <a class="fa-solid fa-books" href="#">Give to the library</a>
                      
                    </div>
                  </div>
                  <div class="card">
                      <div class="card-body">
                      <a class="fa-solid fa-books" href="#">Terms of use</a>
                      
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
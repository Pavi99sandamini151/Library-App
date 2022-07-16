import React , {Component} from "react";
import Footer from "./Footer";




export default class Authorlist extends Component{
    render(){
      return(
            <div>
            <div class="book-container">
            <h1 class="heading">Book List</h1>

            <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                
                <th scope="col">Book Name</th>
                <th scope="col">Author Name</th>
                <th scope="col">Year</th>
                

              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
          
            </div>
            <button className="btn btn-success"><a href="/book/add" style={{textDecoration:'none' , color:'white' }}>Insert Author</a></button>
            <Footer></Footer>
          </div>
           
              
      )
    }
}
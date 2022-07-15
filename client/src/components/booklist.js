import React , {Component} from "react";
import Footer from "./Footer";
import axios from 'axios';




export default class Booklist extends Component{

  constructor(props){
    super(props);

    this.state={
        post:[]
    };
}

componentDidMount(){
  this.retrieveBooks();
}
retrieveBooks(){
  axios.get("http://localhost:8000/booklist").then(res=>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });
    }
    console.log(this.state.posts);
  });
}

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
             <td>pavi</td>
             <td>prasa</td>
            </tbody>
          </table>
          
            </div>
           
            <Footer></Footer>
          </div>
              
      )
    }
}
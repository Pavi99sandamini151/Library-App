import React , {Component} from "react";
import Footer from "./Footer";

export default class Createauthor extends Component{
    render(){
      return(
          <div>
            <div>
            <h1 class="heading">Create Author</h1>
            <form>
                <div class="form-group">
                    <label for="Authorname">Author Name</label>
                    <input type="text" class="form-control" id="author" aria-describedby="authorname" placeholder="Enter author name"></input>
                </div>
                <div class="form-group">
                    <label for="birthyear">Birth Year</label>
                    <input type="text" class="form-control" id="year" placeholder="Enter birth year"></input>
                </div>
                <div class="form-group">
                    <label for="address">Address</label>
                    <input type="text" class="form-control" id="address" placeholder="Enter Address"></input>
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <input type="text" class="form-control" id="content" placeholder="Enter description"></input>
                </div>
                <button type="submit" class="btn btn-success">Submit</button>
                </form>
            </div>
            
            <Footer></Footer>
          </div>
              
      )
    }
}
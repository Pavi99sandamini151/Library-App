import React , {Component} from "react";
import Footer from "./Footer";

export default class Createbook extends Component{
    render(){
      return(
          <div>
            <div>
            <h1 class="heading">Create Book</h1>
            <form>
                <div class="form-group">
                    <label for="Authorname">Book Name</label>
                    <input type="text" class="form-control" id="author" aria-describedby="authorname" placeholder="Enter book name"></input>
                </div>
                <div class="form-group">
                    <label for="birthyear">Author Name</label>
                    <input type="text" class="form-control" id="year" placeholder="Enter author name"></input>
                </div>
                <div class="form-group">
                    <label for="address">Published Year</label>
                    <input type="text" class="form-control" id="address" placeholder="Enter published year"></input>
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <input type="text" class="form-control" id="content" placeholder="Enter description"></input>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            
            <Footer></Footer>
          </div>
              
      )
    }
}
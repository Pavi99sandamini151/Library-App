import React , {Component} from "react";

export default class NavBar extends Component{
    render(){
      return(
            
                <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'#A3672B'}}>
                <div class="container-fluid">
               
                <button class="navbar-toggler" 
                type="button" 
                data-toggle="collapse" data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item ">
                        <a class="nav-link" aria-current="page" href="/">Library Management System</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link" aria-current="page" href="/">About Us</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link" aria-current="page" href="/">Book List</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link" aria-current="page" href="/">Author List</a>
                    </li>
                    </ul>
                </div>
                </div>
                </nav>
                            
            )
            }
}
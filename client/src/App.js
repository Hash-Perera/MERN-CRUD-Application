import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component{

  constructor(props){
    super(props);
    this.retrivePosts = this.retrivePosts.bind(this)

    this.state = {
      posts:[]
    };
  }

  //componentDidMount(){this.retrivePosts};

  //create method
  retrivePosts(){
    axios.get("http://localhost:8000/posts").then( res=>{
      if( res.data.success){
        this.setState({
          posts:res.data.existingPosts
        })

        console.log(this.state.posts);
        console.log("fuck");
      }
    })
  }

    
  
  render(){
      return(
        <div>
          {this.state.posts.map(posts =>(
            <div>
              <p>{posts.topic}</p>
              <p>{posts.description}</p>
              <p>{posts.postCategory}</p>
            </div>
          ))}
        </div>
      )
    }

}


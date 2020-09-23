import React, { Component } from 'react';
import './App.css';

class App extends Component<{},any> { 
  constructor(props) {
    super(props);
 
    this.state = {
      data1: [],
      loading: 0,
      comment_value: '',
      comment_search: '',
      search_flag: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }

  forceUpdateHandler(){
    this.forceUpdate();
  };

  componentDidMount(){
    this.fetchComments(0);
  }

  componentDidUpdate(prevProps, prevState) {
    // One possible fix...
    console.log(prevState.loading);
    console.log(this.state.loading);
    if (this.state.loading == 2 && (prevState.loading == 2 || prevState.loading == 1 || prevState.loading == 0)) {
      this.fetchComments(1);
      this.setState({
        loading: 4
      })
    }
  }

  private fetchComments(search_flag){  
    if(this.state.comment_search == ''){
      console.log("Normal");
      fetch('/api/comments', {
        method: 'get'
      }).then(response => response.json())
      .then(response => {
        this.setState({
          data1: response,
          loading: 0
        })
      })
    }
    else{  
      console.log("Search");
      let apier = '/api/comments?q=' + this.state.comment_search;
      fetch(apier, {
        method: 'get'
      }).then(response => response.json())
      .then(response => {
        console.log(response)
        if(search_flag == 1){
          this.setState({
            data1: response
          })
        }
        else{
          this.setState({
            data1: response,
            loading: 2
          })
        }
      })
    }
  }
    // .then(data => this.setState({ data1: data.data1 }));
    //}

  private deleteCommentFeed(id){
    this.setState({
      loading:1
    })
    let apier = '/api/comments/' + id.toString();
    fetch(apier, {
      method: 'delete'
    }).then(res=>{
      this.setState({
        loading:2
      })
    });
  }

  private addCommentFeed(){
    this.setState({
      loading:1
    }, () => {
      if(this.state.comment_value != ''){
        let qrstr = {text: this.state.comment_value};
        fetch('/api/comments/', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(qrstr)
        }).then(res =>{
          this.setState({
            loading:2,
            comment_value: ''
          })
        });
      }
    })
    
  }

  private resetCommentFeed(){
    this.setState({
      loading:0
    }, () => {
      fetch('/api/reset-comments', {
        method: 'post'
      }).then(res=>{
        this.fetchComments(0);
      });
    });
    
  }

  handleChange(event) {    this.setState({comment_value: event.target.value});  }
  handleChange1(event) {   
    this.setState({
      loading:1
    })
     this.setState({comment_search: event.target.value});  
    this.setState({
      loading:2
    })
  }

  render() { 
    let comments_1 = this.state.data1.map((values, index) => {
      return(
        <div className="row" key={index}>
          <div className="col-md-6">
            <button onClick={this.deleteCommentFeed.bind(this, values.id)}>X</button> 
          
            {values.text}
          </div>
          
        </div>
      )
    })
    return (
      <div className="App">
        <div className="row">
          <h1>Comment Feed</h1>
        </div>
        <div className="row">
          <div className="col-md-6">
            Search Box: &nbsp;
            <input type="text" value={this.state.comment_search} onChange={this.handleChange1}></input>
          </div>
        </div>
        <br/>
        <div className="row">
          <button onClick={this.resetCommentFeed.bind(this)}>Reset comment feed</button>
        </div>
        <br/>
        {comments_1}
        <br/>
        <div className="row">
          <div className="col-md-6">
            <input type="text" value={this.state.comment_value} onChange={this.handleChange}></input>
          
            <button onClick={this.addCommentFeed.bind(this)}>Reply</button>
          </div>
        </div>
      </div>
    );
    }
}

export default App;

import './App.css'
// import data from './quotes.json';
import React from 'react'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import {Generator} from './jquery'
async function populate() {
  const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroes = await response.json();
  return superHeroes
}
class App extends React.Component{
  constructor(props){
    super(props)
    let index = Math.floor(Math.random() * 100);
    let quote;
    let author;
    this.state = {
      quote:data[index]["quote"],
    author:data[index]["author"],
    link:"https://twitter.com/intent/tweet?text="+"\""+data[index]["quote"]+"\" "+data[index]["author"]
    }
    this.Generator = this.Generator.bind(this)
  }
  Generator(){
    console.log("works");
    let index = Math.floor(Math.random() * 100);
    let quote;
    let author;
    console.log("clicked");
    let data = populate()
  this.setState ({
    quote:data[index]["quote"],
    author:data[index]["author"],
    link:"https://twitter.com/intent/tweet?text="+"\""+data[index]["quote"]+"\" "+data[index]["author"]
    
  })
  console.log(data[index]["quote"] + " by " + data[index]["auther"])
  console.log(this.state.link)
} 
  
    render(){
    return (
      <div className="outer">
        <div className="container-fluid">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
<div className="heading">
    <h1 className="text-center">Random Quote Generator</h1>
</div>
<div className="box">
    <div className="quote-box " id = "quote-box">
        <h3 className="text-left"><i className="fa-solid fa-quote-left"></i></h3>
        <h4 className="quote text-center" id="text">{this.state.quote}</h4>
        <h3 className="text-right"><i className="fa-solid fa-quote-right"></i></h3>
        
        <h3 className="text-right" id="author">{this.state.author}</h3>
    </div>
    
</div>
<div className='actions center-block'>
  
  <div className="generator">
      <button className="btn btn-primary generate" id="new-quote" onClick={this.Generator} >New Quote</button>
      <a className = "twitter-share-button" id="tweet-quote" href={this.state.link}><button className="btn btn-primary generate tweet">Tweet</button></a>
  </div>
</div>
</div>
</div>
    );}
  }
export default App
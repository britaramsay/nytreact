import React, { Component } from "react";
import '../App.css';
import API from '../utils/API.js'
const axios = require('axios')

class Saved extends Component {
    constructor() {
      super()
  
      this.state = {
        results: [],
        htmlList: ''
      }
    }

    componentDidMount = () => {
      API.getArticles()
        .then(res => {
          console.log(res.data)
          this.setState({ results: res.data })
          // console.log(this.state.results)
          this.resultList()
        })
        .catch(err => console.log(err))

    }
  
    resultList = () => {
      const listItems = this.state.results.map((item) => {
        return (
          <li key={item.url}>
            <a href={item.url}><h4 className='headline'>{item.title}</h4></a>
            <p>{item.date}</p>
          </li>
        )
      });
      this.setState({htmlList: <ul>{listItems}</ul>})
    }

    render () {  
      return(
        <div className="container container-fluid">
          <div className="row">
            {this.state.htmlList}
          </div>
        </div>
      )
    }
}

export default Saved; 
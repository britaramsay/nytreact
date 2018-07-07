import React, { Component } from "react";
import '../App.css';
import TextArea from './TextArea.js';
import API from '../utils/API.js'
const axios = require('axios')

class Home extends Component {
  constructor() {
    super()

    this.state = {
      query: '',
      results: [],
      htmlList: ''
    }
  }

  handleInputChange = (e) => {
    this.setState({ query: e.target.value })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
    queryURL += process.env.REACT_APP_NYT_API_KEY;
    queryURL += "&q=" + this.state.query;
    
    console.log(queryURL)

    axios.get(queryURL)
    .then((response) => {
      // handle success
      var res = response.data.response.docs

      // console.log(res);
      const results = []

      res.forEach(doc => {
        const result = {
          date: doc.pub_date,
          headline: doc.headline.main,
          url: doc.web_url
        }
        results.push(result)
       

      })
      this.setState({ results: results })

      this.resultList()
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }

  onItemClickHandler = (e) => {
    var newArticle = {
      headline: e.target.dataset.headline,
      url: e.target.dataset.url,
      date: e.target.dataset.date
    }
    this.saveArticle(newArticle)
  }

  resultList = () => {
    const listItems = this.state.results.map((item) => {
      return (
        <li key={item.url}>
          <i className="far fa-save" data-headline={item.headline} data-date={item.date} data-url={item.url} onClick={this.onItemClickHandler}></i>
          <a href={item.url}><h4 className='headline'>{item.headline}</h4></a>
          <p>{item.date}</p>
        </li>
      )
    });
    this.setState({htmlList: <ul>{listItems}</ul>})
  }

  saveArticle = (item) => {
    console.log(item)
    API.saveArticle({
      title: item.headline,
      date: item.date,
      url: item.url
    })
      .then(res => alert('article saved.'))
      .catch(err => console.log(err))
  }

  render () {  
    return(
      <div className="container container-fluid">
        <div className="row">
          <form>
            <TextArea
              onChange={this.handleInputChange}
              name="query"
              placeholder="Search for Articles"
            />
            <button className="btn btn-success" onClick={this.handleFormSubmit}>
              Search
            </button>
          </form>
          {/* {this.resultList} */}
          {this.state.htmlList}
        </div>
      </div>
    )
  }
}

export default Home; 
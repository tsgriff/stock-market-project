import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/header';
import Analytics from "../Analytics/analytics";
import Algorithm from "../Algorithm/algorithm";
import './home.css';
import loader from './Wedges.svg';
import { API_KEY } from '../../config.js'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchinput: '',
      info: null,
      past: null,
      yearlySMA: null,
      rtSMA: null,
      doneFetching: false
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.search = this.search.bind(this);
  }

  handleSearch(event) {
    this.setState({
      searchinput: event.target.value
    })
  }

  async search(event) {
    event.preventDefault();

    if (this.state.searchinput) {
      await axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${this.state.searchinput}&apikey=${API_KEY}`)
        .then(res => {
          this.setState({
            info: res.data["Global Quote"]
          })
        })

      await axios.get(`http://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${this.state.searchinput}&apikey=${API_KEY}`)
        .then(res => {
          this.setState({
            past: res.data["Monthly Time Series"]
          })
        })

      await axios.get(`http://www.alphavantage.co/query?function=SMA&symbol=${this.state.searchinput}&interval=monthly&time_period=10&series_type=close&apikey=${API_KEY}`)
        .then(res => {
          this.setState({
            yearlySMA: res.data["Technical Analysis: SMA"]
          })
        })

      await axios.get(`http://www.alphavantage.co/query?function=SMA&symbol=${this.state.searchinput}&interval=1min&time_period=200&series_type=close&apikey=${API_KEY}`)
        .then(res => {
          this.setState({
            rtSMA: res.data["Technical Analysis: SMA"]
          })
        })

      this.setState({
        doneFetching: true
      })
    }

    else {
      alert('Please enter a company symbol');
    }
  }

  render() {

    return (
      <section className="main-contain">
        <div className="landing-page">
          <Header />
          <section className="search-input-contain">
            <div className="landing-background">
              <div className="search-input">
                <h4 className="page-header">Search for a Company</h4>
                <input
                  value={this.state.searchinput}
                  onChange={this.handleSearch}
                  placeholder="Enter company symbol" />
                <button className="search-button" onClick={this.search}>Search</button>
              </div>
            </div>
          </section>
        </div>
        { this.state.doneFetching ?
          <div>
            <div className="analytics-contain">
              <Analytics {...this.state} />
            </div>
            <div className="algorithm-contain">
              <Algorithm {...this.state} />
            </div>
          </div>
          :
          null
        }
      </section>
    );
  }
};

export default Home;

import React, { Component } from 'react';
import Header from '../Header/header';
import SearchInput from '../search-input';
import Analytics from "../Analytics/analytics";
import './home.css';

class Home extends Component {


    render() {


    return (
        <section>
          <div className="landing-page">
            <Header />
            <SearchInput />
          </div>
          <div className="analytics-contain">
            <Analytics />
          </div>
        </section>
      );
    }
  };


export default Home;

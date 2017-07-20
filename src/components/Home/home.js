import React, { Component } from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import SearchInput from '../search-input';
import Analytics from "../Analytics/analytics";
import Algorithm from "../Algorithm/algorithm";
import './home.css';

class Home extends Component {


    render() {


    return (
        <section className="main-contain">
          <div className="landing-page">
            <Header />
            <SearchInput />
          </div>
          <div className="analytics-contain">
            <Analytics />
          </div>
          <div className="algorithm-contain">
            <Algorithm />
          </div>
          <Footer />
        </section>
      );
    }
  };


export default Home;

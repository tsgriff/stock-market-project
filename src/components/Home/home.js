import React, { Component } from 'react';
import Header from '../Header/header';
import SearchInput from '../search-input';
import './home.css';

class Home extends Component {


    render() {



    return (
        <section>
          <div className="landing-page">
            <Header />
            <SearchInput />
          </div>
        </section>
      );
    }
  };


export default Home;

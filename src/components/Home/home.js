import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/header';
import SearchInput from '../search-input';
import Analytics from "../Analytics/analytics";
import Algorithm from "../Algorithm/algorithm";
import { getPastYear } from '../../ducks/past-year';
import './home.css';
import loader from './Wedges.svg';


class Home extends Component {


    render() {

      if (this.props.info["01. Symbol"] !== undefined) {
          var analytics = (<Analytics />)
          var algorithm = (<Algorithm />)
      }

      if (this.props.loading && this.props.secondLoading) {
        return (<div className="loading-screen"><h1>Loading</h1><img src={loader} alt="" /></div>)
      }

else {

    return (
        <section className="main-contain">
          <div className="landing-page">
            <Header />
            <SearchInput />
          </div>
          <div className="analytics-contain">
            {analytics}
          </div>
          <div className="algorithm-contain">
            {algorithm}
          </div>
        </section>
      );
    }
  }
  };


  function mapStateToProps(state) {
    return {
      info: state.stockreducer.stockData,
      loading: state.SMAReducer.loading,
      secondLoading: state.yearReducer.loading
    }
  }

  export default connect(mapStateToProps, {getPastYear})(Home);

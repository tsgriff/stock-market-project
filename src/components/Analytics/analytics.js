import React, { Component } from 'react';
import { getPastYear } from '../../ducks/past-year';
import { getSimpleMovingAverage } from '../../ducks/simple-moving-average';
import { connect } from 'react-redux';
import YearChart from './chart';
import SMAChart from './sma-chart';
import './analytics.css';

class Analytics extends Component {


render() {

  if (this.props.past["2017-06-30"] !== undefined) {
    var yearChart = (<YearChart />)
  }

  if (this.props.yearlySMA["2017-06-30"] !== undefined) {
    var smaChart = (<SMAChart />)
  }

  else {
    yearChart = (<div>Loading...</div>)
    smaChart = null
  }


  return (
      <section className="analytics">

          <div className="current-data-contain">
            <div className="current-data">
              <h3>Current Trading Information For: {this.props.info["01. Symbol"]}</h3>
              <h3>Latest Price</h3>
              <h4>${this.props.info["03. Latest Price"]}</h4>
              <h3>Price Change Percentage</h3>
              <h4>{this.props.info["09. Price Change Percentage"]}</h4>
              <h3>Volume</h3>
              <h4>{this.props.info["10. Volume (Current Trading Day)"]}</h4>
            </div>
          </div>

          <div className="past-year-contain">
            <div className="past-year">
              <h1>Yearly Momentum</h1>
              <h5>Price and Simple Moving Average</h5>
              <div className="yearly-price-chart">{yearChart}</div>
              <div className="SMA-chart">{smaChart}</div>
            </div>
          </div>


      </section>
      );
  }
}



  function mapStateToProps(state) {
    return {
      info: state.stockreducer.stockData,
      past: state.yearReducer.pastYear,
      yearlySMA: state.SMAReducer.simpleMovingAverage,
      loading: state.stockreducer.loading
    }
  }

  export default connect(mapStateToProps, {getPastYear, getSimpleMovingAverage})(Analytics);

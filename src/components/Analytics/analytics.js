import React, { Component } from 'react';
import { getPastYear } from '../../ducks/past-year';
import { getSimpleMovingAverage } from '../../ducks/simple-moving-average';
import { getRealTimeAverage } from '../../ducks/real-time-average';
import { connect } from 'react-redux';
import YearChart from './chart';
import SMAChart from './sma-chart';
import BarGraph from './bar-graph';
import './analytics.css';

class Analytics extends Component {


render() {

  if (this.props.past["2017-06-30"] !== undefined && this.props.yearlySMA["2017-06-30"] !== undefined && this.props.rtSMA !== undefined) {
    var yearChart = (<YearChart />)
    var barGraph = (<BarGraph />)
    var smaChart = (<SMAChart />)
  }

  else {
    yearChart = (<div>Loading...</div>)
    smaChart = null
    barGraph = null
  }


  return (
      <section className="analytics">

          <div className="current-data-contain">
            <div className="current-data">
              <h3>Current Trading Information For: {this.props.info["01. Symbol"]}</h3>
              <h3>Latest Price</h3>
              <h4>${parseFloat(this.props.info["03. Latest Price"], 10)}</h4>
              <h3>Price Change Percentage</h3>
              <h4>{this.props.info["09. Price Change Percentage"]}</h4>
              <h3>Volume</h3>
              <h4>{this.props.info["10. Volume (Current Trading Day)"]}</h4>
              <div className="bar-graph">{barGraph}</div>
            </div>
          </div>

          <div className="past-year-contain">
            <div className="past-year">
              <h1>Yearly Momentum</h1>
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
      rtSMA: state.avgReducer.realTimeAverage,
      loading: state.stockreducer.loading
    }
  }

  export default connect(mapStateToProps, {getPastYear, getSimpleMovingAverage, getRealTimeAverage})(Analytics);

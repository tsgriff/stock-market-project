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

  componentDidMount() {
    document.body.scrollTop = 675;
  }


render() {
  // var smaChart = (<SMAChart />)

  return (
      <section className="analytics">
          <div className="current-data-contain">
            <div className="current-data">
              <h1 className="current-title-contain">Current Trading Information</h1>
              <div className="current-data-items"><h3>Company Symbol</h3>
              <h4>{this.props.info["01. symbol"]}</h4></div>
              <div className="current-data-items"><h3>Latest Price</h3>
              <h4>${parseFloat(this.props.info["05. price"], 10)}</h4></div>
              <div className="current-data-items"><h3>Price Change Percentage</h3>
              <h4>{parseFloat(this.props.info["10. change percent"], 10)}</h4></div>
              <div className="current-data-items"><h3>Volume</h3>
              <h4>{this.props.info["06. volume"]}</h4></div>
              <div className="bar-graph"><BarGraph {...this.props} /></div>
            </div>
          </div>

          <div className="past-year-contain">
            <div className="past-year">
              <h1>Yearly Momentum</h1>
              <div className="yearly-price-chart"><YearChart {...this.props} /></div>
              {/* <div className="SMA-chart">{smaChart}</div> */}
            </div>
          </div>

      </section>
      );
  }
}

  export default Analytics;

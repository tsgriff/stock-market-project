import React, { Component } from 'react';
import { getPastYear } from '../../ducks/past-year';
import { connect } from 'react-redux';
// import Chart from '../chart';
import './analytics.css';

class Analytics extends Component {
  constructor(props) {
    super(props);

  this.state = {
    past: {}
  }
}

render() {

if (this.props.past["2017-06-30"] !== undefined) {
  var pastDisplay = (<h1>{this.props.past["2017-06-30"]["4. close"]}</h1>)
}

else {
   pastDisplay = null;
}


  return (
      <section className="analytics">

          <div className="current-data-contain">
            <div className="current-data">
              <h1>Current Trading Information</h1>
              <h3>Company Symbol</h3>
              <h4>{this.props.info["01. Symbol"]}</h4>
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
              <h1>Past Year</h1>
              {pastDisplay}
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
      loading: state.stockreducer.loading
    }
  }

  export default connect(mapStateToProps, {getPastYear})(Analytics);

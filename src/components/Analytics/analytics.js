import React, { Component } from 'react';
import { getData } from '../../ducks/data';
import { connect } from 'react-redux';
import './analytics.css';

class Analytics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stockInfo: {}
    }
  }


  render() {


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
            </div>
          </div>

          <div className="past-week-contain">
            <div className="past-week">
              <h1>Past Week</h1>
            </div>
          </div>

        </section>
      );
    }
}



  function mapStateToProps(state) {
    return {
      info: state.stockreducer.stockData,
      loading: state.stockreducer.loading
    }
  }

  export default connect(mapStateToProps, {getData})(Analytics);

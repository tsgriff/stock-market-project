import React, { Component } from 'react';
import { connect } from 'react-redux';
import './algorithm.css';

class Algorithm extends Component {


render() {


  return (

      <section className="algorithm">
        <div className="algorithm-div-contain">
          <div className="prediction">
          <h3>Simple Prediction and Recommendation*</h3>
          <h4>Consider: </h4>
          <h5>How is this calculated?</h5>
          <h6>From <a target="_blank" rel="noopener noreferrer" href="http://www.investopedia.com/articles/technical/052201.asp">Investopedia</a>: "When the price crosses below a moving average, it can be used as a simple trading signal. A move below the moving average (as shown above) suggests that the bears are in control of the price action and that the asset will likely move lower. Conversely, a cross above a moving average suggests that the bulls are in control and that the price may be getting ready to make a move higher."</h6>
          <h6>*Disclaimer: This is for demonstration purposes only and not meant to be an actual recommendation or accurately predict stock price behavior.</h6>
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

  export default connect(mapStateToProps)(Algorithm);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPastYear } from '../../ducks/past-year';
import _ from 'lodash';
import './algorithm.css';

class Algorithm extends Component {

  constructor(props) {
    super(props);
    this.state = {
    price: null,
    average: null,
    showExplanation: false
  }
  this.getChartData = this.getChartData.bind(this)
  this.onClick = this.onClick.bind(this)

}

componentDidMount() {
  this.getChartData();
}

getChartData() {

  var yearObj = this.props.chart;
  var yearArr = _.values(yearObj);
  var priceArr = yearArr.slice(0, 12).map((data, i) => {
    return parseFloat(data["4. close"], 10);
  }
)

var lastPrice = priceArr[0];

var smaObj = this.props.yearlySMA;
var smaArr = _.values(smaObj);
var smaYearArr = smaArr.slice(0, 12).map((data, i) => {
  return parseFloat(data["SMA"], 10);
}
)

var SMA = smaYearArr[0];

  this.setState({
    price: lastPrice,
    average: SMA
  })

}

// Refresh Chart with New API Data//

componentWillReceiveProps(nextProps) {
  var yearObj = nextProps.chart;
  var yearArr = _.values(yearObj);
  var priceArr = yearArr.slice(0, 12).map((data, i) => {
    return parseFloat(data["4. close"], 10);
  }
)

var lastPrice = priceArr[0];

var smaObj = nextProps.yearlySMA;
var smaArr = _.values(smaObj);
var smaYearArr = smaArr.slice(0, 12).map((data, i) => {
  return parseFloat(data["SMA"], 10);
}
)

var SMA = smaYearArr[0];

  this.setState({
      price: lastPrice,
      average: SMA
    })
}

onClick() {
  this.setState({ showExplanation: true });
}


render() {


if (this.state.price > this.state.average) {
  var recommendation = (<div className="buy"><h1>BUYING</h1></div>)
}

else if (this.state.price < this.state.average) {
  recommendation = (<div className="sell"><h1>SELLING</h1></div>)
}

else if (this.state.price === this.state.average) {
  recommendation = (<div className="hold"><h1>HOLDING</h1></div>)
}


  return (

      <section className="algorithm">

        <div className="algorithm-div-contain">
          <div className="prediction">
          <h1>Simple Prediction and Recommendation</h1>

          <h6>Disclaimer: This is for demonstration purposes only and not meant to be an actual recommendation or accurately predict stock price behavior.</h6>

          <div className="recommendation-contain"><h4>Consider: {recommendation} </h4></div>

          <div className="explanation-button"><button id="button-display" type="button" className="btn btn-primary" onClick={this.onClick}>How is this calculated?</button></div>
          {this.state.showExplanation ? <div className="investopedia-info"><h6>From <a target="_blank" rel="noopener noreferrer" href="http://www.investopedia.com/articles/technical/052201.asp">Investopedia</a>: "When the price crosses below a moving average, it can be used as a simple trading signal. A move below the moving average (as shown above) suggests that the bears are in control of the price action and that the asset will likely move lower. Conversely, a cross above a moving average suggests that the bulls are in control and that the price may be getting ready to make a move higher."</h6></div>
           : null}
           </div>
        </div>

        <div className="footer"><h6>© Taylor Griffith</h6></div>

      </section>

    );
  }
}



  function mapStateToProps(state) {
    return {
      chart: state.yearReducer.chartData,
      yearlySMA: state.SMAReducer.simpleMovingAverage
    }
  }

  export default connect(mapStateToProps, {getPastYear})(Algorithm);

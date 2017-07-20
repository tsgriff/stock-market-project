import React, { Component } from 'react';
import { getSimpleMovingAverage } from '../../ducks/simple-moving-average';
import { connect } from 'react-redux';
import {Line} from 'react-chartjs-2';
import _ from 'lodash';

class SMAChart extends Component {


  constructor(props) {
    super(props);
    this.state = {
    simpleMovingAverage: {}
  }
  this.getChartData = this.getChartData.bind(this)
}

// Get API Data //

componentDidMount() {
  this.getChartData();
}

getChartData() {

  var smaObj = this.props.yearlySMA;
  var smaArr = _.values(smaObj);
  var smaYearArr = smaArr.slice(0, 12).map((data, i) => {
    return parseFloat(data["SMA"], 10);
  }
)

var SMA = smaYearArr.reverse();

this.setState({
  chartData: {
      labels: ["Last Year","","","","","","","","","","","Current"],
      datasets: [
        {
          label: 'Simple Moving Average',
          data: SMA,
          backgroundColor: ['blue']
      }
    ]
  }})
}

// Refresh Chart with New API Data//

componentWillReceiveProps(nextProps) {
  var smaObj = nextProps.yearlySMA;
  var smaArr = _.values(smaObj);
  var smaYearArr = smaArr.slice(0, 12).map((data, i) => {
    return parseFloat(data["SMA"], 10);
  }
)
var SMA = smaYearArr.reverse();
  this.setState({
    chartData: {
        labels: ["Last Year","","","","","","","","","","","Current"],
        datasets: [
          {
            label: 'Simple Moving Average',
            data: SMA,
            backgroundColor: ['blue']
        }
      ]
    }})
}


// Render JSX to the DOM //

  render() {


    return (
        <section className="chart">

            <div className="chart-contain">
              <Line
                width={550}
	              height={300}
              	data={this.state.chartData}
              	options={{title:{display:true, text:"Simple Moving Average of Each Month for the Past Year", fontSize: 25}, legend:{display: true, position: 'bottom'}}}
                redraw
              />
            </div>

        </section>
        );
    }
  }


  function mapStateToProps(state) {
    return {
      loading: state.stockreducer.loading,
      yearlySMA: state.SMAReducer.simpleMovingAverage
    }
  }

  export default connect(mapStateToProps, {getSimpleMovingAverage})(SMAChart);

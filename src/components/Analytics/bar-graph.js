import React, { Component } from 'react';
import { getRealTimeAverage } from '../../ducks/real-time-average';
import { getPastYear } from '../../ducks/past-year';
import { connect } from 'react-redux';
import {Bar} from 'react-chartjs-2';
import _ from 'lodash';

class BarGraph extends Component {


  constructor(props) {
    super(props);
    this.state = {
    chartData: {}
  }
  this.getGraphData = this.getGraphData.bind(this)
}

// Get API Data //

componentDidMount() {
  this.getGraphData();
}

getGraphData() {

  let yearObj = this.props.price;
  let yearArr = _.values(yearObj);
  let price = parseFloat(yearArr["2"], 10)

  let obj = this.props.currentAverage;
  let arr = _.values(obj);
  let newArr = parseFloat(arr[0].SMA, 10)

  console.log(newArr, price);


  this.setState({
    chartData: {
      labels: ["SMA", "Price"],
      datasets: [
        {
          label: "SMA",
          data: [newArr, price],
          backgroundColor: ['blue', 'green']
      }
    ]
  }
})
}

// Refresh Chart with New API Data//

componentWillReceiveProps(nextProps) {
  let yearObj = nextProps.price;
  let yearArr = _.values(yearObj);
  let price = parseFloat(yearArr["2"], 10)

  let obj = nextProps.currentAverage;
  let arr = _.values(obj);
  let newArr = parseFloat(arr[0].SMA, 10)

  this.setState({
    chartData: {
      labels: ["SMA", "Price"],
      datasets: [
        {
          label: "SMA",
          data: [newArr, price],
          backgroundColor: ['blue', 'green']
      }
    ]
  }
})
}



// Render JSX to the DOM //

  render() {


    return (
        <section className="bar-graph-contain">

            <div className="graph">
              <Bar
                width={450}
	              height={200}
              	data={this.state.chartData}
              	options={{title:{display:true, text:"Price Versus Simple Moving Average (SMA)", fontSize: 20}, legend: {display: false}, responsive: true}}
                redraw
              />
            </div>

        </section>
        );
    }
  }


  function mapStateToProps(state) {
    return {
      loading: state.avgReducer.loading,
      currentAverage: state.avgReducer.realTimeAverage,
      price: state.stockreducer.stockData,

    }
  }

  export default connect(mapStateToProps, {getRealTimeAverage, getPastYear})(BarGraph);

import React, { Component } from 'react';
import { getPastYear } from '../../ducks/past-year';
import { connect } from 'react-redux';
import {Line} from 'react-chartjs-2';
import _ from 'lodash';

class YearChart extends Component {

  constructor(props) {
    super(props);
    this.state = {
    chartData: {}
  }
  this.getChartData = this.getChartData.bind(this)
}

// Get API Data //

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

var pastVals = priceArr.reverse();

  this.setState({
    chartData: {
      labels: ["Last Year","","","","","","","","","","","Current"],
      datasets: [
        {
          label: 'Price',
          data: pastVals,
          backgroundColor: ['green']
      }
    ]
  }
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
var pastVals = priceArr.reverse();
  this.setState({
    chartData: {
        labels: ["Last Year","","","","","","","","","","","Current"],
        datasets: [
          {
            label: 'Price',
            data: pastVals,
            backgroundColor: ['green']
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
              	options={{title:{display:true, text:"Closing Prices of Each Month for the Past Year", fontSize: 20}, legend:{display: true, position: 'bottom'}}}
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
      chart: state.yearReducer.chartData
    }
  }

  export default connect(mapStateToProps, {getPastYear})(YearChart);

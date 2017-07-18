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
}

componentDidMount() {
  this.getChartData();
}

getChartData() {

  var yearObj = this.props.chart;
  var yearArr = _.values(yearObj);
  var priceArr = yearArr.slice(0, 12).map((data, i) => {
    return parseInt(data["4. close"], 10);
  }
)

var pastVals = priceArr.reverse();

console.log(yearObj);

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


  render() {


    return (
        <section className="chart">

            <div className="chart-contain">
              <Line
              	data={this.state.chartData}
              	options={{legend:{display: true, position: 'bottom'}}}
                redraw
              />
            </div>

        </section>
        );
    }
  }


  function mapStateToProps(state) {
    return {
      past: state.yearReducer.pastYear,
      loading: state.stockreducer.loading,
      chart: state.yearReducer.chartData
    }
  }

  export default connect(mapStateToProps, {getPastYear})(YearChart);

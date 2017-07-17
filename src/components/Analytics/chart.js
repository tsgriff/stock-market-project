import React, { Component } from 'react';
import { getPastYear } from '../../ducks/past-year';
import { connect } from 'react-redux';
import {Line} from 'react-chartjs-2';
import _ from 'lodash';

class YearChart extends Component {


  constructor(props) {
    super(props);

    this.state = {
      chartData: {
        labels: [1],
        datasets: [
          {
            label: 'Price',
            data: [100],
            backgroundColor: ['green']
        }
      ]
    }
  }
}


  render() {

  if (this.props.past["2017-06-30"] !== undefined) {
    var yearObj = this.props.past;
    var yearArr = _.values(yearObj);
    var pastVals = yearArr.slice(0, 12).map((data, i) => {
      return parseInt(data["4. close"], 10);
  }
 )
 console.log(pastVals);
}

  else {
     pastVals = null;
  }

    return (
        <section className="chart">

            <div className="chart-contain">
              <Line
              	data={this.state.chartData}
              	options={{legend:{display: true, position: 'right'}}}
                redraw
              />
              {pastVals}
            </div>

        </section>
        );
    }
  }


  function mapStateToProps(state) {
    return {
      past: state.yearReducer.pastYear,
      loading: state.stockreducer.loading
    }
  }

  export default connect(mapStateToProps, {getPastYear})(YearChart);

import React, { Component } from 'react';
import { getData } from '../ducks/data';
import { getPastYear } from '../ducks/past-year';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Home/home.css'

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchinput: '',
      stockInfo: {},
      pastYear: {}
    }
      this.handleSearch = this.handleSearch.bind(this);
      this.search = this.search.bind(this);
  }

handleSearch(event) {
  this.setState({
    searchinput: event.target.value
  })
}

search(event) {
  event.preventDefault();

  if (this.state.searchinput) {
    this.props.getData(this.state.searchinput).then((data) => {
      this.setState({
        stockInfo: data.value
      })
    })
    this.props.getPastYear(this.state.searchinput).then((data) => {
      this.setState({
        pastYear: data.value,
        searchinput: ''
      })
    })
  }

  else {
    alert('Please enter a company symbol');
  }

}

render() {


return (
  <section className="search-input-contain">
  <div className="landing-background">
    <div className="search-input">
      <h4 className="page-header">Search for a Company:</h4>
      <input
      onChange={this.handleSearch}
      placeholder="Enter company symbol" />
      <button className="search-button" onClick={this.search}>Search</button>
      </div>
    </div>
  </section>
);
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({getData, getPastYear}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchInput);

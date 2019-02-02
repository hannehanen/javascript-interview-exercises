import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {

  state = {
    filterList: []
  }

componentWillMount () {
  console.log(this.props.companies)
}

  addFilter = (e) => {
    this.setState(state => {
      let newList = state.filterList;
      newList.push(state.currentFilter)
      return {
        ...state, filterList: newList
      }
    })
  }

  filterChange = (e) => {
    let value = e.target.value;
    this.setState(state => {
      return {
        ...state, currentFilter: value
      }
    })
  }

  render() {
    let listToReturn = this.props.companies;
    if (this.state.filterList.length > 0) {
      listToReturn = this.props.companies.map(comp => {

        return this.state.filterList.includes(comp.location) ? comp : null;
      });

    }

    listToReturn = listToReturn.map(x =>
      x == null ? null :
        <div key={x.id}>
          Name: {x.name} Location: {x.location}
        </div>
    );


    return (
      <div className="App">
        <input value={this.state.currentFilter} onChange={this.filterChange} type="text" />
        <button onClick={this.addFilter}>
          Add filter</button>
        {listToReturn}
        <br />
        <div>
          Current filters (Only exact matches currently.):
         <ul>
            {this.state.filterList.map( (filter,key) => <li key={key}>{filter}</li>)}
          </ul>

        </div>
      </div>
    );
  }
}
const mapStateToProps = function(state) {
  return {
    companies: state.companies
  }
}
export default connect(mapStateToProps,null)(App);

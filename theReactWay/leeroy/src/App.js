import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    companies: [
      { id: 1, name: 'Amazon', location: 'Seattle' },
      { id: 2, name: 'Apple', location: 'Cupertino' },
      { id: 3, name: 'Facebook', location: 'Menlo Park' },
      { id: 4, name: 'Google', location: 'Mountain View' },
      { id: 5, name: 'Leeroy', location: 'Sundsvall' },
      { id: 6, name: 'Tesla', location: 'Palo Alto' }
    ],
    filterList: []
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
    let listToReturn = this.state.companies;
    if (this.state.filterList.length > 0) {
      listToReturn = this.state.companies.map(comp => {

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
            {this.state.filterList.map(filter => <li>{filter}</li>)}
          </ul>

        </div>
      </div>
    );
  }
}

export default App;

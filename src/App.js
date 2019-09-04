import React, { Component } from "react"
import Header from "./components/Header"
import MainContainer from "./containers/MainContainer"
const sortBy = require("sort-by")

class App extends Component {
  state = { allStocks: [], filteredStocks: [] }

  componentDidMount() {
    fetch("http://localhost:3001/stocks")
      .then(resp => resp.json())
      .then(json => {
        this.setState({ allStocks: json, filteredStocks: json })
      })
  }

  sortStocks = e => {
    let sortedStocks
    if (e.target.value === "Alphabetically") {
      sortedStocks = this.state.filteredStocks.sort(sortBy("ticker"))
    } else if (e.target.value === "Price") {
      sortedStocks = this.state.filteredStocks.sort(sortBy("price"))
    }
    this.setState({ filteredStocks: sortedStocks })
  }

  filterStocks = e => {
    let sortedStocks
    if (e.target.value === "Default") {
      sortedStocks = this.state.allStocks
    } else {
      sortedStocks = this.state.allStocks.filter(
        stock => stock.type === e.target.value
      )
    }
    this.setState({ filteredStocks: sortedStocks })
  }

  render() {
    console.log(this.state.filteredStocks)
    return (
      <div>
        <Header />
        <MainContainer
          stocks={this.state.filteredStocks}
          sortStocks={this.sortStocks}
          filterStocks={this.filterStocks}
        />
      </div>
    )
  }
}

export default App

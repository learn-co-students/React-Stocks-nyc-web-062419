import React, { Component } from "react"
import Header from "./components/Header"
import MainContainer from "./containers/MainContainer"

class App extends Component {
  state = { allStocks: [] }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
      .then(resp => resp.json())
      .then(json => {
        this.setState({ allStocks: json })
      })
  }

  render() {
    console.log(this.state.allStocks)
    return (
      <div>
        <Header />
        <MainContainer stocks={this.state.allStocks} />
      </div>
    )
  }
}

export default App

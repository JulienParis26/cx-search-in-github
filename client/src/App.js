import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: '',
      loading: false
    }
  }

  getUser = () => {
    this.setState({
      loading: true
    })

    const name = this.refs.name.value

    setTimeout( () => {
      fetch(`http://api.github.com/users/${name}`)
      .then(response => response.json())
      .then(data => {

        this.setState({
          user: data,
          loading: false
        })
      })
    }, 1000)
  }


  render() {   
    return (
      <div className="App">
        <Header />
        <div className="wrapper">
          <div id='search-bar'>
            <input type="text" placeholder='Username github' />
            <button className='searchButton'>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react'
import { HashRouter as Router, Route, Link } from "react-router-dom"
import './style'
import Home from 'src/container/Home'
import Away from 'src/container/Away'


export default class App extends Component {
    render() {
        return (
            <div className="app">
                <h1>have a good time</h1>
                <Router>
                    <ul>
                        <li><Link to="/">to home</Link></li>
                        <li><Link to="/away">to away</Link></li>
                    </ul>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/away' component={Away}></Route>
                </Router>
            </div>
        )
    }
}

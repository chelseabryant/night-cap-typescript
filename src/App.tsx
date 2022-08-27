import "./App.css"
import Header from "./components/Header"
import Routes from "./Routes"
import { BrowserRouter as Router, Link } from "react-router-dom"
import React from "react"

export default function App(): JSX.Element {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes />
            </div>
        </Router>
    )
}

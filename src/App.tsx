import "./App.css"
import Header from "./components/Header"
import Routes from "./Routes"
import { BrowserRouter as Router } from "react-router-dom"

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

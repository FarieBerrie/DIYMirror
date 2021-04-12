import './App.css';
import { Header } from "components/Header";
import { Home } from "components/HomePage";
import { About } from "components/About";
import { Table } from "components/Table";
import { Footer } from "components/Footer";
import { BrowserRouter as Router, 
  Switch, 
  Route, 
   } from "react-router-dom";

function App() {
  return (
    <Router>
    <Header/>
    <Switch>
    <Route exact={true} path="/home">
    <Home/>
    </Route>
    <Route exact={true} path="/about">
    <About/>
    </Route>
    <Route exact={true} path="/data">
      <Table />
    </Route>
    </Switch>
    <Footer />
    </Router>
  );
}

export default App;

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// NOTA: Las vistas podrian estar dentro del contenedor.
// import NavBarView from './Visual/NavBarView';
// import FooterView from './Visual/FooterView';
import HomeView from './Visual/HomeView';
import BienvenidoPagina from './contenedores/BienvenidoPagina';

const AppRouter = () => {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={HomeView} />
          <Route path="/beta" exact component={BienvenidoPagina} />
          {/* <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} /> */}
        </Switch>
    </Router>
  )
}

export default AppRouter

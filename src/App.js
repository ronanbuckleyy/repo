import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import WorkHistoryPage from "./pages/WorkHistoryPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route path="/projects">
          <ProjectsPage/>
        </Route>
        <Route path="/work-history">
          <WorkHistoryPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

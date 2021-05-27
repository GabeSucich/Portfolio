import 'semantic-ui-css/semantic.min.css'

import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom"

import { Container } from "semantic-ui-react"

import { ProjectProvider } from "./utils/ProjectState"
import { BioProvider } from "./utils/BioState"

import Navigation from "./Navigation"
import ProjectSelect from "./ProjectSelect"
import ProjectDisplay from "./ProjectDisplay"
import Bio from "./Bio"
import "./App.css"

function App() {
  return (
    <ProjectProvider>
      <BioProvider>
        <Router>
          <Navigation />
          <Container>
            <Switch>
              <Route exact path="/about">
                <Bio />
              </Route>
              <Route exact path="/projects">
                <ProjectSelect />
                <ProjectDisplay />
              </Route>
              <Route>
                <Redirect to="/about" />
              </Route>
            </Switch>
          </Container>
        </Router>
      </BioProvider>
    </ProjectProvider>
  );
}

export default App;

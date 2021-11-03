import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// Local Library Imports
import { Client } from 'client';

// Import env var
import { EnvVars } from './env-vars';

// Import all styles
import './styles/App.css';
import './styles/Sidebar.css';
import './styles/Topbar.css';

import { Topbar } from './ui/containers/Topbar';
import { WorkspaceRow } from './ui/containers/WorkspaceRow';
import { CreateView } from './ui/components/reuseable/CreateView';
import { Workspace } from "./ui/components/Workspace";

type StateType = {client: Client};
class App extends React.Component<unknown, StateType> {
  constructor(props: any) {
    super(props);
    const host: string = window.location.hostname;
    const protocol: string = EnvVars.protocol;
    this.state = {
      client: new Client(protocol, host, null),
    };
  }

  render() {
    // Pass client to all routes/components that need to make API requests
    /*
    TODO:
       <Route exact path="/workspaces">
          <ListWorkspaces client={client} />
          <Route exact path="/create">
            <CreateWorkspace client={client} />
          </Route>
          <Route exact path="/:id">
            <Workspace client={client} />
          </Route>
        </Route>
     */
    const { client } = this.state;
    return (
      <div className="app">
        <Topbar />
        <WorkspaceRow client={client}>
          <Router>
            <Switch>
              <Route exact path="/scopes">
                <ListScopes client={client} />
              </Route>
              <Route exact path="/workspace">
                <Workspace client={client} />
              </Route>
              <Route path="/silos/create">
                <CreateView client={client} type={"Silos"} />
              </Route>
              <Route path="/forums/create">
                <CreateView client={client} type={"Forums"} />
              </Route>
            </Switch>
          </Router>
        </WorkspaceRow>
      </div>
    );
  }
}

export default App;

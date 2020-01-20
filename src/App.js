import React from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter, Switch, Link } from 'react-router-dom';
import UsersTable from '../src/components/UsersTable';
import './styles/index.scss';
import { store } from '../src/store';

const App = () => (
  <div className="App">
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route
            path="/users"
            render={() => (
              <UsersTable />
            )}
          />
          <Route path="/">
            <Link
              className="init-button button"
              to="/users"
            >
              SHOW USERS LIST
            </Link>
          </Route>
        </Switch>
      </HashRouter>
    </Provider>
  </div>
);

export default App;

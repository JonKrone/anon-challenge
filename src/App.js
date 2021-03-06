import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './components/Layout';

import HomePage from './pages/Home';
import AuthorPage from './pages/Author';

export default function App() {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={HomePage} />
        <Route path='author/:author_login' component={AuthorPage} />
      </Route>
    </Router>
  );
}

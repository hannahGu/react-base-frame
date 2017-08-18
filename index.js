import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './src/App';
import About from './src/About';
import Home from './src/Home';

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/about" component={About} />
    </Route>
  </Router>,
  document.getElementById('app'),
);

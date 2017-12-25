import { Router, Route, browserHistory } from 'react-router';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={Home} />
      <Route path="/account" component={AccountOverview} />
      <Route path="/lists" component={ListOverview} />
      <Route path="/animations" component={AnimationOverview} />
      <Route path="/forms" component={FormOverview} />
      <Route path="/dates" component={DateOverview} />
    </Router>
  </Provider>
);
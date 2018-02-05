import React from 'react';
import { View } from 'react-native';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'

import NotFound from '../NotFound/NotFound';
import RecordContainer from '../Record/RecordContainer';
import RecordsListContainer from '../RecordsList/RecordsListContainer';
import screen from '../screen/screen';

export default () => (
  <View>
    <Router>
      <Switch>
        <Route exact path="/" component={screen(RecordsListContainer)}/>
        <Route path="/records/:id" component={screen(RecordContainer)}/>
        <Route component={screen(NotFound)}/>
      </Switch>
    </Router>
  </View>
);

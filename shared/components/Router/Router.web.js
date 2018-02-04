import React from 'react';
import { View } from 'react-native';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import RecordContainer from '../Record/RecordContainer';
import RecordsListContainer from '../RecordsList/RecordsListContainer';
import screen from '../screen/screen';

// const options = {
//   initialRouteName: 'RecordsList'
// };

// const RootStack = StackNavigator(
//   {
//     Record: {
//       screen: screen(
//         RecordContainer,
//         ({ navigation }) => ({ title: navigation.state.params.title })
//       ),
//     },
//     RecordsList: {
//       screen: screen(
//         RecordsListContainer,
//         {
//           title: "Home"
//         }
//       ),
//     },
//   },
//   options
// );

export default () => (
  <Router>
    <View>
      <Route exact path="/" component={screen(RecordsListContainer)}/>
      <Route path="/records/:id" component={screen(RecordContainer)}/>
    </View>
  </Router>
);

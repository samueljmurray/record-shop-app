import React from 'react';
import { View} from 'react-native';
import { StackNavigator } from 'react-navigation';

import RecordContainer from '../Record/RecordContainer';
import RecordsListContainer from '../RecordsList/RecordsListContainer';
import screen from '../screen/screen';

const options = {
  initialRouteName: 'RecordsList'
};

const RootStack = StackNavigator(
  {
    Record: {
      screen: screen(
        RecordContainer,
        ({ navigation }) => ({ title: navigation.state.params.title })
      ),
    },
    RecordsList: {
      screen: screen(
        RecordsListContainer,
        {
          title: "Home"
        }
      ),
    },
  },
  options
);

export default () => <RootStack/>

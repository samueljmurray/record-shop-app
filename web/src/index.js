import { AppRegistry } from 'react-native';

import App from 'shared/components/App/App';
import 'normalize.css';
import './index.css';

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('root')
});
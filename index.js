import {AppRegistry} from 'react-native';
import home from './src/views/home'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => home);

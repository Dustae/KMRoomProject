import { registerRootComponent } from 'expo';

import App from './App';
import PropTypes from 'deprecated-react-native-prop-types';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

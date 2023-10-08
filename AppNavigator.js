import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ReservationScreen from './ReservationScreen';
import ReservationIndexScreen from './ReservationIndex';
import ReservationDetailsScreen from './ReservationDetailsScreen';
import ReservationRequestScreen from './ReservationRequestScreen';

import LoginScreen from './LoginScreen'; // Import the LoginScreen component
import React, { useState } from 'react';
import PropTypes from 'deprecated-react-native-prop-types';


const Stack = createStackNavigator();

function AppNavigator() {
  // Use a state variable to track the user's authentication status
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName={authenticated ? 'ReservationIndex' : 'Login'}
      screenOptions={{
        headerStyle: { backgroundColor: 'transparent' }, // Set the background color of the header
        headerTintColor: 'black', // Set the text color of the header
        headerShown: false,
      }}
    >
      {authenticated ? (
        <>
          <Stack.Screen name="Reservation" component={ReservationScreen} options={{title: 'ModLib'}} />
          <Stack.Screen name="ReservationIndex" component={ReservationIndexScreen} options={{title: 'Home'}} />
          <Stack.Screen name="ReservationDetails" component={ReservationDetailsScreen} options={{title: '5th floor library', headerLeft: null}}/>
          <Stack.Screen name="ReservationRequest" component={ReservationRequestScreen} options={{title: null, headerLeft: null}}/>
        </>
      ) : (
        <Stack.Screen name="Login">
          {(props) => <LoginScreen {...props} setAuthenticated={setAuthenticated} />}
        </Stack.Screen>
      )}
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;

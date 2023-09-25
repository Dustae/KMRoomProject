import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ReservationScreen from './ReservationScreen';
import ReservationDetailsScreen from './ReservationDetailsScreen';
import LoginScreen from './LoginScreen'; // Import the LoginScreen component
import React, { useState } from 'react';


const Stack = createStackNavigator();

function AppNavigator() {
  // Use a state variable to track the user's authentication status
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName={authenticated ? 'Reservation' : 'Login'}
      screenOptions={{
        headerStyle: { backgroundColor: 'orange' }, // Set the background color of the header
        headerTintColor: 'white', // Set the text color of the header
      }}
    >
      {authenticated ? (
        <>
          <Stack.Screen name="Reservation" component={ReservationScreen} />
          <Stack.Screen name="ReservationDetails" component={ReservationDetailsScreen} />
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

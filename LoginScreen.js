import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PropTypes from 'deprecated-react-native-prop-types';

function LoginScreen({ navigation }) {
  // Handle user login
  const handleLogin = () => {
    // Perform user authentication here (e.g., check credentials)
    // If authentication is successful, navigate to the ReservationScreen
    navigation.navigate('Reservation');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Page</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default LoginScreen;

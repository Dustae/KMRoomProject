import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'deprecated-react-native-prop-types';
import { useNavigation } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/stack';
import IconM from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
function ReservationDetailsScreen() {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const imageSize = Math.min(screenWidth, screenHeight) * 0.9;





  // Handle the back button press
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Image
          source={require('./picture/floor1.jpg')}
          style={[styles.image, { width: imageSize, height: imageSize }]}
        />
        <View style={styles.overlay}>
          <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
            <View style={styles.iconContainer}>
              <IconM name="keyboard-arrow-left" size={40} color="orange" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
            <View style={styles.hearticonContainer}>
              <Icon name="heart" size={20} color="orange" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.headerText}>Overview</Text>
    </ScrollView>
  );
}

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const paddingHorizontal = screenWidth * 0.05;
const paddingTop = screenHeight * 0.05;

const iconContainerLeft = screenWidth * 0.08;
const iconContainerTop = screenWidth * 0.08;

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    alignItems: '',
    paddingHorizontal: '5%', // Apply calculated horizontal padding
    paddingTop: '5%', // Apply calculated top padding
    // Add shadow properties here
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 4, // Android drop shadow
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  image: {
    width: '100%',
    borderRadius: 15,
    marginTop: 0,

  },
  backButtonText: {
    color: 'white', // Customize the button text color
    fontWeight: 'bold',

  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute', // Position the icon container absolutely
    top: iconContainerTop, // Adjust the top position to center it vertically
    left: iconContainerLeft, // Adjust the left position to center it horizontally
    zIndex: 1, // Ensure the icon is displayed above the image
    shadowColor: 'rgba(0, 0, 0, 0.5)', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset (horizontal and vertical)
    shadowOpacity: 0.8, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 4, // Android drop shadow
  },
  hearticonContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute', // Position the icon container absolutely
    top: iconContainerTop, // Adjust the top position to center it vertically
    right: iconContainerLeft, // Adjust the left position to center it horizontally
    zIndex: 1, // Ensure the icon is displayed above the image
    shadowColor: 'rgba(0, 0, 0, 0.5)', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset (horizontal and vertical)
    shadowOpacity: 0.8, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 4, // Android drop shadow
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Position the overlay to cover the entire image
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    left: iconContainerLeft,
    color: 'orange',
  },

});

export default ReservationDetailsScreen;

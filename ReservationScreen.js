import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker'; // Import the CalendarPicker component
import { ScrollView, Image } from 'react-native';

const screenWidth = Dimensions.get('window').width;



export default class ReservationScreen extends Component {


  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }
  componentDidMount() {
    // Set the status bar visibility when the component mounts
    StatusBar.setHidden(false); // Set to false to show the status bar
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  handleBoxPress = (boxNumber) => {
    // Implement your logic here when a box is clicked
    alert(`Box ${boxNumber} clicked!`);
  };

  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.container}>
          <CalendarPicker
            onDateChange={this.onDateChange}
          />


          <View>
            <Text>SELECTED DATE: {startDate}</Text>
          </View>

          {/* Create two boxes per row */}
          <View style={styles.boxRow}>
            <TouchableOpacity
              style={styles.box}
              onPress={() => this.handleBoxPress(1)}
            >
              <View style={styles.box}>
                <Image
                  source={require('./picture/floor1.jpg')}
                  style={styles.image}
                />
                <Text style={styles.textbold}>5th floor libary</Text>
                <Text style={styles.description}>Description of Room 1st goes here</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.space} />
            <View style={styles.box}>
              <Image
                source={require('./picture/floor1.jpg')}
                style={styles.image}
              />
              <Text style={styles.textbold}>4th floor libary</Text>
              <Text style={styles.description}>Description of Room 1st goes here</Text>
            </View>
          </View>

          <View style={styles.boxRow}>
            <View style={styles.box}>
              <Image
                source={require('./picture/floor1.jpg')}
                style={styles.image}
              />
              <Text style={styles.textbold}>3rd floor libary</Text>
              <Text style={styles.description}>Description of Room 1st goes here</Text>
            </View>
            <View style={styles.space} />
            <View style={styles.box}>
              <Image
                source={require('./picture/floor1.jpg')}
                style={styles.image}
              />
              <Text style={styles.textbold}>2nd floor libary</Text>
              <Text style={styles.description}>Description of Room 1st goes here</Text>
            </View>
          </View>
        </View>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  space: {
    width: screenWidth * 0.08, // Adjust the width to add space between boxes
  },
  boxRow: {
    flexDirection: 'row', // Arrange boxes horizontally
    justifyContent: 'space-between', // Add space between boxes
    marginBottom: 30, // Add vertical spacing between rows
  },
  box: {
    width: screenWidth * 0.4, // Adjust the width as needed
    aspectRatio: 1, // Maintain square aspect ratio
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 8,
    marginVertical: 10,
    backgroundColor: 'white',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  textContent: {
    alignItems: 'flex-start', // Align text to the left
  },
  image: {
    flex: 1, // Adjust the image size as needed
    aspectRatio: 1, // Maintain square aspect ratio
    borderRadius: 8,
  },
  textbold: {
    marginTop: 5,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  description: {
    marginTop: 5, // Adjust the margin as needed
    fontSize: 8, // Adjust the font size as needed
    color: 'gray', // You can adjust the color
    textAlign: 'left',
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', //บนล่าง center
  },
});

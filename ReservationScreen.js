import { style } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import React, { Component } from 'react';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, Dimensions, StatusBar, Animated, TextInput } from 'react-native';
import { ScrollView, Image } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import Gradient from './Gradient'; // Import the Gradient component
import { LinearGradient } from "expo-linear-gradient";
import { customText } from 'react-native-paper';
import IconM from 'react-native-vector-icons/MaterialIcons';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const imageSize = Math.min(screenWidth, screenHeight) * 0.9;
// Calculate the font size based on screen dimensions
const CustomfontSize = Math.min(screenWidth, screenHeight);

export default class ReservationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: new Date(), // Initialize with the current date or the default selected date
      buttonText1: '08:30 - 10:20',
      buttonText2: '10:30 - 12:20',
      buttonText3: '12:30 - 14:20',
      buttonText4: '14:30 - 16:20',
      isSelected: false, // Initially, the button is not selected
    };
  }
  componentDidMount() {
    // Set the status bar visibility when the component mounts
    StatusBar.setHidden(false); // Set to false to show the status bar
  }
  handleBoxPress = (boxNumber) => {
    // Implement your logic here when a box is clicked
    // alert(`Box ${boxNumber} clicked!`);
    // Navigate to ReservationDetailsScreen
    this.props.navigation.navigate('ReservationDetails');
  };

  // Callback function to handle date selection
  handleDateSelected = (date) => {
    // Parse the date to ensure it's a Date object
    const parsedDate = new Date(date);
    this.setState({ selectedDate: parsedDate });
  };

  handleButtonClick1 = () => {
    if (this.state.isSelected) {
      // If already selected, navigate to RequestScreen
      this.props.navigation.navigate('ReservationRequest');
    } else {
      // If not selected, toggle the isSelected state and change the style
      this.setState((prevState) => ({
        isSelected: !prevState.isSelected,
      }));
    }
  };
  

  handleButtonClick2 = () => {
    this.setState((prevState) => ({
      buttonText2: prevState.buttonText2 === 'Click Me' ? 'Button Clicked!' : 'Click Me',
    }));
  };

  handleButtonClick3 = () => {
    this.setState((prevState) => ({
      buttonText3: prevState.buttonText3 === 'Click Me' ? 'Button Clicked!' : 'Click Me',
    }));
  };

  handleButtonClick4 = () => {
    this.setState((prevState) => ({
      buttonText4: prevState.buttonText4 === 'Click Me' ? 'Button Clicked!' : 'Click Me',
    }));
  };



  render() {
    const { isSelected, buttonText1, buttonText2, buttonText3, buttonText4 } = this.state;
    const headerImageBackgroundWidth = screenWidth;
    const headerImageBackgroundHeight = screenHeight / 3;
    const { selectedDate } = this.state;

    // Define a custom dateNumberStyle for selected dates
    const selectedDateNumberStyle = {
      color: 'orange', // You can change the color to your preference
      textDecorationLine: 'underline', // Add underline for selected dates

    };
    const calendarStripMarginTop = screenHeight * 0.12 * -1;


    const buttonStyle = isSelected
      ? {
        ...styles.buttonSelecting,
      }
      : {
        ...styles.button,
      };

    const textStyle = isSelected
      ? {
        ...styles.buttonSelectingText,
      }
      : {
        ...styles.buttonText,
      };
    return (
      
      <View>
        {/* Top Header with Image Background */}
        <ImageBackground
          source={require('./picture/floor1.jpg')}
          style={styles.headerImageBackground}
        >
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.6)']}
            style={styles.gradient}
          >
          </LinearGradient>
        </ImageBackground>

        <ScrollView contentContainerStyle={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.SearchBar}>
              <IconM name="search" size={24} color="gray" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Search"
                placeholderTextColor="gray"
              />
            </View>
          </View>

          <View style={styles.canlendar}>
            <CalendarStrip
              scrollable
              style={{ height: screenHeight * 0.12, paddingTop: 10, paddingBottom: 10, backgroundColor: 'rgba(255, 255, 255, 1)' }}
              calendarAnimation={{ type: 'sequence', duration: 50 }}
              // calendarColor={'#fff'}
              dateNumberStyle={{ color: 'gray' }}
              dateNameStyle={{ color: 'gray' }}
              highlightDateNumberStyle={{ color: 'orange' }}
              //selectedDateNumberStyle ขีดเส้นใต้
              highlightDateNameStyle={{ color: 'orange' }}
              disabledDateNameStyle={{ color: 'grey' }}
              disabledDateNumberStyle={{ color: 'grey' }}
              calendarHeaderStyle={{ color: 'black' }}
              iconContainer={{ flex: 0.1 }}
              onDateSelected={this.handleDateSelected} // Callback for date selection
            />
          </View>
          {/* <Text style={styles.description} >Selected Date: {selectedDate ? selectedDate.toDateString() : 'None'}</Text> */}


          <View style={styles.contentContainer}>
            {/* Create two boxes per row */}
            <View style={styles.boxRow}>
              <TouchableOpacity
                style={styles.box}
                onPress={() => this.handleBoxPress(1)}
              >
                <View style={styles.textContent}>
                  <Text style={styles.textbold}>5th floor libary</Text>
                  {/* <Text style={styles.description}>Description of Room 1st goes here</Text> */}
                </View>
                <View style={styles.innerBox}>
                  <View style={styles.imageContainer}>
                    <Image
                      source={require('./picture/floor1.jpg')}
                      style={styles.image}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.ButtonRowcontainer}>
                    <TouchableOpacity style={styles.buttonDisabled} onPress={this.handleButtonClick1}>
                      <Text style={styles.buttonDisabledText}>{buttonText1}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={buttonStyle} onPress={this.handleButtonClick1}>
                      <Text style={textStyle}>{buttonText2}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.handleButtonClick3}>
                      <Text style={styles.buttonText}>{buttonText3}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.handleButtonClick4}>
                      <Text style={styles.buttonText}>{buttonText4}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>


              <TouchableOpacity
                style={styles.box}
                onPress={() => this.handleBoxPress(1)}
              >
                <View style={styles.textContent}>
                  <Text style={styles.textbold}>5th floor libary</Text>
                  {/* <Text style={styles.description}>Description of Room 1st goes here</Text> */}
                </View>
                <View style={styles.innerBox}>
                  <View style={styles.imageContainer}>
                    <Image
                      source={require('./picture/floor1.jpg')}
                      style={styles.image}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.ButtonRowcontainer}>
                    <TouchableOpacity style={styles.buttonDisabled} onPress={this.handleButtonClick}>
                      <Text style={styles.buttonDisabledText}>{buttonText1}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonSelecting} onPress={this.handleButtonClick}>
                      <Text style={styles.buttonSelectingText}>{buttonText2}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.handleButtonClick}>
                      <Text style={styles.buttonText}>{buttonText3}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.handleButtonClick}>
                      <Text style={styles.buttonText}>{buttonText4}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>


              <TouchableOpacity
                style={styles.box}
                onPress={() => this.handleBoxPress(1)}
              >
                <View style={styles.textContent}>
                  <Text style={styles.textbold}>5th floor libary</Text>
                  {/* <Text style={styles.description}>Description of Room 1st goes here</Text> */}
                </View>
                <View style={styles.innerBox}>
                  <View style={styles.imageContainer}>
                    <Image
                      source={require('./picture/floor1.jpg')}
                      style={styles.image}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.ButtonRowcontainer}>
                    <TouchableOpacity style={styles.buttonDisabled} onPress={this.handleButtonClick}>
                      <Text style={styles.buttonDisabledText}>{buttonText1}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonSelecting} onPress={this.handleButtonClick}>
                      <Text style={styles.buttonSelectingText}>{buttonText2}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.handleButtonClick}>
                      <Text style={styles.buttonText}>{buttonText3}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.handleButtonClick}>
                      <Text style={styles.buttonText}>{buttonText4}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>


              <TouchableOpacity
                style={styles.box}
                onPress={() => this.handleBoxPress(1)}
              >
                <View style={styles.textContent}>
                  <Text style={styles.textbold}>5th floor libary</Text>
                  {/* <Text style={styles.description}>Description of Room 1st goes here</Text> */}
                </View>
                <View style={styles.innerBox}>
                  <View style={styles.imageContainer}>
                    <Image
                      source={require('./picture/floor1.jpg')}
                      style={styles.image}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.ButtonRowcontainer}>
                    <TouchableOpacity style={styles.buttonDisabled} onPress={this.handleButtonClick}>
                      <Text style={styles.buttonDisabledText}>{buttonText1}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonSelecting} onPress={this.handleButtonClick}>
                      <Text style={styles.buttonSelectingText}>{buttonText2}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.handleButtonClick}>
                      <Text style={styles.buttonText}>{buttonText3}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.handleButtonClick}>
                      <Text style={styles.buttonText}>{buttonText4}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>


            </View>
          </View>
        </ScrollView>
      </View>

    );
  }
}

const desiredMarginTop = screenHeight * 0.265; // 2% of the screen height

const styles = StyleSheet.create({
  SearchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderRadius: 25,
    backgroundColor: 'white',
    width: screenWidth * 0.5, // Set the desired width
    height: screenHeight * 0.05,
    marginTop: screenHeight * 0.16,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: CustomfontSize * 0.03,

  },
  icon: {
    marginLeft: 10,
    alignItems: 'center',
  },
  ButtonRowcontainer: {
    flexDirection: 'row', // Arrange buttons horizontally
    justifyContent: 'space-between', // Add space between buttons
  },
  buttonConfirm: {
    borderWidth: 0,
    backgroundColor: 'orange',
    borderRadius: 10,
    width: screenWidth * 0.2, // Set the desired width
    height: screenHeight * 0.03,
    marginTop: screenHeight * 0.02,
    justifyContent: 'center',
  },
  buttonConfirmText: {
    fontSize: CustomfontSize * 0.02,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    width: screenWidth * 0.2, // Set the desired width
    height: screenHeight * 0.03,
    marginTop: screenHeight * 0.02,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: CustomfontSize * 0.02,
    color: 'gray',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonSelecting: {
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 10,
    width: screenWidth * 0.2, // Set the desired width
    height: screenHeight * 0.03,
    marginTop: screenHeight * 0.02,
    justifyContent: 'center',
  },
  buttonSelectingText: {
    fontSize: CustomfontSize * 0.02,
    color: 'orange',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonDisabled: {
    backgroundColor: 'gray',
    borderRadius: 10,
    width: screenWidth * 0.2, // Set the desired width
    height: screenHeight * 0.03,
    marginTop: screenHeight * 0.02,
    justifyContent: 'center',
  },
  buttonDisabledText: {
    fontSize: CustomfontSize * 0.02,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  innerBox: {
    flex: 1,
  },
  space: {
    width: screenWidth * 0.08, // Adjust the width to add space between boxes
    height: screenHeight * 0.05,
  },
  boxRow: {
    flexDirection: 'column', // Arrange boxes horizontally
    justifyContent: 'center', // Add space between boxes
    marginBottom: 10, // Add vertical spacing between rows
    alignItems: 'center',
  },
  box: {
    width: screenWidth * 0.95, // Adjust the width as needed
    height: screenHeight * 0.15,
    justifyContent: 'center',
    borderWidth: 0,
    borderColor: '#ddd',
    borderRadius: 15,
    padding: 8, // ขอบบนรูปกับขอบกล่อง
    marginVertical: screenHeight * 0.02, // ความห่างของแต่ละกล่องบนล่าง
    backgroundColor: 'white',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  canlendar: {
    borderWidth: 0,
    borderColor: '#ddd',
    borderRadius: 15,
    marginTop: screenHeight * 0.06, // ความห่างของแต่ละกล่องบนล่าง
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  imageContainer: {
    alignItems: 'flex-end',
  },
  textContent: {
    alignItems: 'flex-start', // Align text to the left
    paddingLeft: screenWidth * 0.02, // Add left padding (adjust the value as needed)
    paddingTop: screenHeight * 0.005, // Add left padding (adjust the value as needed)
  },
  image: {
    width: screenWidth * 0.2, // Set the desired width
    height: screenHeight * 0.05, // Set the desired height
    borderRadius: 15,
    alignItems: 'center', // Center the image horizontally
  },
  textbold: {
    marginTop: 5,
    fontSize: screenWidth * 0.03,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  description: {
    fontSize: screenWidth * 0.02, // Adjust the font size as needed
    color: 'gray', // You can adjust the color
    textAlign: 'left',
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerImageBackground: {
    width: screenWidth * 1, // Adjust the width as needed
    height: screenHeight / 3,
    position: 'absolute', // Position the image behind other components
    resizeMode: 'cover', // Adjust as needed
  },
  headerContainer: {
    zIndex: 1, // Place the header container above the image
    alignSelf: 'stretch', // Stretch the container horizontally
    alignItems: 'center', // Center the content horizontally
    marginTop: screenHeight / 8, // Adjust the marginTop to push down the content
  },
  contentContainer: {
    marginTop: 10, // Adjust the marginTop to control the spacing between header and content
    // Add other styles as needed for your content
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 300, // Adjust the height of the gradient overlay
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Position the overlay to cover the entire image
  },
});

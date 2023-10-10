import { style } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import React, { Component, useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView, StatusBar, Animated, TextInput, Modal, UIManager, findNodeHandle } from 'react-native';
import { ScrollView, Image } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import Gradient from './Gradient'; // Import the Gradient component
import { LinearGradient } from "expo-linear-gradient";
import { customText } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialIcons';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

// Define a scaling factor based on your design or preferences
const scalingFactor = 0.04; // You can adjust this value

// Calculate the responsive font size
const fontSize = screenWidth * scalingFactor;



export default class ReservationDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentID: '', // Student ID input value
            name: '', // Name input value

            isDropdownOpen: false,
            selectedOption: '',

        };
        this.inputBoxRef = React.createRef();
    }

    toggleDropdown = () => {
        this.setState((prevState) => ({
            isDropdownOpen: !prevState.isDropdownOpen,
        }));
    };
    selectOption = (option) => {
        this.setState({
            selectedOption: option,
            isDropdownOpen: false, // Close the dropdown after selection
        });
    };
    componentDidMount() {

    }

    handleBoxPress = (boxNumber) => {
        // Implement your logic here when a box is clicked
        // alert(`Box ${boxNumber} clicked!`);
        // Navigate to ReservationDetailsScreen
        this.props.navigation.navigate('ReservationDetails');
    };
    handleBackPress = () => {
        this.props.navigation.goBack(); // Assuming you receive navigation prop from a navigator
    };

    render() {
        const { selectedOption, isDropdownOpen } = this.state;
        const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
        const dropdownHeight = isDropdownOpen ? options.length * 40 : 0;
        const handleSubmission = () => {
            // Handle the submission logic here
        };
        return (
            <SafeAreaView style={{ flex: 1 }} edges={[]} forceInset={{ bottom: 'never' }}>
                <View>
                    <ScrollView
                        contentContainerStyle={styles.scrollViewContainer}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styles.contentContainer}>
                            <TouchableOpacity
                                onPress={this.handleBackPress}
                                style={[{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 20, // Half of the width/height to create a circle
                                    backgroundColor: 'white',
                                    borderColor: 'gray',
                                    borderWidth: 0.5,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: 10,
                                }]}
                            >
                                <View style={[{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }]}>
                                    <IconM name="keyboard-arrow-left" size={30} color="orange" />
                                </View>
                            </TouchableOpacity>
                            <View style={[{ alignContent: 'center', alignItems: 'center' }]}>
                                < Image
                                    source={require('./picture/floor1.jpg')}
                                    style={
                                        [{
                                            width: screenWidth * 0.9,
                                            height: screenWidth * 0.8,
                                            borderRadius: 15,
                                        }]} resizeMode='cover'
                                />
                            </View>

                            <View style={[{ padding: 8, }]}>
                                <Text style={[{
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    alignItems: 'center',
                                    color: 'orange',
                                    marginTop: screenWidth * 0.02,
                                }]}>Overview</Text>
                                <View style={[{
                                    flexDirection: 'row', // Arrange items horizontally
                                    marginTop: 8,
                                }]}>

                                    <View style={[{ marginRight: 10, backgroundColor: '#F2F2F2', paddingHorizontal: 4, paddingVertical: 2, borderRadius: 4, }]}>
                                        <Icon name="clock-o" size={32} color="orange" />
                                    </View>

                                    <View style={[{}]}>
                                        <Text style={[{
                                            fontSize: 14, // Adjust font size as needed
                                            color: 'gray',
                                        }]}>Time</Text>
                                        <Text style={[{
                                            flex: 1, flexWrap: 'wrap', fontSize: 14, // Adjust font size as needed
                                            fontWeight: 'bold', // Bold font for lab
                                        }]}>2 hours</Text>
                                    </View>
                                </View>



                                {/* --------- */}

                                <Text style={[{
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    alignItems: 'center',
                                    color: 'orange',
                                    marginTop: screenWidth * 0.02,
                                }]}>Date/Time</Text>
                                <Text style={[{
                                    fontSize: 14, // Adjust font size as needed
                                    fontWeight: 'bold', // Bold font for label
                                    color: 'black',
                                    marginTop: screenWidth * 0.02,
                                }]}>24 SUNDAY 12:30 - 14:20</Text>

                                {/* --------- */}

                                <Text style={[{
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    alignItems: 'center',
                                    color: 'orange',
                                    marginTop: screenWidth * 0.02,
                                }]}>Reservation</Text>
                                <View style={[{
                                    flexDirection: 'row', // Arrange items horizontally
                                    marginTop: 8,
                                }]}>

                                    <View style={[{ marginRight: 10, paddingHorizontal: 4, paddingVertical: 2, }]}>
                                        <Icon name="user" size={32} color="orange" />
                                    </View>


                                    <View style={[{
                                        flexDirection: 'column', // Arrange items horizontally
                                    }]}>
                                        <Text style={[{
                                            fontSize: 14, // Adjust font size as needed
                                            color: 'gray',
                                        }]}>Users</Text>
                                        <Text style={[{
                                            flex: 1, flexWrap: 'wrap', fontSize: 14, // Adjust font size as needed
                                            fontWeight: 'bold', // Bold font for lab
                                            marginTop: screenWidth * 0.01,

                                        }]}>Mr.Teerapong Longpenying</Text>
                                        <Text style={[{
                                            flex: 1, flexWrap: 'wrap', fontSize: 14, // Adjust font size as needed
                                            fontWeight: 'bold', // Bold font for lab
                                            marginTop: screenWidth * 0.01,

                                        }]}>Mrs.Susano Uchiha</Text>
                                        <Text style={[{
                                            flex: 1, flexWrap: 'wrap', fontSize: 14, // Adjust font size as needed
                                            fontWeight: 'bold', // Bold font for lab
                                            marginTop: screenWidth * 0.01,

                                        }]}>Ms.Singchai Areenaimpact</Text>
                                        <Text style={[{
                                            flex: 1, flexWrap: 'wrap', fontSize: 14, // Adjust font size as needed
                                            fontWeight: 'bold', // Bold font for lab
                                            marginTop: screenWidth * 0.01,

                                        }]}>Mr.Thanawan Sutthasena</Text>
                                        <Text style={[{
                                            flex: 1, flexWrap: 'wrap', fontSize: 14, // Adjust font size as needed
                                            fontWeight: 'bold', // Bold font for lab
                                            marginTop: screenWidth * 0.01,

                                        }]}>Mr.Tanatorn Yuwaawech</Text>
                                    </View>
                                </View>





                            </View>

                        </View>
                        <TouchableOpacity style={{ alignItems: 'center', marginBottom: 8 }}>
                            <View style={[{
                                backgroundColor: '#D7D7D7',
                                height: screenHeight * 0.06,
                                borderRadius: 20,
                                justifyContent: 'center',
                                alignItems: 'center',
                                elevation: 8,
                                marginTop: 16,
                                width: screenWidth * 0.9,
                            }]}>
                                <Text style={[{
                                    color: 'white',
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                }]}>Full</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>

                </View >
            </SafeAreaView >

        );
    }

}


const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    contentContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        elevation: 3,
    },
    formTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
    },
    detailsText: {
        color: 'orange',
        marginBottom: 20,
    },
    inputRow: {
        flexDirection: 'row', // Arrange inputs horizontally
        justifyContent: 'space-between', // Add space between inputs
    },
    inputContainer: {
        marginBottom: 20, //ยืด Container ขาว ๆ ลงล่าง
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 15,
        padding: '3%',
        fontSize: 16,
        height: 40,
        width: screenWidth * 0.35,
    },

});

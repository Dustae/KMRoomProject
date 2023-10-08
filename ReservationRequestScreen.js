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




export default class ReservationRequestScreen extends Component {
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
            <SafeAreaView style={{ flex: 1 }}>
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
                            <Text style={styles.formTitle}>Library Request</Text>
                            <Text style={styles.detailsText}>
                                KU-Jong | Time : 14:30 - 16:20 | 1 Oct 2023
                            </Text>

                            <View style={styles.inputRow}>
                                <View style={styles.inputContainer}>
                                    <Text style={[styles.label, { marginBottom: 10 }]}>Student ID:</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Student ID"
                                        onChangeText={(text) => this.setState({ studentID: text })}
                                        value={this.state.studentID}
                                    />
                                </View>


                                <View style={styles.inputContainer}>
                                    <Text style={[styles.label, { marginBottom: 10 }]}>Name</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Name"
                                        onChangeText={(text) => this.setState({ name: text })}
                                        value={this.state.name}
                                    />
                                </View>
                            </View>
                            <View style={styles.inputRow}>
                                <View style={styles.inputContainer}>
                                    <Text style={[styles.label, { marginBottom: 10 }]}>Service group</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Bachelor"
                                        onChangeText={(text) => this.setState({ studentID: text })}
                                        value={this.state.studentID}
                                    />
                                </View>


                                <View style={styles.inputContainer}>
                                    <Text style={[styles.label, { marginBottom: 10 }]}> </Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Computer Engineering"
                                        onChangeText={(text) => this.setState({ name: text })}
                                        value={this.state.name}
                                    />
                                </View>
                            </View>

                            <View style={[{
                                flexDirection: 'column',
                                marginBottom: 20,
                            }]}>
                                <Text style={[{
                                    marginRight: 10,
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    marginBottom: 10,
                                }]}>Request for</Text>
                                <TouchableOpacity style={[{
                                    flex: 1,
                                    borderWidth: 1,
                                    borderColor: 'gray',
                                    borderRadius: 15,
                                    padding: 10,
                                    flexDirection: 'row', // Add flexDirection to align icon and text horizontally
                                    justifyContent: 'space-between', // Add this to space out icon and text
                                    alignItems: 'center', // Center items vertically
                                }]} onPress={this.toggleDropdown}>
                                    <Text style={{ color: 'gray' }}>{selectedOption || 'Select an option'}</Text>
                                    <Icon name="angle-down" size={20} color="orange" />
                                </TouchableOpacity>
                                {isDropdownOpen && (
                                    <View style={[{
                                        top: '5%',
                                        left: 0,
                                        right: 0,
                                        borderWidth: 1,
                                        borderColor: 'gray',
                                        borderRadius: 15,
                                        backgroundColor: 'white',
                                        overflow: 'hidden',
                                        height: dropdownHeight,
                                    }]}>
                                        {options.map((option, index) => (
                                            <TouchableOpacity
                                                key={index}
                                                style={[{
                                                    padding: 10,
                                                    borderBottomWidth: 0,
                                                    borderBottomColor: 'gray',
                                                }]}
                                                onPress={() => this.selectOption(option)}
                                            >
                                                <Text style={[{ color: 'gray', }]}>{option}</Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                )}
                            </View>

                            <View style={[{ padding: 16, }]}>
                                <Text style={[{
                                    marginRight: 10,
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    marginBottom: 10,
                                }]}>Please Specify: Username/Student ID</Text>
                                <View style={[{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginBottom: 10,
                                }]}>

                                    <Text style={[{
                                        fontSize: 18,
                                        marginRight: 10,
                                        fontWeight: 'bold',
                                    }]}>1.</Text>
                                    <TextInput
                                        style={[{
                                            flex: 1,
                                            borderColor: 'gray',
                                            borderWidth: 1,
                                            borderRadius: 15,
                                            padding: 10,
                                        }]}
                                        placeholder=""
                                    />
                                </View>
                                <View style={[{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginBottom: 10,
                                }]}>
                                    <Text style={[{
                                        fontSize: 18,
                                        marginRight: 10, fontWeight: 'bold',
                                    }]}>2.</Text>
                                    <TextInput
                                        style={[{
                                            flex: 1,
                                            borderColor: 'gray',
                                            borderWidth: 1,
                                            borderRadius: 15,
                                            padding: 10,
                                        }]}
                                        placeholder=""
                                    />
                                </View>
                                <View style={[{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginBottom: 10,
                                }]}>
                                    <Text style={[{
                                        fontSize: 18,
                                        marginRight: 10, fontWeight: 'bold',
                                    }]}>3.</Text>
                                    <TextInput
                                        style={[{
                                            flex: 1,
                                            borderColor: 'gray',
                                            borderWidth: 1,
                                            borderRadius: 15,
                                            padding: 10,
                                        }]}
                                        placeholder=""
                                    />
                                </View>
                                <View style={[{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginBottom: 10,
                                }]}>
                                    <Text style={[{
                                        fontSize: 18,
                                        marginRight: 10, fontWeight: 'bold',
                                    }]}>4.</Text>
                                    <TextInput
                                        style={[{
                                            flex: 1,
                                            borderColor: 'gray',
                                            borderWidth: 1,
                                            borderRadius: 15,
                                            padding: 10,
                                        }]}
                                        placeholder=""
                                    />
                                </View>
                                <View style={[{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginBottom: 10,
                                }]}>
                                    <Text style={[{
                                        fontSize: 18,
                                        marginRight: 10, fontWeight: 'bold',
                                    }]}>5.</Text>
                                    <TextInput
                                        style={[{
                                            flex: 1,
                                            borderColor: 'gray',
                                            borderWidth: 1,
                                            borderRadius: 15,
                                            padding: 10,
                                        }]}
                                        placeholder=""
                                    />
                                </View>
                            </View>


                            <View style={[{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }]}>
                                {/* Other content goes here */}
                                <TouchableOpacity style={[{
                                    backgroundColor: 'orange',
                                    padding: 16,
                                    borderRadius: 15,
                                    width: '60%',
                                }]} onPress={handleSubmission}>
                                    <Text style={[{
                                        color: 'white',
                                        fontSize: 16,
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                    }]}>Submit</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>

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

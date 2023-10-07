import { style } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import React, { Component, useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, Dimensions, StatusBar, Animated, TextInput, Modal, UIManager, findNodeHandle } from 'react-native';
import { ScrollView, Image } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import Gradient from './Gradient'; // Import the Gradient component
import { LinearGradient } from "expo-linear-gradient";
import { customText } from 'react-native-paper';
import IconM from 'react-native-vector-icons/MaterialIcons';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


export default class ReservationRequestScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentID: '', // Student ID input value
            name: '', // Name input value

            isDropdownVisible: false,
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
            isDropdownVisible: false,
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

    render() {
        const { isDropdownVisible, selectedOption, options, inputBoxPosition, isDropdownOpen } = this.state;
        return (
            <View>
                <ScrollView
                    contentContainerStyle={styles.scrollViewContainer}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.contentContainer}>
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
                            }]}>Request for</Text>
                            <TouchableOpacity style={[{
                                flex: 1, // Takes remaining width
                                borderWidth: 1,
                                borderColor: 'gray',
                                borderRadius: 15,
                                padding: 10,
                            }]} onPress={this.toggleDropdown}>
                                <Text style={[{ color: 'gray', }]}>Select an option</Text>
                            </TouchableOpacity>
                            {isDropdownOpen && (
                                <View style={[{
                                    position: 'absolute',
                                    top: 50, // Position below the input box
                                    left: 100, // Adjust as needed
                                    width: 200, // Adjust as needed
                                    borderColor: 'gray',
                                    borderWidth: 0.5,
                                    borderRadius: 15,
                                    backgroundColor: 'white',
                                }]}>
                                    <TouchableOpacity style={[{
                                        padding: 10,
                                        borderBottomWidth: 1,
                                        borderBottomColor: 'gray',
                                    }]}>
                                        <Text style={[{ color: 'gray', }]}>Option 1</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[{
                                        padding: 10,
                                        borderBottomWidth: 1,
                                        borderBottomColor: 'gray',
                                    }]}>
                                        <Text style={[{ color: 'gray', }]}>Option 2</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[{
                                        padding: 10,
                                        borderBottomWidth: 1,
                                        borderBottomColor: 'gray',
                                    }]}>
                                        <Text style={[{ color: 'gray', }]}>Option 3</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[{
                                        padding: 10,
                                        borderBottomWidth: 1,
                                        borderBottomColor: 'gray',
                                    }]}>
                                        <Text style={[{ color: 'gray', }]}>Option 4</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </View>

                    </View>
                </ScrollView>
            </View>

        );
    }

}


const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    contentContainer: {
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

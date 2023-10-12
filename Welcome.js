import { View, Text, Pressable, Image ,Dimensions} from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import COLORS from './assets/colors';
import Button from './assets/button';



const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const imageSize = Math.min(screenWidth, screenHeight) * 0.9;

const Welcome = ({ navigation }) => {

    return (
        <LinearGradient
            style={{
                flex: 1
                
            }}
            colors={[
                COLORS.white, 
                COLORS.white
            ]}>
            <View style={{ 
                paddingHorizontal: 22,
                position: "absolute",
                top: 50,
                width: "100%",
                flex: 1 
            }}>
              
                <View>
                    <Image
                            source={require("./picture/logo.png")}
                            style={{
                                height: 100,
                                width: 160,
                                top: 10,
            
                            }}
                        />
                    <Text style={{
                            paddingTop:20,
                            fontSize: 30,
                            fontWeight: 600,
                            color: COLORS.black
                        }}>Welcome to</Text>
                        <Text style={{
                            fontSize: 27,
                            fontWeight: 600,
                            color: COLORS.black
                        }}>KMUTT LiB</Text>

                </View>
                <View>
                <Image
                            source={require("./picture/iconWelcome.png")}
                            style={{
                                top:screenHeight * 0.03,
                                height: screenHeight * 0.6,
                                width: "100%",
                                // marginLeft: 22
                                
                            
                            }}
                        />
                </View>
                <View style={{
                    // borderColor: COLORS.primary,
                    paddingHorizontal: 0,
                    position: "absolute",
                    top: screenHeight * 0.75,
                    width: "100%",
                    marginLeft: 22
                    // justifyContent: "center"
                }}>

                    <Button
                        title="Sign in with Email"
                        onPress={() => navigation.navigate("LoginFIFA")}
                        style={{
                            marginTop: 22,
                            borderColor: COLORS.primary,
                            width: "100%",
                            color: COLORS.black
                        }}
                    />
                    <Button
                        title="Login with guest"
                        onPress={() => navigation.navigate("LoginFIFA")}
                        style={{
                            marginTop: 22,
                            borderColor: COLORS.grey,
                            backgroundColor: COLORS.grey,
                            // textColor: 
                            width: "100%",
                            color: COLORS.black
                        }}
                    />
{/* 
                    <View style={{
                        flexDirection: "row",
                        marginTop: 12,
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.primary
                        }}>Already have an account ?</Text>
                        
                        <Pressable
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text style={{
                                fontSize: 16,
                                color: COLORS.primary,
                                fontWeight: "bold",
                                marginLeft: 4
                            }}>Login</Text>
                        </Pressable>

                    </View> */}
                </View>
            </View>
        </LinearGradient>
    )
}

export default Welcome
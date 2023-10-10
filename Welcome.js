import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import COLORS from './fifa/colors';
import Button from './fifa/button';

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
                                width: 100,
                                borderRadius: 20,
                                top: 10,
                            }}
                        />
                    <Text style={{
                            paddingTop:20,
                            fontSize: 50,
                            fontWeight: 800,
                            color: COLORS.black
                        }}>Welcome to</Text>
                        <Text style={{
                            fontSize: 46,
                            fontWeight: 800,
                            color: COLORS.black
                        }}>Kujong</Text>

                </View>

                <View style={{
                    borderColor: COLORS.primary,
                    paddingHorizontal: 0,
                    position: "absolute",
                    top: 600,
                    width: "100%",
                    marginLeft: 22
                    // justifyContent: "center"
                }}>

                    <Button
                        title="Join Now"
                        onPress={() => navigation.navigate("Login")}
                        style={{
                            marginTop: 22,
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
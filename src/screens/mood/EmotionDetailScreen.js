import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, ScrollView, TouchableWithoutFeedback, ImageBackground, Image } from 'react-native';
import { Directions } from 'react-native-gesture-handler';


const EmotionDetailScreen = ({ navigation }) => {
    

    const [mood, setMood] = React.useState('')

    return (
        <View style={styles.container}>
            
            <ScrollView>
                <Text/>
                <Text style={styles.titleText}>Choose what emotion applies today</Text>
                <Text/>
                <View style={styles.flexBox1}>

                    <View style={styles.flexBox2}>
                        <ImageBackground 
                        style={styles.backroundStyles} 
                        source={require("./assests/circle.png")}>
                            <TouchableWithoutFeedback 
                            onPress={() => navigation.navigate('Journal')}>
                                <Image 
                                style={styles.buttonStyles} 
                                source={require("./assests/noun_dead_14700.png")}/>
                            </TouchableWithoutFeedback>
                        </ImageBackground>
                        <Text style={styles.textStyles}>Frazzled</Text>
                        <ImageBackground 
                        style={styles.backroundStyles} 
                        source={require("./assests/dark_blue.png")}>
                            <TouchableWithoutFeedback 
                            onPress={() => navigation.navigate('Journal')}>
                                <Image 
                                style={styles.buttonStyles} 
                                source={require("./assests/noun_Sad_14699.png")}/>
                            </TouchableWithoutFeedback>
                        </ImageBackground>
                        <Text style={styles.textStyles}>Sad</Text>
                        <ImageBackground 
                        style={styles.backroundStyles} 
                        source={require("./assests/red_circle.png")}>
                            <TouchableWithoutFeedback 
                            onPress={() => navigation.navigate('Journal')}>
                                <Image 
                                style={styles.buttonStyles} 
                                source={require("./assests/noun_angry_14760.png")}/>
                            </TouchableWithoutFeedback>
                        </ImageBackground>
                        <Text style={styles.textStyles}>Angry</Text>
                        <ImageBackground 
                        style={styles.backroundStyles} 
                        source={require("./assests/pink.png")}>
                            <TouchableWithoutFeedback 
                            onPress={() => navigation.navigate('Journal')}>
                                <Image 
                                style={styles.buttonStyles} 
                                source={require("./assests/noun_cry_14757.png")}/>
                            </TouchableWithoutFeedback>
                        </ImageBackground>
                        <Text style={styles.textStyles}>Anxious</Text>
                    </View>

                    <View style={styles.flexBox2}>
                    <ImageBackground 
                        style={styles.backroundStyles} 
                        source={require("./assests/green.png")}>
                            <TouchableWithoutFeedback 
                            onPress={() => navigation.navigate('Journal')}>
                                <Image 
                                style={styles.buttonStyles} 
                                source={require("./assests/noun_Happy_14703.png")}/>
                            </TouchableWithoutFeedback>
                        </ImageBackground>
                        <Text style={styles.textStyles}>Happy</Text>
                        <ImageBackground 
                        style={styles.backroundStyles} 
                        source={require("./assests/light_green.png")}>
                            <TouchableWithoutFeedback 
                            onPress={() => navigation.navigate('Journal')}>
                                <Image 
                                style={styles.buttonStyles} 
                                source={require("./assests/noun_squint_14705.png")}/>
                            </TouchableWithoutFeedback>
                        </ImageBackground>
                        <Text style={styles.textStyles}>Content</Text>
                        <ImageBackground 
                        style={styles.backroundStyles} 
                        source={require("./assests/yellow.png")}>
                            <TouchableWithoutFeedback 
                            onPress={() => navigation.navigate('Journal')}>
                                <Image 
                                style={styles.buttonStyles} 
                                source={require("./assests/noun_shocked_14702.png")}/>
                            </TouchableWithoutFeedback>
                        </ImageBackground>
                        <Text style={styles.textStyles}>Shocked</Text>
                        <ImageBackground 
                        style={styles.backroundStyles} 
                        source={require("./assests/orange.png")}>
                            <TouchableWithoutFeedback 
                            onPress={() => navigation.navigate('Journal')}>
                                <Image 
                                style={styles.buttonStyles} 
                                source={require("./assests/noun_Neutral_14701.png")}/>
                            </TouchableWithoutFeedback>
                        </ImageBackground>
                        <Text style={styles.textStyles}>Fine</Text>
                    </View>


                    
                </View>
                <Text style={styles.titleText}>Write in</Text>
                <TextInput style={styles.inputStyles} value={mood} multiline={true} maxLength={80} onChangeText={(text) => setMood(text)}/>
                <View style={styles.flexBox3}><Button
                  onPress={() => alert("Mood Saved")}
                  title="Save mood"
                  
                />
                <Button style={styles.statsButton} labelStyle={styles.statsButtonText}
                  onPress={() => alert("Mood Removed")}
                  title="Remove mood"
                  
                /></View>
                <View style={styles.flexBox3}>
                <Button style={styles.statsButton} labelStyle={styles.statsButtonText}
                  onPress={() => navigation.navigate('Journal')}
                  title="Next"
                  
                />
                </View>

                <Text style={styles.textStyles2}>Icons created by Austin Condiff from Noun Project</Text>
            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121212',
        
    },
    
    titleText:{
        color: 'white',
        fontSize: 30, 
        textAlign: 'center',
        fontWeight: 'bold' ,
    
    },
    textStyles: {
        color: 'white',
        fontSize: 30,
        padding: 10,

    },
    textStyles2: {
        
        color: 'white',
        justifyContent: 'flex-end',
        alignSelf:'center',
        alignItems: 'center',
        fontSize: 12
    }, 
    flexBox1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        
    },
    flexBox2: {
        flex: 1,
        flexDirection: 'column',
        alignItems:'center',        
        
    },
    flexBox3: {
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        justifyContent: 'space-around',
        padding: 10,
        
        
        
    },
    
    inputStyles: {
        backgroundColor: 'white',
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5,
        marginHorizontal: 15,
        width: "92%"
    },
    backroundStyles: {
        flex: 1,
        justifyContent: 'center',
        width: 150,
        height: 150,       
    },
    buttonStyles: {
        
        width: 150,
        height: 150,       
    },
    statsButton: {
        height: 50,
    },
    statsButtonContent: {
        height: 100,
    }, 
})

export default EmotionDetailScreen;
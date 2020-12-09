import React from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, ImageBackground} from 'react-native';
import {Colors} from '../../components/DarkTheme';

const MainMoodScreen = ({ navigation }) => {
    
    return (
        
        <View style={styles.container}>
            <Text style={styles.header}>How are you feeling today?</Text>
            <View style ={styles.moods}>

                <ImageBackground 
                style={styles.backroundStyles} 
                source={require("./assests/red_circle.png")}>
                    <TouchableWithoutFeedback 
                    onPress={() => navigation.navigate('EmotionDetail')}>
                        <Image 
                        style={styles.buttonStyles} 
                        source={require("./assests/noun_dead_14700.png")}/>
                    </TouchableWithoutFeedback>
                </ImageBackground>

                <ImageBackground 
                style={styles.backroundStyles} 
                source={require("./assests/orange.png")}>
                    <TouchableWithoutFeedback 
                    onPress={() => navigation.navigate('EmotionDetail')}>                        
                        <Image 
                        style={styles.buttonStyles} 
                        source={require("./assests/noun_Sad_14699.png")}/>                  
                    </TouchableWithoutFeedback>
                </ImageBackground>

                <ImageBackground 
                style={styles.backroundStyles} 
                source={require("./assests/yellow.png")}>
                    <TouchableWithoutFeedback 
                    onPress={() => navigation.navigate('EmotionDetail')}>
                        <Image 
                        style={styles.buttonStyles} 
                        source={require("./assests/noun_Neutral_14701.png")}/>                
                    </TouchableWithoutFeedback>
                </ImageBackground>

                <ImageBackground style={styles.backroundStyles} 
                source={require("./assests/light_green.png")}>
                    <TouchableWithoutFeedback 
                    onPress={() => navigation.navigate('EmotionDetail')}>
                        <Image 
                        style={styles.buttonStyles} 
                        source={require("./assests/noun_Happy_14703.png")}/>                
                    </TouchableWithoutFeedback>
                </ImageBackground>

                <ImageBackground style={styles.backroundStyles} 
                source={require("./assests/green.png")}>
                    <TouchableWithoutFeedback 
                    onPress={() => navigation.navigate('EmotionDetail')}>
                        <Image 
                        style={styles.buttonStyles} 
                        source={require("./assests/noun_excited_14706.png")}/>                
                    </TouchableWithoutFeedback>
                </ImageBackground>
                
                
            </View>
            <View style ={{ flexDirection:'row'}}>
                
                <Text style={styles.ratingStyles}> 1</Text>
                <Text style={styles.spacerStyles}/>
                <Text style={styles.ratingStyles}>  2</Text>
                <Text style={styles.spacerStyles}/>
                <Text style={styles.ratingStyles}>  3</Text>
                <Text style={styles.spacerStyles}/>
                <Text style={styles.ratingStyles}>  4</Text>
                <Text style={styles.spacerStyles}/>
                <Text style={styles.ratingStyles}>  5</Text>
                <Text style={{width:15}}/>

            </View>
            <Text style={styles.textStyles2}>Icons created by Austin Condiff from Noun Project</Text>
                        
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    moods: {
        flexDirection:'row', 
        justifyContent: 'center',
    },
    header: {
        marginTop: 'auto',
        paddingBottom: 10,
        color: Colors.text.primary,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30
    },  
    textStyles2: {
        color: Colors.text.secondary,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 'auto',
        fontSize: 12
    },  
    buttonStyles: {
        
        opacity: 0.7,
        width: 75,
        height: 75,       
    },
    backroundStyles: {
        flex: 1,
        justifyContent: 'center',
        width: 75,
        height: 75,       
    },
    ratingStyles: {  
        color: Colors.text.primary,
        fontSize:40       
    },
    spacerStyles:{
        width: 32
    }
});

export default MainMoodScreen;
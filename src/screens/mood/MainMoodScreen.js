import React from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, ImageBackground} from 'react-native';

const MainMoodScreen = ({ navigation }) => {
    
    return (
        
        <View style={styles.container}>
            <Text style={styles.textStyles}>How are you feeling today?</Text>
            <Text/> 
            <Text/> 
            <Text/>
            <View style ={{ flexDirection:'row'}}>
                
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
            <Text/>
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#71B2E1',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyles: {
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30
    },    
    buttonStyles: {
        
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
        fontSize:40       
    },
    spacerStyles:{
        width: 35
    }
});

export default MainMoodScreen;
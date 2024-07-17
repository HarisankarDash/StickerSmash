import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Image } from 'react-native';

const WelcomeScreen = ({ onNavigate }) => {
    return (
        <ImageBackground 
            source={require('../assets/img10.jpg')} 
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <View style={styles.transparentBox}>
                    <Image 
                        source={require('../assets/img11.png')} // Ensure this path is correct
                        style={styles.logo}
                        resizeMode="contain" // Adjust this to fit the logo appropriately
                    />
                    <Text style={styles.title}>GET STARTED WITH SHOPSPHERE</Text>
                    <View style={styles.buttonContainer}>
                        <Button title="Already have an account? Login here" onPress={() => onNavigate('Login')} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button title="GET STARTED!!" onPress={() => onNavigate('Signup')} />
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Add a semi-transparent overlay for better text visibility
    },
    transparentBox: {
        width: '80%',
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
        borderRadius: 10,
        alignItems: 'center',
    },
    logo: {
        width: 100, // Adjust width as needed
        height: 100, // Adjust height as needed
        marginBottom: 20,
        
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: 'black', // Text color for visibility
        textAlign: 'center', // Center align the text
    },
    buttonContainer: {
        marginVertical: 10, // Add vertical margin to separate buttons
        width: '100%', // Ensure buttons take up the full width of the transparent box
    },
});

export default WelcomeScreen;

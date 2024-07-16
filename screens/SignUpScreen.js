import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground, Image } from 'react-native';

const SignupScreen = ({ onNavigate }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = () => {
        if (password === confirmPassword) {
            // Perform signup logic here
            // For example, call an API to create a new user account
            // After successful signup, navigate to Login page
            onNavigate('Login');
        } else {
            alert('Passwords do not match');
        }
    };

    return (
        <ImageBackground 
            source={require('../assets/img10.jpg')} 
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Image 
                        source={require('../assets/img11.png')} // Adjust this path as per your logo
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <Text style={styles.title}>Sign Up</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Email" 
                        value={email} 
                        onChangeText={setEmail} 
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder="Password" 
                        secureTextEntry 
                        value={password} 
                        onChangeText={setPassword} 
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder="Confirm Password" 
                        secureTextEntry 
                        value={confirmPassword} 
                        onChangeText={setConfirmPassword} 
                    />
                    <View style={styles.buttonContainer}>
                        <Button title="Sign Up" style={styles.button} onPress={handleSignup} />
                        <Button title="Back to Welcome" style={styles.button} onPress={() => onNavigate('Welcome')} />
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
    },
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 5,
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 15,
        width: '80%',
        alignItems: 'center',
    },
    logo: {
        width: 100, // Adjust width as needed
        height: 100, // Adjust height as needed
        marginBottom: 20,
        opacity: 0.8, // Adjust opacity for transparency
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
        color: 'black', // Text color
    },
    input: {
        height: 50,  
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
        backgroundColor: 'white',
        borderRadius: 5, 
        width: '100%', // Ensure input takes full width
    },
    buttonContainer: {
        flexDirection: 'column',
        gap: 10,
        width: '100%',
    },
    button: {
        marginBottom: 10,
    },
});

export default SignupScreen;

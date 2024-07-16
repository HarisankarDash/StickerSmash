import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

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
        <View style={styles.container}>
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
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 5,
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 15,
        width: '80%'
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        height: 50,  
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
        backgroundColor: 'white',
        borderRadius: 5, 
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

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WelcomeScreen = ({ onNavigate }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome</Text>
            <Button title="Login" onPress={() => onNavigate('Login')} />
            <Button title="Sign Up" onPress={() => onNavigate('Signup')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default WelcomeScreen;

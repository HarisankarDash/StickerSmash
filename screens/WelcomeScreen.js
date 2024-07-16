import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WelcomeScreen = ({ onNavigate }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>GET STARTED WITH SHOPSPHERE</Text>
            <Button title="Already have an account? Login here" onPress={() => onNavigate('Login')} />
            <Button title="                          GET STARTED!!                            " onPress={() => onNavigate('Signup')} />
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

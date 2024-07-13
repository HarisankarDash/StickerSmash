import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AnotherWelcomeScreen = ({ onSignOut, onNavigate }) => {

    const handleSignOut = () => {
        onSignOut();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Another Welcome Screen</Text>
            <Button title="Sign Out" onPress={handleSignOut} />
            <Button title="Navigate Back to Welcome" onPress={onNavigate} />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default AnotherWelcomeScreen;

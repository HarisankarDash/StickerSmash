import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const SignupScreen = ({ onNavigate }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <View>
                <TextInput style={styles.input} placeholder="Email" />
            </View>
            <View>
                <TextInput style={styles.input} placeholder="Password" secureTextEntry />
            </View>
            <View>
                <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Login" style={styles.button} onPress={() => {}} />
                <View style={styles.space} /> {/* Space between buttons */}
                <Button title="Back to Welcome" style={styles.button} onPress={() => onNavigate('Welcome')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    space: {
        width: 10,
    },
});

export default SignupScreen;

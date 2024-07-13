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
      gap: 10 ,
      width: '100%',
  },
  space: {
      width: 10,
  },
});

export default SignupScreen;

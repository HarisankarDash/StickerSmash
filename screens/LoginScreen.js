import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';

const LoginScreen = ({ onLogin, onNavigate }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = () => {
        onLogin(email, password);
    };
    return (
     
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <View>
                <TextInput value={email} style={styles.input} placeholder="Email" onChangeText={newText => setEmail(newText)} />
                </View>
               <View>
               <TextInput value={password}  style={styles.input} placeholder="Password" secureTextEntry onChangeText={newText => setPassword(newText)} />
               </View>
                <View style={styles.buttonContainer}>
                    <Button title="Login" style={styles.button} onPress={() => {handleLogin()}} />
                    <Button title="Back to Welcome" style={styles.button} onPress={() => onNavigate('Welcome')} />
                </View>
            </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
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
        width: '100%',  // Set to full width of the container
        height: 50,  // Adjust the height as needed
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
        backgroundColor: 'white',
        borderRadius: 5,  // Optional: for rounded corners
    },
    buttonContainer: {
        flexDirection: 'column',
        gap: 10 ,
        width: '100%',
    },
    space: {
        width: 10, // Adjust the space between buttons as needed
    },
});

export default LoginScreen;

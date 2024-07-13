import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignUpScreen';

const App = ({ onNavigate }) => {
   const [page, setPage] = useState('Welcome');

   const render = () => {
    switch(page) {
        case 'Welcome':
            return <WelcomeScreen onNavigate={(data) => setPage(data)}/>;
    case 'Login':
            return <LoginScreen onNavigate={(data) => setPage(data)}/>;
    case 'Signup':
            return <SignupScreen onNavigate={(data) => setPage(data)}/>;
     default:
          return <WelcomeScreen onNavigate={(data) => setPage(data)}/>;

    }
   }


    return (
        <View style={styles.container}>
            {render()}
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

export default App;

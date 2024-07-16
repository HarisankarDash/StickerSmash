import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import AnotherWelcomeScreen from './screens/AnotherWelcomeScreen';
import SignupScreen from './screens/SignupScreen';
import HelpScreen from './screens/HelpScreen'; // Ensure HelpScreen import is correct and matches file name

const App = () => {
    const [page, setPage] = useState('Welcome');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (email, password) => {
        // Check if the entered credentials are correct
        if (email === 'hari@123' && password === '1234') {
            setIsLoggedIn(true);
            setPage('AnotherWelcome');
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setPage('Welcome');
    };

    const unnavigate = () => {
        // Implement logic to unnavigate or reset state
        setPage('Welcome'); // For example, resetting to WelcomeScreen
    };

    const renderScreen = () => {
        switch (page) {
            case 'Welcome':
                return <WelcomeScreen onNavigate={setPage} />;
            case 'Login':
                return <LoginScreen onLogin={handleLogin} onNavigate={setPage} />;
            case 'AnotherWelcome':
                return <AnotherWelcomeScreen onSignOut={handleLogout} onNavigate={setPage} />;
            case 'Signup':
                return <SignupScreen onNavigate={setPage} />;
            case 'Help':
                return <HelpScreen onNavigate={setPage} />; // Rendering HelpScreen
            default:
                return <WelcomeScreen onNavigate={setPage} />;
        }
    };

    return (
        <View style={styles.container}>
            {renderScreen()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;

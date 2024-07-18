import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import AnotherWelcomeScreen from './screens/Product';
import SignupScreen from './screens/SignupScreen';
import HelpScreen from './screens/HelpScreen';
import FavoritesScreen from './screens/Favorite';
import { FavoritesProvider } from './screens/FavoritesContext'; // Ensure this matches your context file

const App = () => {
    const [page, setPage] = useState('Welcome');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (email, password) => {
        // Check if the entered credentials are correct
        if (email === 'hari@123' && password === '1234') {
            setIsLoggedIn(true);
            setPage('Product'); // Navigate to Product screen after successful login
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setPage('Welcome'); // Navigate to Welcome screen after logout
    };

    const renderScreen = () => {
        switch (page) {
            case 'Welcome':
                return <WelcomeScreen onNavigate={setPage} />;
            case 'Login':
                return <LoginScreen onLogin={handleLogin} onNavigate={setPage} />;
            case 'Product':
                return <AnotherWelcomeScreen onSignOut={handleLogout} onNavigate={setPage} />;
            case 'Signup':
                return <SignupScreen onNavigate={setPage} />;
            case 'Help':
                return <HelpScreen onNavigate={setPage} />; // Rendering HelpScreen
            case 'Favorites':
                return <FavoritesScreen onNavigate={setPage} />;
            default:
                return <WelcomeScreen onNavigate={setPage} />;
        }
    };

    return (
        <FavoritesProvider>
            <View style={styles.container}>
                {renderScreen()}
            </View>
        </FavoritesProvider>
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

import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native';

const HelpScreen = ({ onNavigate }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    const handleGoBack = () => {
        onNavigate('Product'); // Navigate back to AnotherWelcomeScreen
    };

    const screenWidth = Dimensions.get('window').width;

    return (
        <View style={[styles.container, isDarkTheme ? styles.darkContainer : null]}>
            <View style={styles.content}>
                <Text style={styles.helpText}>Welcome to Our Help Desk!
Frequently Asked Questions (FAQs)
1. How do I place an order?

To place an order, browse our catalog, select the items you wish to purchase, and proceed to checkout. Follow the prompts to enter your shipping and payment information to complete your order.
2. Can I track my order?

Yes, you can track your order status by logging into your account and navigating to the 'Order History' section. Alternatively, you will receive email updates with tracking information once your order has shipped.
3. What payment methods do you accept?

We accept major credit cards (Visa, MasterCard, American Express), PayPal, and other secure payment methods available at checkout.
4. How do I return or exchange an item?

For information on returns or exchanges, please visit our Returns & Exchanges Policy page for detailed instructions. You can also contact our customer support team for assistance.</Text>
                {/* Add your help content here */}
            </View>
            <Pressable style={[styles.backButton, { left: screenWidth * 0.05 }]} onPress={handleGoBack}>
                <Text style={styles.backButtonText}>Back</Text>
            </Pressable>
            <Pressable style={[styles.themeButton, { right: screenWidth * 0.05 }]} onPress={toggleTheme}>
                <Text style={styles.themeButtonText}>
                    {isDarkTheme ? 'Light Theme' : 'Dark Theme'}
                </Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // Default light theme background
    },
    darkContainer: {
        backgroundColor: '#000',
        width : "100%" // Dark theme background
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    helpText: {
        color: '#FFD700', // yellow color
        fontSize: 18,
    },
    backButton: {
        position: 'absolute',
        top: 20, // Adjust the top distance from the top edge
        backgroundColor: '#007AFF', // Adjust button color as needed
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    backButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    themeButton: {
        position: 'absolute',
        bottom: 20, // Adjust the bottom distance from the bottom edge
        backgroundColor: '#FFD700',
        padding: 10,
        borderRadius: 5,
    },
    themeButtonText: {
        color: '#000',
        fontWeight: 'bold',
    },
});

export default HelpScreen;


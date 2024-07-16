import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, ScrollView, Image } from 'react-native';
import HelpScreen from './HelpScreen'; // Ensure HelpScreen import is correct and matches file name

const AnotherWelcomeScreen = ({ onSignOut, onNavigate, username }) => {
    const handleSignOut = () => {
        onSignOut();
    };

    const handleHelp = () => {
        onNavigate('Help'); // Ensure this matches the component name in switch case
    };

    const cards = [
        {
            name: 'Nike Domain 2 Cricket Shoes - Steel Spikes',
            info: 'MRP₹10,495',
            image: require('../assets/img1.jpg'),
        },
        {
            name: 'SS Sky MS English Willow Cricket Bat SH',
            info: 'MRP₹17,495',
            image: require('../assets/img2.jpg'),
        },
        {
            name: 'GRAY-NICOLLS GOLD EDITION - BATTING PADS',
            info: 'MRP₹6,495',
            image: require('../assets/img3.jpg'),
        },
        {
            name: 'Navy Blue SHREY Masterclass Air 2.0 Stainless Steel Cricket Helmet, Size: Standard',
            info: 'MRP₹10,495',
            image: require('../assets/img4.jpg'),
        },
        {
            name: 'BAS Batting Gloves',
            info: 'MRP₹3,495',
            image: require('../assets/img5.jpg'),
        },
        {
            name: 'Passion Cricket Sunglass',
            info: 'MRP₹3,002',
            image: require('../assets/img6.jpg'),
        },
        {
            name: 'FORTRESS CLUB CROWN CRIC',
            info: 'MRP₹2,002',
            image: require('../assets/img7.jpg'),
        },
        {
            name: 'SAREEN SPORTS Cricket Panama Hat; Multi-color',
            info: 'MRP₹1,002',
            image: require('../assets/img8.jpg'),
        },
    ];

    return (
        <ImageBackground 
            source={require('../assets/img10.jpg')} 
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <View style={styles.header}>
                    <Image source={require('../assets/img11.png')} style={styles.logo} />
                    <Text style={styles.username}>EXPLORE {username}</Text>
                </View>
                <Text style={styles.title}>PICK 2 GET 1 FREE!!</Text>
                <ScrollView contentContainerStyle={styles.cardsContainer}>
                    {cards.map((card, index) => (
                        <View key={index} style={styles.card}>
                            <Image source={card.image} style={styles.cardImage} />
                            <Text style={styles.cardName}>{card.name}</Text>
                            <Text style={styles.cardInfo}>{card.info}</Text>
                        </View>
                    ))}
                </ScrollView>
                <View style={styles.helpContainer}>
                    <Button title="Help" onPress={handleHelp} />
                </View>
                <View style={styles.signOutContainer}>
                    <Button title="Sign Out" onPress={handleSignOut} />
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlay: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 40, // Adjust top padding to create space for username and title
        paddingBottom: 20, // Adjust bottom padding for sign out button
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20, // Adjust margin top for gap from top boundary
    },
    logo: {
        width: 50, // Adjust as needed
        height: 50, // Adjust as needed
        marginRight: 10,
        borderRadius:40, // Adjust as needed
    },
    title: {
        fontSize: 24,
        marginTop: 20,
        marginBottom: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    username: {
        fontSize: 20,
        color: '#fff',
    },
    cardsContainer: {
        alignItems: 'center',
        paddingBottom: 20,
    },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        alignItems: 'center',
        width: '90%',
    },
    cardImage: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    cardName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    cardInfo: {
        fontSize: 14,
        marginTop: 10,
        textAlign: 'center',
    },
    helpContainer: {
        position: 'absolute',
        bottom: 20, // Adjust as needed
        left: 20, // Adjust as needed
    },
    signOutContainer: {
        position: 'absolute',
        bottom: 20, // Adjust as needed
        right: 20, // Adjust as needed
    },
});

export default AnotherWelcomeScreen;

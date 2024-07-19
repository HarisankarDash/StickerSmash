import React, { useMemo } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFavorites } from './FavoritesContext';

const logoImage = require('../assets/img14.png');

const AnotherWelcomeScreen = ({ onSignOut, onNavigate }) => {
    const { favorites, toggleFavorite } = useFavorites();

    const favoriteCount = useMemo(() => favorites.length, [favorites]);

    const handleFavorites = () => {
        onNavigate('Favorites'); // Navigate to Favorites screen
    };

    const handleHelp = () => {
        onNavigate('Help');
    };

    const handleSignOut = () => {
        onNavigate('Welcome'); // Navigate to Welcome screen after sign out
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
            info: 'MRP₹4,495',
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
        // Add more card objects as needed
    ];

    return (
        <ImageBackground 
            source={require('../assets/img12.jpg')} 
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <View style={styles.header}>
                    <Image source={logoImage} style={styles.logo} />
                    <Text style={styles.welcomeText}>Welcome to SHOPSPHERE</Text>
                </View>
                <ScrollView contentContainerStyle={styles.cardsContainer}>
                    {cards.map((card, index) => (
                        <View key={index} style={styles.card}>
                            <Image source={card.image} style={styles.cardImage} />
                            <Text style={styles.cardName}>{card.name}</Text>
                            <Text style={styles.cardInfo}>{card.info}</Text>
                            <View style={styles.buttonContainer}>
                                <Pressable onPress={() => toggleFavorite(card)}>
                                    <Icon
                                        name={favorites.some(fav => fav.name === card.name) ? 'star' : 'star-o'}
                                        size={30}
                                        color={favorites.some(fav => fav.name === card.name) ? 'gold' : 'gray'}
                                    />
                                </Pressable>
                            </View>
                        </View>
                    ))}
                </ScrollView>
                <View style={styles.navigationBar}>
                    <Pressable style={styles.navButton} onPress={handleHelp}>
                        <Icon name="question-circle" size={30} color="#fff" />
                        <Text style={styles.navText}>Help</Text>
                    </Pressable>
                    <Pressable style={styles.navButton} onPress={handleFavorites}>
                        <Icon name="star" size={30} color="#fff" />
                        {favoriteCount > 0 && (
                            <View style={styles.badge}>
                                <Text style={styles.badgeText}>{favoriteCount}</Text>
                            </View>
                        )}
                        <Text style={styles.navText}>Favorites</Text>
                    </Pressable>
                    <Pressable style={styles.navButton} onPress={handleSignOut}>
                        <Icon name="sign-out" size={30} color="#fff" />
                        <Text style={styles.navText}>Sign Out</Text>
                    </Pressable>
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
        paddingTop: 40,
        paddingBottom: 20,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'purple',
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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 10,
        position: 'relative', // Ensure the badge is positioned relative to its parent
    },
    badge: {
        position: 'absolute',
        top: -8,
        right: -8,
        backgroundColor: 'red',
        borderRadius: 10,
        minWidth: 20,
        paddingVertical: 2,
        paddingHorizontal: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    navigationBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    navButton: {
        alignItems: 'center',
    },
    navText: {
        color: '#fff',
        fontSize: 12,
    },
});

export default AnotherWelcomeScreen;

import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, ScrollView, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFavorites } from './FavoritesContext';

const AnotherWelcomeScreen = ({ onSignOut, onNavigate }) => {
    const { favorites, toggleFavorite } = useFavorites();

    const handleFavorites = () => {
        onNavigate('Favorites');
    };

    const handleHelp = () => {
        onNavigate('Help');
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
                <View style={styles.topContainer}>
                    <Pressable style={styles.button} onPress={handleHelp}>
                        <Text style={styles.buttonText}>Help</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={handleFavorites}>
                        <Text style={styles.buttonText}>Favorites ({favorites.length})</Text>
                    </Pressable>
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
                <View style={styles.signOutContainer}>
                    <Pressable style={styles.button} onPress={onSignOut}>
                        <Text style={styles.buttonText}>Sign Out</Text>
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
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10,
    },
    button: {
        backgroundColor: '#4B0082', // Dark purple color
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
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
    },
    favoriteIcon: {
        width: 30,
        height: 30,
    },
    signOutContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
});

export default AnotherWelcomeScreen;

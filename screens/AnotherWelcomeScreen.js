import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';
import img from './../assets/img1.jpg'

const AnotherWelcomeScreen = ({ onSignOut, onNavigate }) => {

    const handleSignOut = () => {
        onSignOut();
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
        <View style={styles.container}>
            <Image source={require('../assets/img9.jpg')} style={styles.backgroundImage} />
            <Text style={styles.title}>PICK 2 GET 1 FREE!!</Text>
            <Button title="Sign Out" onPress={handleSignOut} />
            <ScrollView contentContainerStyle={styles.cardsContainer}>
                {cards.map((card, index) => (
                    <View key={index} style={styles.card}>
                         <Image source={card.image} style={styles.cardImage} />
                        <Text style={styles.cardName}>{card.name}</Text>
                        <Text style={styles.cardInfo}>{card.info}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20,
        position: 'relative',
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
    },
    title: {
        fontSize: 24,
        marginTop: 40,
        marginBottom: 20,
        color: '#fff',
        fontWeight: 'bold',
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
});

export default AnotherWelcomeScreen;
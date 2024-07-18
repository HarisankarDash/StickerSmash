import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const Favorite = ({ card, index, bookmarks, toggleBookmark }) => {
    return (
        <View key={index} style={styles.card}>
            <Image source={card.image} style={styles.cardImage} />
            <Text style={styles.cardName}>{card.name}</Text>
            <Text style={styles.cardInfo}>{card.info}</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="🔖" // Bookmark icon
                    color={bookmarks.includes(index) ? 'blue' : 'transparent'}
                    onPress={() => toggleBookmark(index)}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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
});

export default Favorite;

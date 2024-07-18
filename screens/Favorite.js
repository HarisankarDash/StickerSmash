import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Button } from 'react-native';
import { useFavorites } from './FavoritesContext';

const Favorite = ({ onNavigate }) => {
    const { favorites, toggleFavorite } = useFavorites();

    return (
        <View style={styles.container}>
            <FlatList
                data={favorites}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={item.image} style={styles.cardImage} />
                        <Text style={styles.cardName}>{item.name}</Text>
                        <Text style={styles.cardInfo}>{item.info}</Text>
                        <View style={styles.buttonContainer}>
                            <Button
                                title="Remove from Favorites"
                                onPress={() => toggleFavorite(item)}
                                color="red"
                            />
                        </View>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.cardsContainer}
            />
            <View style={styles.backButtonContainer}>
                <Button title="Back to Products" onPress={() => onNavigate('Product')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    cardsContainer: {
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        alignItems: 'center',
        width: '100%',
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
        marginTop: 10,
    },
    backButtonContainer: {
        padding: 20,
        alignItems: 'center',
    },
});

export default Favorite;

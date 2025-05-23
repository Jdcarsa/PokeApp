import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { getPokemonById, getPokemonSprite } from '../../api/pokeapi';
import { typeToColor, PokemonType } from '../../theme/colors'; 

interface PokeCardProps {
    pokemonId: number;
}

export default function PokeCard({ pokemonId }: PokeCardProps) {
    const [pokemon, setPokemon] = useState<any>(null);
    const [pokemonColor, setPokemonColor] = useState<string>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const data = await getPokemonById(pokemonId);
                setPokemon(data);
                const pokemonType = data.types[0].type.name as PokemonType;
                const color = typeToColor[pokemonType] || '#000'; 
                setPokemonColor(color);
            } catch (error) {
                console.error('Error al obtener los datos del Pokémon:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchPokemonData();
    }, [pokemonId]);

    const capitalizeFirstLetter = (name: string) => {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    };

    return (
        <View>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
            ) : (
                pokemon && (
                    <View
                        style={[styles.shadow, { backgroundColor: pokemonColor }]}
                        className="rounded-xl w-[170px] h-[108px] p-3 flex flex-row items-center justify-between"
                    >
                        <View>
                            <Text className="text-lg font-bold -mt-1">
                                {capitalizeFirstLetter(pokemon.name)}
                            </Text>
                            <Text className="text-lg mt-1 bg-black text-white rounded-full text-center opacity-75 w-[45px]">
                                {'#' + pokemon.id}
                            </Text>
                        </View>
                        <Image
                            source={{ uri: getPokemonSprite(pokemonId) }}
                            className="w-[80px] h-[84px]"
                        />
                    </View>
                )
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        elevation: 5,
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 108,
    },
});
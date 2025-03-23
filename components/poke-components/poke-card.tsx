import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { getPokemonById, getPokemonSprite } from '../../api/pokeapi';
import { typeToColor, PokemonType } from '../../theme/colors'; 

interface PokeCardProps {
    pokemonId: number;
}

export default function PokeCard({ pokemonId }: PokeCardProps) {
    const [pokemon, setPokemon] = useState<any>(null);
    const [pokemonColor, setPokemonColor] = useState<string>();

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
            }
        };
        fetchPokemonData();
    }, [pokemonId]);

    const capitalizeFirstLetter = (name: string) => {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    };

    return (
        <View>
            {pokemon ? (
                <View
                    style={{ backgroundColor: pokemonColor }}
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
            ) : (
                <Text className="text-center text-lg">Cargando Pokémon...</Text>
            )}
        </View>
    );
}
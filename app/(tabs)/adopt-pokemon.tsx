import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AdoptModal from '@/components/poke-components/adopt-modal';
import PokeCard from '@/components/poke-components/poke-card';
import { myPokemonsIds } from '@/types/pokemonList';

const generateRandomIds = (count: number = 4): number[] => {
    const ids = new Set<number>();
    while (ids.size < count) {
        ids.add(Math.floor(Math.random() * 100) + 1);
    }
    return Array.from(ids);
};

export default function AdoptScreen(): JSX.Element {
    const [pokemonIds, setPokemonIds] = useState<number[]>(generateRandomIds());
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [selectedPokemon, setSelectedPokemon] = useState<number | null>(null);
    const [timeLeft, setTimeLeft] = useState<string>('00:00:00');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
            const timeUntilNextDay = nextDay.getTime() - now.getTime();

            const hours = Math.floor(timeUntilNextDay / (1000 * 60 * 60)) % 24;
            const minutes = Math.floor(timeUntilNextDay / (1000 * 60)) % 60;
            const seconds = Math.floor(timeUntilNextDay / 1000) % 60;

            setTimeLeft(
                `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}
                :${seconds.toString().padStart(2, '0')}`
            );
        };

        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    }, []);

    const adoptPokemon = (id: number): void => {

        setPokemonIds((prevIds) => prevIds.filter((pokemonId) => pokemonId !== id));

        
        myPokemonsIds.push(id); 
        console.log(`Pokémon adoptado: ${id}. Lista actualizada:`, myPokemonsIds);

        
        setSelectedPokemon(id);
        setModalVisible(true);
    };

    return (
        <View className="flex-1 bg-gray-100 p-4">
            <Text className="text-2xl font-bold text-center mb-2">Adopta un nuevo Pokémon</Text>
            <Text className="text-center text-sm text-gray-500 mb-4">
                La tienda se restablecerá a las 0:00:00. Tiempo restante: {timeLeft}
            </Text>

            <View className="flex-row flex-wrap justify-center gap-4">
                {pokemonIds.map((id) => (
                    <TouchableOpacity key={id} onPress={() => adoptPokemon(id)}>
                        <PokeCard pokemonId={id} />
                    </TouchableOpacity>
                ))}
            </View>

            <AdoptModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                pokemonId={selectedPokemon}
            />
        </View>
    );
}
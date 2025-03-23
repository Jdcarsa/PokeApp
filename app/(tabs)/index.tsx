import PokeCard from '../../components/poke-components/poke-card';
import React from 'react';
import { View  , ScrollView } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  const idRandonsPokemon = [
    12, 45, 78, 23, 89, 34, 56, 90, 67, 15,
    14, 18, 27, 38, 49, 52, 63, 74, 85, 96
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['top']}>
        <ScrollView className="p-4">
          <View className="flex flex-row flex-wrap justify-center">
            {idRandonsPokemon.map((id) => (
              <View className="w-1/2 p-2">
                <PokeCard pokemonId={id} />
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

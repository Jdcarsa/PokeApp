import ListPokeCard from '@/components/poke-components/list-poke-card';
import React from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['top']}>
        <ListPokeCard></ListPokeCard>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';

interface AdoptModalProps {
    visible: boolean;
    onClose: () => void;
    pokemonId: number | null;
}

export default function AdoptModal({ visible, onClose, pokemonId }: AdoptModalProps): JSX.Element {
    return (
        <Modal visible={visible} transparent animationType="slide">
            <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
                <View className="bg-white rounded-lg p-6 shadow-lg">
                    <Text className="text-lg font-bold text-center mb-4">
                        ¡Enhorabuena! Has adoptado a Pokémon #{pokemonId} 🎉
                    </Text>
                    <TouchableOpacity
                        onPress={onClose}
                        className="bg-blue-500 py-2 px-4 rounded-lg"
                    >
                        <Text className="text-white font-bold text-center">Cerrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}
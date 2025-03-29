import React from 'react';
import { Text, View, Image } from 'react-native';

export default function ConfigScreen() {
    return (
        <View className="flex bg-gray-100 p-4">

            <View className="bg-white rounded-xl shadow-md p-4 mb-6 flex flex-row items-center">
                <Image
                    className="w-[80px] h-[80px] rounded-full mr-4"
                    source={require('../../theme/usuario.png')}
                />
                <View>
                    <Text className="text-lg font-bold text-gray-800">Nombre del Poke entrenador</Text>
                    <Text className="text-sm text-gray-500">usuario</Text>
                </View>
            </View>

            <View className="flex">
                <View className="bg-blue-500 rounded-lg p-4 shadow-md m-2">
                    <Text className="text-center text-white font-bold text-lg">Cambiar Usuario</Text>
                </View>
                <View className="bg-yellow-400 rounded-lg p-4 shadow-md m-2">
                    <Text className="text-center text-white font-bold text-lg">Cambiar Contraseña</Text>
                </View>
                <View className="bg-black rounded-lg p-4 shadow-md m-2">
                    <Text className="text-center text-white font-bold text-lg">Cerrar Sesión</Text>
                </View>
            </View>
        </View>
    );
}
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#ffffff', 
                tabBarInactiveTintColor: '#e3e3e3', 
                headerStyle: {
                    backgroundColor: '#eb4b3f', 
                },
                headerShadowVisible: false,
                headerTintColor: '#fff', 
                tabBarStyle: {
                    backgroundColor: '#eb4b3f',
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Mis Pokemons',
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons
                            name={focused ? 'home-sharp' : 'home-outline'}
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="search-poke"
                options={{
                    title: 'Buscar',
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons
                            name={focused ? 'search' : 'search-outline'}
                            color={color} 
                            size={24}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="adopt-pokemon"
                options={{
                    title: 'Adoptar Pokemon',
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons
                            name={focused ? 'add-circle' : 'add-circle-outline'}
                            color={color} 
                            size={24}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="config"
                options={{
                    title: 'Configuracion',
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons
                            name={focused ? 'cog' : 'cog-outline'}
                            color={color} 
                            size={24}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}

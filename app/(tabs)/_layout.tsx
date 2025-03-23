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
                    title: 'PokeApp',
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
                name="about"
                options={{
                    title: 'Ventana 2',
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons
                            name={focused ? 'information-circle' : 'information-circle-outline'}
                            color={color} 
                            size={24}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, Animated } from 'react-native';

import HomeScreen from '../screens/HomeSreen';
import IngresosScreen from '../screens/IngresosScreen';
import ProfileScreen from '../screens/ProfileSreen';

const Tab = createBottomTabNavigator();

// Componente personalizado para el ícono con animación
const AnimatedTabIcon = ({ focused, iconName, size }) => {
    const scaleValue = React.useRef(new Animated.Value(focused ? 1 : 0)).current;
    const circleScale = React.useRef(new Animated.Value(focused ? 1 : 0)).current;

    React.useEffect(() => {
        // Animación del círculo
        Animated.timing(circleScale, {
            toValue: focused ? 1 : 0,
            duration: 200,
            useNativeDriver: true,
        }).start();

        // Animación del ícono
        Animated.timing(scaleValue, {
            toValue: focused ? 1.1 : 1,
            duration: 200,
            useNativeDriver: true,
        }).start();
    }, [focused]);

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', width: 50, height: 45 }}>
            {/* Círculo animado de fondo */}
            <Animated.View
                style={{
                    position: 'absolute',
                    width: 35,
                    height: 35,
                    borderRadius: 17.5,
                    backgroundColor: '#fff',
                    transform: [{ scale: circleScale }],
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                }}
            />
            {/* Ícono animado */}
            <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
                <Ionicons
                    name={iconName}
                    size={size - 2}
                    color={focused ? '#000' : '#fff'}
                />
            </Animated.View>
        </View>
    );
};

export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Ingresos') {
                        iconName = focused ? 'wallet' : 'wallet-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return (
                        <AnimatedTabIcon
                            focused={focused}
                            iconName={iconName}
                            size={size}
                        />
                    );
                },
                tabBarShowLabel: true,
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor: '#fff',
                tabBarLabelStyle: {
                    fontSize: 11,
                    fontWeight: '600',
                    marginTop: 2,
                },
                tabBarStyle: {
                    backgroundColor: '#000',
                    paddingBottom: 15,
                    paddingTop: 10,
                    height: 80,
                    borderTopWidth: 0,
                    elevation: 10,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: -2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                },
                headerShown: false,
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Inicio',
                }}
            />
            <Tab.Screen
                name="Ingresos"
                component={IngresosScreen}
                options={{
                    title: 'Ingresos',
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    title: 'Perfil',
                }}
            />
        </Tab.Navigator>
    );
}
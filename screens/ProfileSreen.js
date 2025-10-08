import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image,
    Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
    // Datos de ejemplo
    const [userData, setUserData] = useState({
        name: 'Angel Sosa',
        email: 'angel.sosa@email.com',
        phone: '+503 7890-1234',
    });

    const handleLogout = () => {
        Alert.alert(
            'Cerrar Sesión',
            '¿Estás seguro que deseas cerrar sesión?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Cerrar Sesión',
                    onPress: () => {
                        // Aquí implementarías la lógica de cierre de sesión
                        console.log('Sesión cerrada');
                    },
                    style: 'destructive',
                },
            ]
        );
    };

    const InfoField = ({ label, value, icon }) => (
        <View style={styles.infoField}>
            <View style={styles.fieldHeader}>
                <Ionicons name={icon} size={20} color="#666" style={styles.fieldIcon} />
                <Text style={styles.fieldLabel}>{label}</Text>
            </View>
            <View style={styles.fieldValueContainer}>
                <Text style={styles.fieldValue}>{value}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Decoración superior */}
            <View style={styles.topDecoration} />
            <View style={styles.topDecorationSecondary} />

            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Contenedor de perfil */}
                <View style={styles.profileCard}>
                    {/* Foto de perfil */}
                    <View style={styles.avatarContainer}>
                        <View style={styles.avatarCircle}>
                            <Ionicons name="person" size={50} color="#000" />
                        </View>
                    </View>

                    {/* Nombre */}
                    <Text style={styles.userName}>{userData.name}</Text>

                    {/* Campos de información */}
                    <View style={styles.infoContainer}>
                        <InfoField
                            label="Usuario"
                            value={userData.name}
                            icon="person-outline"
                        />
                        <InfoField
                            label="Correo Electrónico"
                            value={userData.email}
                            icon="mail-outline"
                        />
                        <InfoField
                            label="Contraseña"
                            value="••••••••"
                            icon="lock-closed-outline"
                        />
                    </View>

                    {/* Botón de cerrar sesión */}
                    <TouchableOpacity
                        style={styles.logoutButton}
                        onPress={handleLogout}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* Decoración inferior */}
            <View style={styles.bottomDecoration} />
            <View style={styles.bottomDecorationSecondary} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    topDecoration: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 150,
        height: 150,
        backgroundColor: '#D4E4F7',
        transform: [{ rotate: '45deg' }],
        borderRadius: 20,
        marginLeft: -75,
        marginTop: -75,
    },
    topDecorationSecondary: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 100,
        height: 100,
        backgroundColor: '#A8C5E4',
        transform: [{ rotate: '45deg' }],
        borderRadius: 15,
        marginLeft: -50,
        marginTop: -50,
    },
    bottomDecoration: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 200,
        height: 200,
        backgroundColor: '#2B5A9E',
        transform: [{ rotate: '45deg' }],
        borderRadius: 25,
        marginRight: -100,
        marginBottom: -100,
    },
    bottomDecorationSecondary: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 150,
        height: 150,
        backgroundColor: '#4A7BC8',
        transform: [{ rotate: '45deg' }],
        borderRadius: 20,
        marginRight: -75,
        marginBottom: -75,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingVertical: 40,
        paddingHorizontal: 20,
        paddingBottom: 120, // Extra padding para el tab bar
    },
    profileCard: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    avatarContainer: {
        marginBottom: 20,
    },
    avatarCircle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#E8E8E8',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 3,
    },
    userName: {
        fontSize: 24,
        fontWeight: '700',
        color: '#000',
        marginBottom: 30,
    },
    infoContainer: {
        width: '100%',
        marginBottom: 30,
    },
    infoField: {
        width: '100%',
        marginBottom: 20,
    },
    fieldHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    fieldIcon: {
        marginRight: 8,
    },
    fieldLabel: {
        fontSize: 13,
        color: '#666',
        fontWeight: '500',
    },
    fieldValueContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        paddingBottom: 10,
    },
    fieldValue: {
        fontSize: 15,
        color: '#000',
        fontWeight: '400',
    },
    logoutButton: {
        width: '100%',
        backgroundColor: '#FFF',
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 12,
        paddingVertical: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    logoutButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
    },
});

export default ProfileScreen;
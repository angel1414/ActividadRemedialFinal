import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Modal,
    Pressable,
    TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const IngresosScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [formVisible, setFormVisible] = useState(false);
    const [selectedType, setSelectedType] = useState(null);
    const [formData, setFormData] = useState({
        monto: '00.00',
        descripcion: '',
        fecha: '',
        cuenta: '',
        categoria: '',
        nota: '',
        pagoDesde: '',
        cuentaOrigen: '',
        cuentaDestino: '',
        depositarEn: '',
        fechaPago: '',
    });

    const currentDate = new Date().toLocaleDateString('es-ES', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const formatDate = (date) => {
        return date.charAt(0).toUpperCase() + date.slice(1);
    };

    const transactionTypes = [
        {
            id: 1,
            icon: 'receipt-outline',
            title: 'Gasto',
            description: 'Registra una compra o un pago que hiciste, como supermercados, gasolina o restaurante',
        },
        {
            id: 2,
            icon: 'card-outline',
            title: 'Pago',
            description: 'Registra un pago que necesites hacer, como suscripciones, renta o servicios',
        },
        {
            id: 3,
            icon: 'wallet-outline',
            title: 'Ingreso',
            description: 'Registra tu salario, bonos, freelance u otro tipo de que recibes',
        },
        {
            id: 4,
            icon: 'swap-horizontal-outline',
            title: 'Transferencia',
            description: 'Registra movimientos entre cuentas, como transferencias de cuenta de cheques a ahorro',
        },
        {
            id: 5,
            icon: 'refresh-outline',
            title: 'Reembolso',
            description: 'Registra un reembolso o una devolución que recibes, como la devolución de algún producto o cashback',
        },
    ];

    const handleTransactionSelect = (type) => {
        setSelectedType(type);
        setModalVisible(false);
        setFormVisible(true);
        // Resetear el formulario
        setFormData({
            monto: '00.00',
            descripcion: '',
            fecha: '',
            cuenta: '',
            categoria: '',
            nota: '',
            pagoDesde: '',
            cuentaOrigen: '',
            cuentaDestino: '',
            depositarEn: '',
            fechaPago: '',
        });
    };

    const handleCloseForm = () => {
        setFormVisible(false);
        setSelectedType(null);
    };

    const handleSubmit = () => {
        console.log('Transacción:', selectedType);
        console.log('Datos:', formData);
        // Aquí puedes procesar los datos
        handleCloseForm();
    };

    const updateFormData = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const renderFormFields = () => {
        switch (selectedType) {
            case 'Gasto':
            case 'Ingreso':
                return (
                    <>
                        <View style={styles.fieldItem}>
                            <Text style={styles.fieldLabel}>Descripción</Text>
                            <TextInput
                                style={styles.fieldInput}
                                value={formData.descripcion}
                                onChangeText={(text) => updateFormData('descripcion', text)}
                                placeholder=""
                            />
                        </View>

                        <View style={styles.fieldItem}>
                            <Text style={styles.fieldLabel}>Fecha de Transacción</Text>
                            <TextInput
                                style={styles.fieldInput}
                                value={formData.fecha}
                                onChangeText={(text) => updateFormData('fecha', text)}
                                placeholder=""
                            />
                        </View>

                        <View style={styles.fieldItem}>
                            <Text style={styles.fieldLabel}>Cuenta</Text>
                            <TextInput
                                style={styles.fieldInput}
                                value={formData.cuenta}
                                onChangeText={(text) => updateFormData('cuenta', text)}
                                placeholder=""
                            />
                        </View>

                        <View style={styles.fieldItem}>
                            <Text style={styles.fieldLabel}>Categoría</Text>
                            <TextInput
                                style={styles.fieldInput}
                                value={formData.categoria}
                                onChangeText={(text) => updateFormData('categoria', text)}
                                placeholder=""
                            />
                        </View>

                        <View style={styles.fieldItem}>
                            <Text style={styles.fieldLabel}>Nota</Text>
                            <TextInput
                                style={styles.fieldInput}
                                value={formData.nota}
                                onChangeText={(text) => updateFormData('nota', text)}
                                placeholder=""
                            />
                        </View>
                    </>
                );

            case 'Pago':
                return (
                    <>
                        <View style={styles.fieldItem}>
                            <Text style={styles.fieldLabel}>Descripción</Text>
                            <TextInput
                                style={styles.fieldInput}
                                value={formData.descripcion}
                                onChangeText={(text) => updateFormData('descripcion', text)}
                                placeholder=""
                            />
                        </View>

                        <View style={styles.fieldItem}>
                            <Text style={styles.fieldLabel}>Pago desde</Text>
                            <TextInput
                                style={styles.fieldInput}
                                value={formData.pagoDesde}
                                onChangeText={(text) => updateFormData('pagoDesde', text)}
                                placeholder=""
                            />
                        </View>

                        <View style={styles.fieldItem}>
                            <Text style={styles.fieldLabel}>Categoría</Text>
                            <TextInput
                                style={styles.fieldInput}
                                value={formData.categoria}
                                onChangeText={(text) => updateFormData('categoria', text)}
                                placeholder=""
                            />
                        </View>

                        <View style={styles.fieldItem}>
                            <Text style={styles.fieldLabel}>Fecha de pago</Text>
                            <TextInput
                                style={styles.fieldInput}
                                value={formData.fechaPago}
                                onChangeText={(text) => updateFormData('fechaPago', text)}
                                placeholder=""
                            />
                        </View>

                        <View style={styles.fieldItem}>
                            <Text style={styles.fieldLabel}>Nota</Text>
                            <TextInput
                                style={styles.fieldInput}
                                value={formData.nota}
                                onChangeText={(text) => updateFormData('nota', text)}
                                placeholder=""
                            />
                        </View>
                    </>
                );

            case 'Transferencia':
                return (
                    <>
                        <View style={styles.fieldItem}>
                            <Text style={styles.fieldLabel}>Descripción</Text>
                            <TextInput
                                style={styles.fieldInput}
                                value={formData.descripcion}
                                onChangeText={(text) => updateFormData('descripcion', text)}
                                placeholder=""
                            />
                        </View>

                        <View style={styles.fieldItem}>
                            <Text style={styles.fieldLabel}>Cuenta de origen</Text>
                            <TextInput
                                style={styles.fieldInput}
                                value={formData.cuentaOrigen}
                                onChangeText={(text) => updateFormData('cuentaOrigen', text)}
                                placeholder=""
                            />
                        </View>

                        <View style={styles.fieldItem}>
                            <Text style={styles.fieldLabel}>Cuenta de destino</Text>
                            <TextInput
                                style={styles.fieldInput}
                                value={formData.cuentaDestino}
                                onChangeText={(text) => updateFormData('cuentaDestino', text)}
                                placeholder=""
                            />
                        </View>

                        <View style={styles.fieldItem}>
                            <Text style={styles.fieldLabel}>Fecha</Text>
                            <TextInput
                                style={styles.fieldInput}
                                value={formData.fecha}
                                onChangeText={(text) => updateFormData('fecha', text)}
                                placeholder=""
                            />
                        </View>

                        <View style={styles.fieldItem}>
                            <Text style={styles.fieldLabel}>Nota</Text>
                            <TextInput
                                style={styles.fieldInput}
                                value={formData.nota}
                                onChangeText={(text) => updateFormData('nota', text)}
                                placeholder=""
                            />
                        </View>
                    </>
                );

            case 'Reembolso':
                return (
                    <>
                        <View style={styles.fieldItem}>
                            <Text style={styles.fieldLabel}>Descripción</Text>
                            <TextInput
                                style={styles.fieldInput}
                                value={formData.descripcion}
                                onChangeText={(text) => updateFormData('descripcion', text)}
                                placeholder=""
                            />
                        </View>

                        <View style={styles.fieldItem}>
                            <Text style={styles.fieldLabel}>Depositar en</Text>
                            <TextInput
                                style={styles.fieldInput}
                                value={formData.depositarEn}
                                onChangeText={(text) => updateFormData('depositarEn', text)}
                                placeholder=""
                            />
                        </View>

                        <View style={styles.fieldItem}>
                            <Text style={styles.fieldLabel}>Fecha</Text>
                            <TextInput
                                style={styles.fieldInput}
                                value={formData.fecha}
                                onChangeText={(text) => updateFormData('fecha', text)}
                                placeholder=""
                            />
                        </View>

                        <View style={styles.fieldItem}>
                            <Text style={styles.fieldLabel}>Nota</Text>
                            <TextInput
                                style={styles.fieldInput}
                                value={formData.nota}
                                onChangeText={(text) => updateFormData('nota', text)}
                                placeholder=""
                            />
                        </View>
                    </>
                );

            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Ingresos</Text>
            </View>

            {/* Fecha */}
            <View style={styles.dateContainer}>
                <Text style={styles.dateText}>{formatDate(currentDate)}</Text>
            </View>

            {/* Contenido principal */}
            <ScrollView
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.emptyState}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="receipt-outline" size={48} color="#000" />
                    </View>
                    <Text style={styles.emptyText}>Sin Ingresos Aún</Text>
                </View>
            </ScrollView>

            {/* Botón flotante */}
            <TouchableOpacity
                style={styles.floatingButton}
                activeOpacity={0.8}
                onPress={() => setModalVisible(true)}
            >
                <Ionicons name="add" size={32} color="#000" />
            </TouchableOpacity>

            {/* Modal de selección de transacciones */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <Pressable
                    style={styles.modalOverlay}
                    onPress={() => setModalVisible(false)}
                >
                    <Pressable
                        style={styles.modalContent}
                        onPress={(e) => e.stopPropagation()}
                    >
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>Agregar Transacción</Text>
                            <TouchableOpacity
                                onPress={() => setModalVisible(false)}
                                style={styles.closeButton}
                            >
                                <Ionicons name="close" size={28} color="#000" />
                            </TouchableOpacity>
                        </View>

                        <ScrollView
                            style={styles.optionsList}
                            showsVerticalScrollIndicator={false}
                        >
                            {transactionTypes.map((type, index) => (
                                <TouchableOpacity
                                    key={type.id}
                                    style={[
                                        styles.optionItem,
                                        index === transactionTypes.length - 1 && styles.lastOption
                                    ]}
                                    onPress={() => handleTransactionSelect(type.title)}
                                    activeOpacity={0.7}
                                >
                                    <View style={styles.optionIconContainer}>
                                        <Ionicons name={type.icon} size={28} color="#000" />
                                    </View>
                                    <View style={styles.optionTextContainer}>
                                        <Text style={styles.optionTitle}>{type.title}</Text>
                                        <Text style={styles.optionDescription}>
                                            {type.description}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </Pressable>
                </Pressable>
            </Modal>

            {/* Modal del formulario */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={formVisible}
                onRequestClose={handleCloseForm}
            >
                <View style={styles.formModalOverlay}>
                    <View style={styles.formContainer}>
                        {/* Header del formulario */}
                        <View style={styles.formHeader}>
                            <TouchableOpacity
                                onPress={handleCloseForm}
                                style={styles.backButton}
                            >
                                <Ionicons name="arrow-back" size={24} color="#000" />
                            </TouchableOpacity>
                            <Text style={styles.formHeaderTitle}>Transacción</Text>
                            <View style={{ width: 24 }} />
                        </View>

                        <ScrollView
                            style={styles.formScrollView}
                            showsVerticalScrollIndicator={false}
                        >
                            <View style={styles.formContent}>
                                {/* Tipo de transacción */}
                                <View style={styles.transactionTypeBox}>
                                    <Text style={styles.transactionTypeText}>
                                        Agregar {selectedType}
                                    </Text>
                                </View>

                                {/* Monto */}
                                <View style={styles.montoContainer}>
                                    <Text style={styles.montoLabel}>Monto</Text>
                                    <View style={styles.montoInputContainer}>
                                        <Text style={styles.montoSymbol}>$</Text>
                                        <TextInput
                                            style={styles.montoInput}
                                            value={formData.monto}
                                            onChangeText={(text) => updateFormData('monto', text)}
                                            placeholder="00.00"
                                            placeholderTextColor="#666"
                                            keyboardType="numeric"
                                        />
                                    </View>
                                </View>

                                {/* Campos del formulario */}
                                <View style={styles.fieldsContainer}>
                                    {renderFormFields()}
                                </View>

                                {/* Botón Aceptar */}
                                <TouchableOpacity
                                    style={styles.submitButton}
                                    onPress={handleSubmit}
                                    activeOpacity={0.8}
                                >
                                    <Text style={styles.submitButtonText}>Aceptar</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    header: {
        backgroundColor: '#000',
        paddingTop: 60,
        paddingBottom: 20,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#FFF',
    },
    headerTitle: {
        color: '#FFF',
        fontSize: 28,
        fontWeight: '600',
    },
    dateContainer: {
        backgroundColor: '#FFF',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    dateText: {
        fontSize: 14,
        color: '#000',
        fontWeight: '500',
    },
    contentContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 100,
    },
    emptyState: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#D4E4F7',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    emptyText: {
        fontSize: 16,
        color: '#666',
        fontWeight: '400',
    },
    floatingButton: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#D4E4F7',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: '#C8D9E8',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 20,
        maxHeight: '80%',
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000',
    },
    closeButton: {
        padding: 5,
    },
    optionsList: {
        paddingHorizontal: 20,
    },
    optionItem: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        alignItems: 'flex-start',
    },
    lastOption: {
        marginBottom: 30,
    },
    optionIconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#F0F0F0',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    optionTextContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    optionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
        marginBottom: 4,
    },
    optionDescription: {
        fontSize: 13,
        color: '#666',
        lineHeight: 18,
    },
    // Estilos del formulario
    formModalOverlay: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    formContainer: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    formHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 60,
        paddingBottom: 20,
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    backButton: {
        padding: 5,
    },
    formHeaderTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
    },
    formScrollView: {
        flex: 1,
    },
    formContent: {
        padding: 20,
    },
    transactionTypeBox: {
        backgroundColor: '#C8D9E8',
        borderRadius: 12,
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        marginBottom: 20,
    },
    transactionTypeText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
    },
    montoContainer: {
        backgroundColor: '#C8D9E8',
        borderRadius: 12,
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginBottom: 20,
        alignItems: 'center',
    },
    montoLabel: {
        fontSize: 14,
        fontWeight: '500',
        color: '#000',
        marginBottom: 10,
    },
    montoInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    montoSymbol: {
        fontSize: 32,
        fontWeight: '600',
        color: '#000',
        marginRight: 5,
    },
    montoInput: {
        fontSize: 32,
        fontWeight: '600',
        color: '#000',
        textAlign: 'center',
        minWidth: 120,
    },
    fieldsContainer: {
        backgroundColor: '#C8D9E8',
        borderRadius: 12,
        padding: 20,
        marginBottom: 20,
    },
    fieldItem: {
        marginBottom: 20,
    },
    fieldLabel: {
        fontSize: 14,
        fontWeight: '500',
        color: '#000',
        marginBottom: 8,
    },
    fieldInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        paddingVertical: 8,
        fontSize: 14,
        color: '#000',
    },
    submitButton: {
        backgroundColor: '#FFF',
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: 'center',
        marginBottom: 30,
    },
    submitButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
    },
});

export default IngresosScreen;
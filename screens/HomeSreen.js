import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// NOTA: Las gráficas son informativas por el momento
// Se implementarán con datos reales en futuras versiones

const DashboardScreen = () => {
    // Datos de ejemplo para las gráficas (temporales)
    const dineroAcumulado = {
        proyectado: 10000,
        actual: 9500,
        porcentaje: 95,
    };

    const dineroGastado = {
        gasto: 2500,
        proyectado: 1500,
        porcentaje: 75,
    };

    const ingresosMes = [
        { id: '01', porcentaje: 50, color: '#608BC1' },
        { id: '02', porcentaje: 95, color: '#133E87' },
        { id: '03', porcentaje: 60, color: '#608BC1' },
    ];

    const proximoPagar = {
        gasto: 75,
        pago: 35,
        transferencia: 25,
    };

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>¡Bienvenido!</Text>
            </View>

            {/* Sección de Dinero Acumulado y Gastado */}
            <View style={styles.summaryContainer}>
                {/* Dinero Acumulado */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Dinero Acumulado</Text>
                    <View style={styles.chartContainer}>
                        <View style={styles.circularChart}>
                            {/* Gráfica circular - informativa */}
                            <View style={[styles.circularProgress, {
                                borderColor: '#608BC1',
                                borderWidth: 12,
                            }]}>
                                <Text style={styles.percentageText}>{dineroAcumulado.porcentaje}%</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.cardInfo}>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Dinero Proyectado:</Text>
                            <Text style={styles.infoValue}>${dineroAcumulado.proyectado.toLocaleString()}</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Balance Actual:</Text>
                            <Text style={styles.infoValue}>${dineroAcumulado.actual.toLocaleString()}</Text>
                        </View>
                    </View>
                </View>

                {/* Dinero Gastado */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Dinero Gastado</Text>
                    <View style={styles.chartContainer}>
                        <View style={styles.circularChart}>
                            {/* Gráfica circular - informativa */}
                            <View style={[styles.circularProgress, {
                                borderColor: '#133E87',
                                borderWidth: 12,
                            }]}>
                                <Text style={styles.percentageText}>{dineroGastado.porcentaje}%</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.cardInfo}>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Gasto:</Text>
                            <Text style={styles.infoValue}>${dineroGastado.gasto.toLocaleString()}</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Gasto Proyectado:</Text>
                            <Text style={styles.infoValue}>${dineroGastado.proyectado.toLocaleString()}</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Ingresos del mes */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Ingresos del mes</Text>
                <View style={styles.progressBarsContainer}>
                    {ingresosMes.map((item) => (
                        <View key={item.id} style={styles.progressBarRow}>
                            <View style={styles.progressNumber}>
                                <Text style={styles.progressNumberText}>{item.id}</Text>
                            </View>
                            <View style={styles.progressBarWrapper}>
                                <View style={styles.progressBarBackground}>
                                    {/* Barra de progreso - informativa */}
                                    <View
                                        style={[
                                            styles.progressBarFill,
                                            {
                                                width: `${item.porcentaje}%`,
                                                backgroundColor: item.color,
                                            }
                                        ]}
                                    >
                                        <Text style={styles.progressBarText}>{item.porcentaje}%</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            </View>

            {/* Próximo a pagar */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Próximo a pagar</Text>

                {/* Leyenda */}
                <View style={styles.legend}>
                    <View style={styles.legendItem}>
                        <View style={[styles.legendDot, { backgroundColor: '#133E87' }]} />
                        <Text style={styles.legendText}>Gasto</Text>
                    </View>
                    <View style={styles.legendItem}>
                        <View style={[styles.legendDot, { backgroundColor: '#CBDCEB' }]} />
                        <Text style={styles.legendText}>Pago</Text>
                    </View>
                    <View style={styles.legendItem}>
                        <View style={[styles.legendDot, { backgroundColor: '#F3F3E0' }]} />
                        <Text style={styles.legendText}>Transferencia</Text>
                    </View>
                </View>

                {/* Gráfica semicircular - informativa */}
                <View style={styles.semicircularChartContainer}>
                    <View style={styles.semicircularChart}>
                        <View style={styles.chartSegment1} />
                        <View style={styles.chartSegment2} />
                        <View style={styles.chartSegment3} />
                        <View style={styles.chartCenter}>
                            <Ionicons name="wallet-outline" size={40} color="#999" />
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.bottomPadding} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        backgroundColor: '#000000',
        paddingTop: 60,
        paddingBottom: 20,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
    },
    headerTitle: {
        color: '#FFF',
        fontSize: 28,
        fontWeight: '600',
    },
    summaryContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingTop: 20,
        gap: 10,
    },
    card: {
        flex: 1,
        backgroundColor: '#FFF',
        borderRadius: 12,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#133E87',
        marginBottom: 15,
        textAlign: 'center',
    },
    chartContainer: {
        alignItems: 'center',
        marginBottom: 15,
    },
    circularChart: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circularProgress: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 12,
        borderColor: '#E0E0E0',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        transform: [{ rotate: '-90deg' }],
    },
    percentageText: {
        fontSize: 20,
        fontWeight: '700',
        color: '#133E87',
        transform: [{ rotate: '90deg' }],
    },
    cardInfo: {
        gap: 8,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    infoLabel: {
        fontSize: 12,
        color: '#666',
    },
    infoValue: {
        fontSize: 14,
        fontWeight: '600',
        color: '#133E87',
    },
    section: {
        margin: 20,
        marginTop: 10,
        backgroundColor: '#FFF',
        borderRadius: 12,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#133E87',
        marginBottom: 15,
    },
    progressBarsContainer: {
        gap: 12,
    },
    progressBarRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    progressNumber: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#608BC1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressNumberText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
    },
    progressBarWrapper: {
        flex: 1,
    },
    progressBarBackground: {
        height: 36,
        backgroundColor: '#CBDCEB',
        borderRadius: 18,
        overflow: 'hidden',
    },
    progressBarFill: {
        height: '100%',
        borderRadius: 18,
        justifyContent: 'center',
        paddingRight: 15,
        alignItems: 'flex-end',
    },
    progressBarText: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: '600',
    },
    legend: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 15,
        marginBottom: 20,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    legendDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
    },
    legendText: {
        fontSize: 12,
        color: '#666',
    },
    semicircularChartContainer: {
        alignItems: 'center',
        marginTop: 10,
    },
    semicircularChart: {
        width: 200,
        height: 120,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    chartSegment1: {
        position: 'absolute',
        width: 180,
        height: 90,
        backgroundColor: '#608BC1',
        borderTopLeftRadius: 90,
        borderTopRightRadius: 90,
        bottom: 0,
    },
    chartSegment2: {
        position: 'absolute',
        width: 140,
        height: 70,
        backgroundColor: '#133E87',
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70,
        bottom: 0,
        left: 30,
    },
    chartSegment3: {
        position: 'absolute',
        width: 100,
        height: 50,
        backgroundColor: '#F3F3E0',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        bottom: 0,
        left: 50,
    },
    chartCenter: {
        position: 'absolute',
        width: 80,
        height: 80,
        backgroundColor: '#FFFFFF',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: -20,
    },
    bottomPadding: {
        height: 10,
    },
});

export default DashboardScreen;
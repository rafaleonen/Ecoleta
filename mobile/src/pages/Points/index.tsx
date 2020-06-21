import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import MapView, { Marker } from 'react-native-maps'
import { SvgUri } from 'react-native-svg'

import styles from './styles'

const Points = () => {
    const navigation = useNavigation()

    function handleNavigateBack() {
        navigation.goBack()
    }

    function handleNavigateToDetails() {
        navigation.navigate('Details')
    }

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={handleNavigateBack}
                >
                    <Icon name="arrow-left" size={20} color="#34cb79" />
                </TouchableOpacity>

                <Text style={styles.title}>Bem vindo.</Text>
                <Text style={styles.description}>Encontre no mapa um ponto de coleta.</Text>

                <View style={styles.mapContainer}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: -22.9343722,
                            longitude: -47.0485725,
                            latitudeDelta: 0.014,
                            longitudeDelta: 0.014
                        }}
                    >
                        <Marker
                            style={styles.mapMarker}
                            onPress={handleNavigateToDetails}
                            coordinate={{
                                latitude: -22.9343722,
                                longitude: -47.0485725
                            }}
                        >
                            <View style={styles.mapMarkerContainer}>
                                <Image
                                    style={styles.mapMarkerImage}
                                    source={{ uri: 'https://images.unsplash.com/photo-1501523460185-2aa5d2a0f981?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' }}
                                />
                                <Text style={styles.mapMarkerTitle}>Mercado</Text>
                            </View>
                        </Marker>
                    </MapView>
                </View>
            </View>
            <View style={styles.itemsContainer}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 20 }}
                >
                    <TouchableOpacity style={styles.item} onPress={() => { }} >
                        <SvgUri width={42} height={42} uri="http://192.168.1.105:3333/uploads/lampadas.svg" />
                        <Text style={styles.itemTitle}>Lâmpadas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => { }} >
                        <SvgUri width={42} height={42} uri="http://192.168.1.105:3333/uploads/lampadas.svg" />
                        <Text style={styles.itemTitle}>Lâmpadas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => { }} >
                        <SvgUri width={42} height={42} uri="http://192.168.1.105:3333/uploads/lampadas.svg" />
                        <Text style={styles.itemTitle}>Lâmpadas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => { }} >
                        <SvgUri width={42} height={42} uri="http://192.168.1.105:3333/uploads/lampadas.svg" />
                        <Text style={styles.itemTitle}>Lâmpadas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => { }} >
                        <SvgUri width={42} height={42} uri="http://192.168.1.105:3333/uploads/lampadas.svg" />
                        <Text style={styles.itemTitle}>Lâmpadas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => { }} >
                        <SvgUri width={42} height={42} uri="http://192.168.1.105:3333/uploads/lampadas.svg" />
                        <Text style={styles.itemTitle}>Lâmpadas</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </>
    )
}

export default Points
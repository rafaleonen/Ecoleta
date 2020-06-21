import React from 'react'
import { View, TouchableOpacity, Image, Text, SafeAreaView } from 'react-native'
import { Feather as Icon, FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'

const Details = () => {
    const navigation = useNavigation()

    function handleNavigateBack() {
        navigation.goBack()
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
            <TouchableOpacity
                    onPress={handleNavigateBack}
                >
                    <Icon name="arrow-left" size={20} color="#34cb79" />
                </TouchableOpacity>
                <Image style={styles.pointImage} source={{ uri: 'https://images.unsplash.com/photo-1501523460185-2aa5d2a0f981?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'}}/>
        
            <Text style={styles.pointName}>Mercado</Text>
            <Text style={styles.pointItems}>Lâmpadas, Óleo de Cozinha</Text>
            
            <View style={styles.address}>
                <Text style={styles.addressTitle}>Endereço</Text>
                <Text style={styles.addressContent}>Campinas, SP</Text>
            </View>
        </View>
        <View style={styles.footer}>
            <RectButton style={styles.button}>
                <FontAwesome name="whatsapp" size={20} color="#fff" />
                <Text style={styles.buttonText}>Whatsapp</Text>
            </RectButton>
            <RectButton style={styles.button}>
                <Icon name="mail" size={20} color="#fff" />
                <Text style={styles.buttonText}>E-mail</Text>
            </RectButton>
        </View>
        </SafeAreaView>

    )
}

export default Details
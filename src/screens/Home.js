import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Home = ({ navigation }) => {
    return (
        <View>
            <Pressable onPress={() => navigation.navigate({ name: 'PropertiesBoughtPage' })}>
                <MaterialCommunityIcons name='Home' size={50} />
            </Pressable>
            <Pressable>
                <MaterialCommunityIcons name='Home' size={50} />
            </Pressable>
            <Pressable>
                <MaterialCommunityIcons name='Home' size={50} />
            </Pressable>
        </View>
    )
}

export default Home

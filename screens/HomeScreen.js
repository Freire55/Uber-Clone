import { View, Text, SafeAreaView, Image, } from 'react-native'
import React from 'react'
import SafeViewAndroid from './SafeViewAndroid'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'

const HomeScreen = () => {
  return (
    <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, tw`bg-white h-full`]} >
      <View className="p-5">
        <Image 
        style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
        }}
            source={{
                uri: "https://links.papareact.com/gzs"
            }}
        />

        <NavOptions />

      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View>
      <Text  className="text-red-500 text-lg" >Avishka Vishmitha </Text>
      <Link href='/user/' >user</Link>
    </View>
  )
}

export default index
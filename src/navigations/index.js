import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//screens
import { HomeScreen } from '~/screens'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const MainStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen} />
    </Tab.Navigator>
  )
}
const Navigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Main' component={MainStack}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

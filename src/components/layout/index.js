import React from 'react'
import styles from './styles'

import {
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native'

const Layout = (props) => {

  const isDarkMode = false
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
      >
        { props.children }
      </ScrollView>
    </SafeAreaView>
  )
}

export default Layout

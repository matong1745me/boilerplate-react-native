import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import Layout from '~/components/layout'

const HomeScreen = () => {
  return (
    <Layout>
      <View style={styles.main}>
        <Text>
          Home
        </Text>
      </View>
    </Layout>
  )
}

export default HomeScreen

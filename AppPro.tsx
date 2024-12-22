import React from 'react'
import { SafeAreaView, StyleSheet, Text, useColorScheme, View } from 'react-native'

const AppPro = (): JSX.Element => {
    const isDarkMode = useColorScheme() === 'dark'; 

  return (
    <SafeAreaView>
        <View style={styles.container}>
            <Text style={!isDarkMode ? styles.whiteText : styles.darkText}>Hello</Text>   
            <Text>Hello</Text>   
            <Text>Hello</Text>   

        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container : {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        // width: 'auto',
        // height: '100%'
    },
    whiteText : {
        color: 'white'
    },
    darkText : {
        color: 'black'
    }
})

export default AppPro

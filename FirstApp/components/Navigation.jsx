import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native'
import { router } from 'expo-router'

const Navigation = () => {
  return (
     <View style={styles.container}>
      <Button style={styles.buttonss} title="Go to Movies" onPress={() => router.push("/Movies")} />
      <Button title="Go to Series" onPress={() => router.push("/Series")} />
      <Button title="Open Modal" onPress={() => router.push("/modal")} />
    </View>
  )
}

export default Navigation

const styles = StyleSheet.create({
      container: {
        display: "flex",
        flexDirection: "row",
        gap: 14,
        bottom: "10%",
        position: "fixed",
        height: "10%",
        width: "100%",
        backgroundColor: "#000000",
    },
    buttonss:{
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
    }
})
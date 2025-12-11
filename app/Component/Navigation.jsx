import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const Navigation = () => {
  return (
    <View style={styles.container}>
      <Button title="Go to Movies" onPress={() => router.push("/Movies")} />
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
        left: "30%",
        position: "fixed",
        translateX: "-30%",
        height: "20%",
        width: "100%",
    }

})
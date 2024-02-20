import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView from "react-native-maps";

const LiveTracking = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <Text>hi</Text>
    </View>
  );
};

export default LiveTracking;

const styles = StyleSheet.create({
  container: {
    height: "50%",
    width: "100%",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Pressable
        onPress={() => {
          navigation.navigate("BusinessReg");
        }}
      >
        <Text
          style={{
            marginTop: 15,
            textAlign: "center",
            color: "gray",
            fontSize: 16,
          }}
        >
          Business Registration
        </Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("Business");
        }}
      >
        <Text
          style={{
            marginTop: 15,
            textAlign: "center",
            color: "gray",
            fontSize: 16,
          }}
        >
          Business
        </Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("ProductReg");
        }}
      >
        <Text
          style={{
            marginTop: 15,
            textAlign: "center",
            color: "gray",
            fontSize: 16,
          }}
        >
          Product Registration
        </Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

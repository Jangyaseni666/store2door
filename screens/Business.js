import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";
import React from "react";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

export default function Business() {
  const navigation = useNavigation();
  const [mallName, setMallName] = useState("");
  const [shopName, setShopName] = useState("");
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="never"
      style={{ paddingTop: 30 }}
    >
      {/* bg img */}
      <View style={styles.container}>
        <ImageBackground
          style={{ height: 150, width: "100%" }}
          source={require("../assets/defaultBgImg.jpeg")}
        >
          <View style={styles.backArrow}>
            <AntDesign
              name="arrowleft"
              size={24}
              color="black"
              onPress={() => navigation.goBack()}
            />
          </View>
        </ImageBackground>
      </View>

      {/* discount bar */}
      <View
        style={{
          backgroundColor: "#dfe1e6",
          padding: 5,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "green", fontSize: 14, fontWeight: "bold" }}>
          Discount!!!
        </Text>
      </View>

      {/* shop info */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            {shopName == "" ? "Shop name" : shopName}
          </Text>
          <Text style={{ fontSize: 14, color: "gray" }}>
            {mallName == "" ? "Mall name,address" : mallName}
          </Text>
          <View style={{ marginTop: 10, flexDirection: "row", gap: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <Entypo
                name="star"
                size={14}
                color="gray"
                style={{ marginTop: 1 }}
              />
              <Text style={{ fontSize: 14, color: "gray" }}>4.9(515k+)</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Entypo
                name="location-pin"
                size={15}
                color="gray"
                style={{ marginTop: 2 }}
              />
              <Text style={{ fontSize: 14, color: "gray" }}>2.3 km away</Text>
            </View>
          </View>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text>Collect</Text>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>5</Text>
          <Text>mins</Text>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text>Delivery</Text>
          <View
            style={{
              alignItems: "center",
              backgroundColor: "orange",
              width: 55,
              height: 55,
              borderRadius: 50,
              padding: 2,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
              15
            </Text>
            <Text style={{ color: "white" }}>mins</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backArrow: {
    margin: 10,
    backgroundColor: "white",
    width: 25,
    height: 25,
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

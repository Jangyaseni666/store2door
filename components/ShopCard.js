import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useState } from "react";
import { Entypo } from "@expo/vector-icons";

const ShopCard = ({ shopId }) => {
  const [shopName, setShopName] = useState("");
  const [review, setReview] = useState("1");
  const [pfp, setPfp] = useState(null);
  return (
    <View style={styles.preview}>
      <View
        style={{
          minWidth: "40%",
          marginLeft: 7,
        }}
      >
        <Image
          style={styles.pfpImg}
          source={
            pfp == null ? require("../assets/defaultPfp.jpg") : { uri: pfp }
          }
        />
      </View>
      <View>
        <Text style={{ textAlign: "left", fontWeight: "bold" }}>
          {shopName == "" ? "Shop's name" : shopName}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Entypo name="star" size={14} color="gray" style={{ marginTop: 2 }} />
          <Text style={{ textAlign: "left" }}>{review}</Text>
        </View>
      </View>
    </View>
  );
};

export default ShopCard;

const styles = StyleSheet.create({
  pfpImg: {
    width: "90%",
    height: 140,
  },
  preview: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#D0D0D0",
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 10,
  },
});

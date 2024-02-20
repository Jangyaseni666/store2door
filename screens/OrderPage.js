import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import OrderCard from "../components/OrderCard";

const OrderPage = () => {
  const [delDate, setDelDate] = useState("");
  const [orderAmt, setOrderAmt] = useState("0");
  const [totPrice, setTotPrice] = useState("0");
  const [orderIds, setOrderIds] = useState([]);
  const [customerAddr, setCustomerAddr] = useState("");
  const get_id = async () => {
    // const response = await fetch(`${Link}/`, {
    //   method: "GET",
    // });
    // console.log(response);
    // if (response.ok) {
    //   const data = await response.json();
    //   console.log(data);
    //   setShopIds(data);
    // } else {
    //   const err = await response.json();
    //   console.log(err);
    // }
    const data = [1, 2, 3, 4, 5];
    setOrderIds(data);
  };

  useEffect(() => {
    get_id();
  }, []);

  return (
    <ScrollView style={{ paddingHorizontal: 30 }}>
      <View style={{ alignItems: "center", marginTop: 60, gap: 10 }}>
        <Image
          style={{ borderWidth: 1, borderRadius: 50, height: 150, width: 150 }}
          source={require("../assets/shoping_bag.png")}
        />
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          Thanks for Shopping!
        </Text>
        <Text style={{ textAlign: "center", fontSize: 16, width: 300 }}>
          We have your order and are getting it ready to be shipped. We will
          notify you when its on its way!
        </Text>
        <View style={{ flexDirection: "row", marginVertical: 10 }}>
          <Text>Your order will be delivered by</Text>
          <Text style={{ fontWeight: "bold" }}>
            {" "}
            {delDate == "" ? "delivery date" : delDate}.
          </Text>
        </View>
        <View style={styles.horizontalLine} />
        <Text>You have ordered {orderAmt} products</Text>
        <View style={{ paddingHorizontal: 20, marginBottom: 50 }}>
          {orderIds.map((orderId) => (
            <OrderCard key={orderId} orderId={orderId} />
          ))}
        </View>
      </View>
      <View style={{ gap: 5 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Total MRP</Text>
          <Text>₹{totPrice}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Shipping Charges</Text>
          <Text>₹{parseInt(totPrice) * 0.1}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "orange" }}>Discount Applied</Text>
          <Text style={{ color: "orange" }}>₹50</Text>
        </View>
      </View>
      <View style={styles.horizontalLine} />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Total MRP</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          ₹{parseInt(totPrice) + parseInt(totPrice) * 0.1 - 50}
        </Text>
      </View>
      <View style={styles.horizontalLine} />
      <Text style={{ color: "gray" }}>Mode of Payment:</Text>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>Credit Card </Text>
      <View style={styles.horizontalLine} />
      <Text style={{ color: "gray" }}>Delivered to:</Text>
      <TextInput
        style={{ fontSize: 16, fontWeight: "bold" }}
        value={customerAddr}
        onChangeText={(text) => setCustomerAddr(text)}
        placeholder="Enter your Address"
      />
      <View style={styles.horizontalLine} />
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? "gray" : "black" },
        ]}
      >
        <Text style={styles.buttonText}>Place order</Text>
      </Pressable>
      <View style={styles.horizontalLine} />
    </ScrollView>
  );
};

export default OrderPage;

const styles = StyleSheet.create({
  horizontalLine: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "100%",
    marginVertical: 20,
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

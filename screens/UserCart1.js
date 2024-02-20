import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
// import CartItem from "./CartItem"; // Import CartItem component
import CartItem from "../components/CartItem";
// import { colors } from "../globals/style";
import { btn2, colors, hr80, navbtn, navbtnin } from "../globals/style";

const UserCart1 = ({ navigation }) => {
  const [items, setItems] = useState([]); // State to store cart items

  useEffect(() => {
    // Simulated cart data, you can fetch actual data here
    const cartData = [
      {
        id: 1,
        name: "Glock 19M",
        price: 40000,
        quantity: 1,
        imageUri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfwZ9e9iBT5NXAQVPoETzq0k9AJ5_Pmrg2g&usqp=CAU",
      },
      {
        id: 2,
        name: "Suppressor for Glock 19M",
        price: 2500,
        quantity: 1,
        imageUri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV94Trm4C0mFxAgila3JP-cYpHOwJW04Fgdw&usqp=CAU",
      },
    ];
    setItems(cartData);
  }, []);

  // Function to update quantity for a specific item
  const updateQuantity = (itemId, newQuantity) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Function to delete an item from the cart
  const deleteItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const calculateTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("home")}>
        <View style={navbtn}>
          <AntDesign name="back" size={24} color="black" style={navbtnin} />
        </View>
      </TouchableOpacity>
      <Text style={styles.head1}>Your Bag</Text>
      <View style={styles.cartout}>
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            updateQuantity={updateQuantity}
            deleteItem={deleteItem}
          />
        ))}
      </View>
      {/* <View style={styles.btncont}>
        <View style={styles.c3}>
          <Text style={styles.txt5}>Total</Text>
          <Text style={styles.txt6}>₹42,500/-</Text>
        </View>
        <TouchableOpacity style={btn2}>
          <Text
            style={styles.btntxt}
            onPress={() => navigation.navigate("placeorder", { cartdata })}
          >
            Place Order
          </Text>
        </TouchableOpacity>
      </View> */}

      <View style={styles.btncont}>
        <Text style={styles.txt5}>Total:</Text>
        <Text style={styles.txt6}> ₹{calculateTotalPrice()}/-</Text>
        <TouchableOpacity
          style={btn2}
          onPress={() => navigation.navigate("placeorder", { cartdata })}
        >
          <Text style={styles.btntxt}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserCart1;

const styles = StyleSheet.create({
  containerout: {
    flex: 1,
    backgroundColor: colors.col1,
    // alignItems: 'center',
    width: "100%",
    // height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: colors.col1,
    // alignItems: 'center',
    // justifyContent: 'center',
    width: "100%",
    // height: '100%',
  },
  head1: {
    fontSize: 40,
    textAlign: "center",
    // fontWeight: "600",
    marginVertical: 50,
    color: colors.text1,
  },
  head2: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "200",
    marginVertical: 20,
    elevation: 10,
    backgroundColor: colors.col1,
    width: "90%",
    height: "50%",
    alignSelf: "center",
    paddingVertical: "25%",
    borderRadius: 10,
  },
  cartcard: {
    flexDirection: "row",
    backgroundColor: colors.col1,
    marginVertical: 5,
    borderRadius: 10,
    width: "95%",
    alignSelf: "center",
    elevation: 10,
    alignItems: "center",
  },
  cartimg: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
  cartcardin: {
    flexDirection: "column",
    margin: 5,
    width: "58%",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: colors.text1,
  },
  cardlist: {
    width: "100%",
  },
  cartout: {
    flex: 1,
    width: "100%",
  },
  btntxt: {
    backgroundColor: colors.text1,
    color: colors.col1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 20,
    borderRadius: 10,
    width: "90%",
    textAlign: "center",
  },
  btncont: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    flexDirection: "row",
    marginBottom: 40,
    borderTopColor: colors.text1,
    borderTopWidth: 0.2,
  },
  bottomnav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: colors.col1,
    zIndex: 20,
  },
  c1: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: colors.col1,
    borderRadius: 10,
    padding: 5,
  },
  txt1: {
    fontSize: 16,
    color: colors.text1,
    width: "60%",
    fontWeight: "bold",
  },
  txt2: {
    fontSize: 16,
    color: colors.text3,
    fontWeight: "bold",
  },
  c2: {
    backgroundColor: colors.text1,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    flexDirection: "row",
  },
  txt3: {
    fontSize: 15,
    color: colors.col1,
  },
  txt5: {
    fontSize: 20,
    color: colors.text3,
    marginHorizontal: 5,
  },
  txt6: {
    fontSize: 25,
    color: colors.text3,
    marginHorizontal: 5,
    fontWeight: "bold",
  },
  c3: {
    flexDirection: "row",
    alignItems: "center",
  },
  c4: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    borderRadius: 10,
    borderColor: colors.text1,
    borderWidth: 1,
    marginVertical: 10,
    padding: 5,
  },
  del: {
    color: colors.col1,
  },
});

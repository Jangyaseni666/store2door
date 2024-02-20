import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BottomNav from "./components/BottomNav";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/Signupscreen";
import Productpage from "./screens/ProductPage";
import UserCart from "./screens/UserCart";

export default function App() {
  // return <SignupScreen />;
  // return <LoginScreen />;
  // return <Productpage />;
  return <UserCart />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  useWindowDimensions,
  Image,
} from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import { FontAwesome } from "@expo/vector-icons";
import { SimpleGrid } from "react-native-super-grid";

export default function Business() {
  const navigation = useNavigation();
  const [mallName, setMallName] = useState("");
  const [shopName, setShopName] = useState("");
  const [shopAddr, setShopAddr] = useState("");
  const [phnNum, setPhnNum] = useState("");
  const [pfp, setPfp] = useState(null);
  const [productName, setProductName] = useState("");
  const [index, setIndex] = useState(0);
  const layout = useWindowDimensions();
  const [routes] = useState([
    { key: "first", title: "INFO" },
    { key: "second", title: "GALLERY" },
  ]);
  const Gallery = () => (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <SimpleGrid
        itemDimension={150}
        data={[1, 2, 3, 4]}
        renderItem={({ item }) => (
          <View style={styles.inputView}>
            <Image
              style={styles.pfpImg}
              source={
                pfp == null ? require("../assets/defaultPfp.jpg") : { uri: pfp }
              }
            />
            <Text>{productName == "" ? "Product name" : productName}</Text>
          </View>
        )}
      />
    </ScrollView>
  );

  const Information = () => (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 5,
        }}
      >
        <Entypo
          name="location-pin"
          size={20}
          color="gray"
          style={{ marginTop: 4 }}
        />
        <Text style={{ fontSize: 19, color: "gray" }}>
          {shopAddr == "" ? "your Shop address" : shopAddr}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 5,
        }}
      >
        <FontAwesome
          style={{ marginTop: 4, marginLeft: 5 }}
          name="phone"
          size={20}
          color="gray"
        />
        <Text style={{ fontSize: 19, color: "gray" }}>
          {phnNum == "" ? "Your phone number" : phnNum}
        </Text>
      </View>
      <View style={{ margin: 10 }}>
        <Text style={{ fontSize: 18, color: "gray" }}>Description:</Text>
        <Text style={{ color: "gray" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
          consequuntur nostrum et aspernatur repudiandae itaque saepe hic, odio,
          nobis doloribus laboriosam. Voluptates nam in libero nisi officia
          commodi fugit eaque unde dolore praesentium magni quis minima, saepe
          necessitatibus ratione ducimus sunt beatae quam ipsam non quae magnam
          natus totam quibusdam? Earum recusandae iure ab voluptas sint, beatae
          rem quae aspernatur perferendis qui quibusdam magnam neque laborum sed
          id repellendus amet aperiam soluta. Non, adipisci veniam. Vel veniam
          deleniti repellat possimus sed libero atque assumenda. Laudantium
          reiciendis, voluptates, quis quisquam magni rerum, repellat commodi
          necessitatibus quam aliquam exercitationem ut blanditiis libero!
        </Text>
      </View>
    </ScrollView>
  );
  const renderScene = SceneMap({
    first: Information,
    second: Gallery,
  });
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "white" }}
      style={styles.tab}
      labelStyle={{ fontWeight: "bold" }}
    />
  );
  return (
    <View style={{ paddingTop: 30 }}>
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
      <TabView
        style={{ marginTop: 10, minHeight: 700 }}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
        tabBarPosition="top"
      />
    </View>
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
  tab: {
    paddingTop: 0,
    backgroundColor: "orange",
    justifyContent: "space-between",
  },
  pfpImg: {
    width: "90%",
    height: 140,
  },
  inputView: {
    alignItems: "center",
    backgroundColor: "#D0D0D0",
    paddingVertical: 5,
    borderRadius: 5,
  },
});

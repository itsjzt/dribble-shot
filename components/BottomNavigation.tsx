import * as React from "react";
import { StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface BottomNavigationProps {}

const BottomNavigation: React.SFC<BottomNavigationProps> = props => {
  return (
    <View style={[styles.bottomBar, styles.shadow]}>
      <View style={[styles.bottomBarIcon, styles.black]}>
        <AntDesign name="home" size={24} color={"white"} />
      </View>
      <View style={[styles.bottomBarIcon]}>
        <AntDesign name="setting" size={24} />
      </View>
      <View style={[styles.bottomBarIcon]}>
        <AntDesign name="book" size={24} />
      </View>
      <View style={[styles.bottomBarIcon]}>
        <AntDesign name="search1" size={24} />
      </View>
      <View style={[styles.bottomBarIcon]}>
        <AntDesign name="user" size={24} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  black: {
    backgroundColor: "#000"
  },
  shadow: {
    shadowColor: "#efefef",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5
  },
  bottomBar: {
    position: "absolute",
    flexDirection: "row",
    bottom: 32,
    left: 32,
    right: 32,
    overflow: "hidden",

    borderColor: "#efefef",
    backgroundColor: "#fff",
    borderRadius: 32
  },
  bottomBarIcon: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 8,
    paddingLeft: 8,
    alignItems: "center"
  }
});
export default BottomNavigation;

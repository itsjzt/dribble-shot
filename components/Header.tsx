import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface HeaderProps {}

const Header: React.SFC<HeaderProps> = props => {
  return (
    <View style={styles.header}>
      {/* <Ionicons name="md-menu" size={26} /> */}
      {/* <AntDesign name="menuunfold" size={22} /> */}
      <Text>Welcome</Text>
      <Text style={styles.date}>Mar 12, 2008</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    // paddingLeft: 16,
    paddingTop: 16,
    // paddingRight: 16,
    paddingBottom: 16
  },
  date: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#676767"
  }
});
export default Header;

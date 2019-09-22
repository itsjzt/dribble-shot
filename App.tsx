import React from "react";
import { StyleSheet, Text, View, StatusBar, ScrollView } from "react-native";
import Header from "./components/Header";
import CardView from "./components/CardView";
import BottomNavigation from "./components/BottomNavigation";
import BlogList from "./components/BlogList";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <ScrollView>
        <Header />
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.heading}>Browse News</Text>
        </View>
        <CardView />

        <BlogList />
      </ScrollView>

      {/* I donno how to add shadow in react native */}

      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
    backgroundColor: "#fff"
  },

  heading: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center"
  },

  green: {
    backgroundColor: "#56ed56"
  },
  blue: {
    backgroundColor: "#5656ed"
  },

  subHeading: {
    fontWeight: "600",
    fontSize: 18,
    marginTop: 16,
    marginBottom: 16,
    color: "#454545"
  },
  smallHeading: {
    fontWeight: "600",
    marginTop: 8,
    marginBottom: 8,
    fontSize: 14,
    color: "#454545"
  }
});

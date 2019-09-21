import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <ScrollView>
        <View style={styles.header}>
          <Ionicons name="md-menu" size={32} />
          <Text style={styles.date}>Mar 12, 2008</Text>
        </View>
        <View>
          <Text style={styles.heading}>Browse News</Text>
        </View>
        <View style={styles.cards}>
          <ScrollView horizontal={true}>
            <View style={[styles.card, styles.red]}>
              <ImageBackground
                style={styles.cardImage}
                source={{
                  uri:
                    "https://images.unsplash.com/photo-1559933266-df948b6deba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
                }}
              >
                <View style={styles.cardBody}>
                  <Text style={styles.subHeading}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </Text>
                  <View style={styles.listMeta}>
                    <Text style={styles.tag}>business</Text>
                    <Text style={styles.date}>12 Mar, 2015</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
            <View style={[styles.card, styles.red]}>
              <ImageBackground
                style={styles.cardImage}
                source={{
                  uri:
                    "https://images.unsplash.com/photo-1559933266-df948b6deba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
                }}
              >
                <View style={styles.cardBody}>
                  <Text style={styles.subHeading}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </Text>
                  <View style={styles.listMeta}>
                    <Text style={styles.tag}>business</Text>
                    <Text style={styles.date}>12 Mar, 2015</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
            <View style={[styles.card, styles.red]}>
              <ImageBackground
                style={styles.cardImage}
                source={{
                  uri:
                    "https://images.unsplash.com/photo-1559933266-df948b6deba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
                }}
              >
                <View style={styles.cardBody}>
                  <Text style={styles.subHeading}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </Text>
                  <View style={styles.listMeta}>
                    <Text style={styles.tag}>business</Text>
                    <Text style={styles.date}>12 Mar, 2015</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </ScrollView>
        </View>
        <View style={styles.list}>
          <View style={styles.listItem}>
            <Image
              style={styles.listItemImage}
              source={{
                uri:
                  "https://images.unsplash.com/photo-1504276048855-f3d60e69632f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
              }}
            />
            <View style={styles.listItemContent}>
              <Text textBreakStrategy="balanced" style={styles.smallHeading}>
                The everything travellers guide to packing and tickets and how
                not to get them wrong
              </Text>
              <View style={styles.listMeta}>
                <Text style={styles.tag}>Travel</Text>
                <Text style={styles.date}>13 Mar, 2018</Text>
              </View>
            </View>
          </View>
          <View style={styles.listItem}>
            <Image
              style={styles.listItemImage}
              source={{
                uri:
                  "https://images.unsplash.com/photo-1504276048855-f3d60e69632f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
              }}
            />
            <View style={styles.listItemContent}>
              <Text textBreakStrategy="balanced" style={styles.smallHeading}>
                The everything travellers guide to packing and tickets and how
                not to get them wrong
              </Text>
              <View style={styles.listMeta}>
                <Text style={styles.tag}>Travel</Text>
                <Text style={styles.date}>13 Mar, 2018</Text>
              </View>
            </View>
          </View>
          <View style={styles.listItem}>
            <Image
              style={styles.listItemImage}
              source={{
                uri:
                  "https://images.unsplash.com/photo-1504276048855-f3d60e69632f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
              }}
            />
            <View style={styles.listItemContent}>
              <Text textBreakStrategy="balanced" style={styles.smallHeading}>
                The everything travellers guide to packing and tickets and how
                not to get them wrong
              </Text>
              <View style={styles.listMeta}>
                <Text style={styles.tag}>Travel</Text>
                <Text style={styles.date}>13 Mar, 2018</Text>
              </View>
            </View>
          </View>
          <View style={styles.listItem}>
            <Image
              style={styles.listItemImage}
              source={{
                uri:
                  "https://images.unsplash.com/photo-1504276048855-f3d60e69632f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
              }}
            />
            <View style={styles.listItemContent}>
              <Text textBreakStrategy="balanced" style={styles.smallHeading}>
                The everything travellers guide to packing and tickets and how
                not to get them wrong
              </Text>
              <View style={styles.listMeta}>
                <Text style={styles.tag}>Travel</Text>
                <Text style={styles.date}>13 Mar, 2018</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* I donno how to add shadow in react native */}
      <View style={styles.bottomBar}>
        <View style={[styles.bottomBarIcon, styles.red]}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginTop: 32,
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingTop: 32,
    paddingRight: 16,
    paddingBottom: 32,
  },
  date: {
    fontSize: 12,
    color: "#676767",
  },
  heading: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
  },
  bottomBar: {
    position: "absolute",
    flexDirection: "row",
    bottom: 32,
    left: 32,
    right: 32,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#efefef",
    backgroundColor: "#fff",
    borderRadius: 32,
  },
  bottomBarIcon: {
    flex: 1,
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 8,
    paddingLeft: 8,
    alignItems: "center",
  },
  red: {
    backgroundColor: "#ed5656",
  },
  green: {
    backgroundColor: "#56ed56",
  },
  blue: {
    backgroundColor: "#5656ed",
  },
  cards: {
    flexDirection: "row",
    overflow: "visible",
  },
  card: {
    borderRadius: 16,
    margin: 16,
    overflow: "hidden",
  },
  cardImage: {
    // they aren't magic number this is the size of A3 paper.
    width: 297,
    height: 420,
    flexDirection: "column-reverse",
  },
  cardBody: {
    maxHeight: 148,
    overflow: "hidden",
    borderRadius: 8,
    backgroundColor: "white",
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 8,
    paddingBottom: 8,
    margin: 16,
  },
  list: {},
  listItem: {
    flexDirection: "row",
    padding: 16,
    overflow: "hidden",
  },
  listItemImage: {
    borderRadius: 16,
    width: 74,
    height: 74,
  },
  listItemContent: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  subHeading: {
    fontWeight: "600",
    fontSize: 18,
    marginTop: 16,
    marginBottom: 16,
    color: "#454545",
  },
  smallHeading: {
    fontWeight: "600",
    marginTop: 8,
    marginBottom: 8,
    fontSize: 14,
    color: "#454545",
  },
  tag: {
    fontSize: 12,
    color: "#3599ff",
    textTransform: "uppercase",
    backgroundColor: "#fff",
  },
  listMeta: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: 16,
    paddingRight: 16,
  },
});

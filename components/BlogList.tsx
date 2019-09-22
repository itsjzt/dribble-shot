import * as React from "react";
import { StyleSheet, View, Text, Image, FlatList } from "react-native";

interface BlogListProps {}

const BlogList: React.SFC<BlogListProps> = props => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.list}>
          <View style={styles.listItem}>
            <Image
              style={styles.listItemImage}
              source={{
                uri:
                  "https://images.unsplash.com/photo-1504276048855-f3d60e69632f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              }}
            />
            <View style={styles.listItemContent}>
              <Text textBreakStrategy="balanced" style={styles.smallHeading}>
                The everything travellers guide to packing and tickets and how
                not to get them wrong
              </Text>
              <View style={styles.listMeta}>
                <Text style={styles.tag}>Travel</Text>
                {/* <Text style={styles.date}>13 Mar, 2018</Text> */}
              </View>
            </View>
          </View>
        </View>
      )}
    />
  );
};
const data = [{}, {}, {}, {}];
const styles = StyleSheet.create({
  date: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#676767"
  },
  listMeta: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  smallHeading: {
    fontWeight: "600",
    marginTop: 8,
    marginBottom: 8,
    fontSize: 14,
    color: "#454545"
  },
  tag: {
    fontSize: 12,
    color: "#3599ff",
    textTransform: "uppercase",
    backgroundColor: "#fff"
  },
  list: {},
  listItem: {
    flexDirection: "row",

    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    overflow: "hidden"
  },
  listItemImage: {
    borderRadius: 16,
    width: 82,
    height: 82
  },
  listItemContent: {
    paddingLeft: 16,
    paddingRight: 16
  }
});
export default BlogList;

import * as React from "react";
import {
  View,
  ScrollView,
  ImageBackground,
  Text,
  StyleSheet
} from "react-native";

interface CardViewProps {}

const CardView: React.SFC<CardViewProps> = props => {
  return (
    <View style={styles.cards}>
      <ScrollView horizontal={true}>
        <View style={[styles.card, styles.red]}>
          <ImageBackground
            style={styles.cardImage}
            source={{
              uri:
                "https://images.unsplash.com/photo-1559933266-df948b6deba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
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
        {/* <View style={[styles.card, styles.red]}>
          <ImageBackground
            style={styles.cardImage}
            source={{
              uri:
                "https://images.unsplash.com/photo-1559933266-df948b6deba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
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
                "https://images.unsplash.com/photo-1559933266-df948b6deba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
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
      */}
      </ScrollView>
    </View>
  );
};
export default CardView;
const styles = StyleSheet.create({
  cards: {
    flexDirection: "row",
    overflow: "visible"
  },
  subHeading: {
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 10,
    color: "#454545"
  },
  card: {
    borderRadius: 16,
    marginTop: 16,
    marginRight: 16,
    marginBottom: 16,
    overflow: "hidden"
  },
  cardImage: {
    // they aren't magic number this is the size of A3 paper.
    width: 297,
    height: 420,
    flexDirection: "column-reverse"
  },
  cardBody: {
    maxHeight: 148,
    overflow: "hidden",
    borderRadius: 8,
    backgroundColor: "white",
    padding: 16,
    margin: 16
  },

  date: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#676767"
  },
  red: {
    backgroundColor: "#ed5656"
  },
  tag: {
    fontSize: 12,
    color: "#3599ff",
    textTransform: "uppercase",
    backgroundColor: "#fff"
  },
  listMeta: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

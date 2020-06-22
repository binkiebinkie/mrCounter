import React, { useContext } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import Counter from "../components/Counter";
import colors from "../config/colors";
import titleScreenBg from "../assets/titleScreenBg.png";
// import { CountersContext } from "../state/CountersContext";

//rsf
function HomeScreen({ route }) {
  // const { counters } = useContext(CountersContext);
  // const { numSelected } = route.params;

  return (
    <View style={styles.background}>
      <View style={styles.mrCounter}>
        <Text style={styles.mrCounterText}>Mr. Counter</Text>
        <View style={styles.contentContainer}>
          <View style={styles.eyes}>
            <Text>00</Text>
          </View>
          <View style={styles.wishes}>
            <Text>
              "I wish you the best time counting. Please think of me as your
              numbers increase."
            </Text>
            <View style={styles.line}></View>
            <View style={styles.line}></View>
          </View>
          <Button title="OK LET'S COUNT" />
        </View>
      </View>
    </View>
  );
}

//rnss
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: "column"
  },
  mrCounter: {
    flexDirection: "column"
  },
  mrCounterText: {},
  goButton: {
    justifyContent: "center",
    alignItems: "center"
  }
});

export default HomeScreen;

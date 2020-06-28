import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import Counter from "../components/Counter";
import Header from "../components/Header";
import { CountersContext } from "../state/CountersContext";
import { withTheme } from "react-native-elements";

//rsf
function SettingsScreen({ route, theme }) {
  const { counters } = useContext(CountersContext);
  console.log("counterscounters", counters);
  return (
    <>
      <Header />
      <View style={styles.container(theme)}>
        <View style={styles.counterContainer}>
          {counters
            ? counters.map((counter, i) =>
                counter.selected ? (
                  <Counter key={i} counter={counter} index={i} />
                ) : null
              )
            : null}
        </View>
      </View>
    </>
  );
}

//rnss
const styles = StyleSheet.create({
  container: theme => ({
    flex: 1,
    backgroundColor: theme.colors.PureWhite,
    flexDirection: "column"
  }),
  counterContainer: {
    flexDirection: "column"
  },
  goButton: {
    justifyContent: "center",
    alignItems: "center"
  }
});

export default withTheme(SettingsScreen);
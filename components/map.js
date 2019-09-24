import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapView, {MarkerAnimated} from "react-native-maps";

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  container: {
    height: 300,
    width: 300,
    backgroundColor: "tomato"
  },
  map: {
    flex: 1
  }
});

export default class Map extends Component {
  state = {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  }
  render() {
    return (
      <MapView style={styles.map}
        region={this.state.region}
        >
          <MarkerAnimated
            coordinate={this.state.region}
            title="Me"
            description="Represents you"
          />
      </MapView>
    );
  }
}
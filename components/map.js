import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapView, {MarkerAnimated, Overlay} from "react-native-maps";
import Geojson from 'react-native-geojson'
const intersectionGeo = require('./intersections.json');
const walksideGeo = require('./walkside.json');

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
      latitude: 49.282730,
      longitude: -123.120735,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  }

  render() {
    return (
      <MapView style={styles.map}
        region={this.state.region}
        >
          <Geojson geojson={intersectionGeo} />
          <Geojson geojson={walksideGeo} />
      </MapView>
    );
  }
}
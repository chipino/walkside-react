import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapView, {MarkerAnimated, Overlay} from "react-native-maps";
import Geojson from 'react-native-geojson'

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
    },
    intersections: {},
    walkside: {},
    viewMap: false
  }
  
  componentDidMount(){
    fetch("https://walkside-api.herokuapp.com/intersections")
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
       intersections: responseJson
      })
    })
    .catch(error=>console.log(error)) //to catch the errors if any

    fetch("https://walkside-api.herokuapp.com/walkside")
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
       walkside: responseJson
      })
      this.readyToggle()
    })
    .catch(error=>console.log(error)) //to catch the errors if any
  }

  readyToggle = () => {
    if(this.state.viewMap === false){
      this.setState({viewMap: true})
    }
  }

  render() {
    return (
      this.state.viewMap &&<MapView style={styles.map}
        region={this.state.region}
        zoomControlEnabled={true}
        zoomEnabled={true}
        zoomTapEnabled={true}
        >
          <MarkerAnimated
            coordinate={this.state.region}
            title="Me"
            description="Represents you"
          />
          {/* <Geojson geojson={intersectionGeo} /> */}
          <Geojson geojson={this.state.walkside} />
      </MapView>
    );
  }
}
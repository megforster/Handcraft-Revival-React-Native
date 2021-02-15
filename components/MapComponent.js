import React, { Component } from "react";
import {View, Text, StyleSheet, Alert} from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import MapView from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const apiKey = require("../apiKey.json")

class Map extends Component{
    state = {
        initialRegion: null
    }
    getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                let region = {
                    latitude: parseFloat(position.coords.latitude), 
                    longitude: parseFloat(position.coords.longitude), 
                    latitudeDelta: 5, 
                    longitudeDelta: 5
                };
                this.setState({
                    initialRegion: region
                });
            }, 
            error => console.log(error), 
            {enableHighAccuracy: true, timeout: 20000, maximumAge:1000}
        )
    }

    componentDidMount(){
        this.getCurrentLocation();
    }

    render(){
        return(
            <View>
                <Text style={{marginLeft: 10, fontSize:25}}>Store Finder</Text>
                <GooglePlacesAutocomplete
                    placeholder='Search'
                    onPress={(data, details = null) => {
                        fetchDetails = true
                        console.log(data, details);
                    }}
                    query={{
                        key: apiKey.api_key,
                        language: 'en',
                    }}
                />
                <MapView
                    initialRegion={this.state.initialRegion}
                    style= {styles.map}
                    followUserLocation={true}
                    showsUserLocation={true}
                    zoomEnabled = {true}
                />
                <TextInput />
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    map: {
      height: 500,
      marginTop: 50
    },
});

export default Map;
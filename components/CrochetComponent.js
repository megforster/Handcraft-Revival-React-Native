import React, { Component } from "react";
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import Video from 'react-native-video';

class Crochet extends Component{
    render(){
        return(
            <ScrollView style={{paddingTop:25}}>
                <Text style={{paddingBottom:25, marginLeft: 10, fontSize:25}}>Crochet</Text>
                <Image
                    source = {require('./images/crochet.jpg')}
                    style ={{height: 300,width: 400}}
                />
                <Video
                    source = {require("../assets/crochet.mp4")} 
                    style = {styles.backgroundVideo}
                    controls={true}
                    ref={(ref) => {
                    this.player = ref
                    }} 
                />
            </ScrollView>
        );
    }
}

var styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });

export default Crochet;
import React, { Component } from "react";
import {View, Text, ScrollView} from 'react-native';
import { Video } from "expo-av";

class Crochet extends Component{
    render(){
        return(
            <ScrollView style={{paddingTop:25}}>
                <Text style={{paddingBottom:25, marginLeft: 10, fontSize:25}}>Crochet</Text>
                <View style={{borderBottomColor: '#a9d88d',borderBottomWidth: 1, marginLeft:10, marginRight:10, marginTop:10}}/>
                <Text style={{marginLeft: 10, fontSize:18}}>What Is Crochet?</Text>
                <Text style={{marginLeft: 10, marginRight:10}}>Crochet can be defined as a handicraft in which yarn is made up into patterned fabric by looping yarn with a hooked needle. Most agree the term was derived from the French tern crochet meaning 'small hook'. Most crocheters use either yarn or crochet thread to create their projects, though some varients of crochet involve wire, beads, and other materials. The most common projects include afghans, baby blankets, baby booties, scarves, hats, granny squares, shawls, purses, and totebags among others.</Text>
                <View style={{borderBottomColor: '#a9d88d',borderBottomWidth: 1, marginLeft:10, marginRight:10, marginTop:10}}/>
                <Video
                    source = {require("./videoAssets/crochet.mp4")} 
                    rate={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    useNativeControls
                    shouldPlay
                    style={{width: 400, height: 300, marginTop:10}}
                />
            </ScrollView>
        );
    }
}

export default Crochet;
import React, { Component } from "react";
import {ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import { Card } from "react-native-elements";
import {TOPICDATA} from '../shared/topicData'

function RenderTopics({topic}, {nav}){
    return(
        <TouchableOpacity 
            onPress = {() => nav.navigate('Resource', {title: topic.title})}
        >
            <Card>
                <Image
                    source = {require('./images/logo.png')}
                    style={{alignSelf:"center"}}
                />
                <Text style={{textAlign:"center"}}>{topic.title}</Text>
            </Card>
        </TouchableOpacity>
    );
}

class Supplies extends Component{
    
    constructor(props){
        super(props);
        this.state ={
          topicData: TOPICDATA
        }
    }
    
    render(){
        const {navigate} = this.props.navigation;
        const suppliesData = this.state.topicData.filter(item => item.topic === "Supplies").map(item => {
            return(
                <RenderTopics topic = {item} nav = {navigate}/>
              )
            }
        )
        return(
            <ScrollView >
                <Text style={{marginLeft: 10, fontSize:25}}>Crochet Supplies</Text>
                {suppliesData}
            </ScrollView>
        );
    }
}

export default Supplies;
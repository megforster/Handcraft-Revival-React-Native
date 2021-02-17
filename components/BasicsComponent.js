import React, { Component } from "react";
import {ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import { Card } from "react-native-elements";
import {TOPICDATA} from '../shared/topicData'

function RenderTopics({topic, nav}){
    return(
        <TouchableOpacity
            onPress = {() => nav('Resource', {title: topic.title})}
        >
            <Card>
                <Image
                    source = {require('./images/logo.png')}
                    style={{alignSelf:"center"}}
                />
                <Text>{topic.title}</Text>
            </Card>
        </TouchableOpacity>
    );
}

class Basic extends Component{

    constructor(props){
        super(props);
        this.state ={
          topicData: TOPICDATA
        }
    }

    render(){
        const {navigate} = this.props.navigation;
        const basicsData = this.state.topicData.filter(item => item.topic === "Basics").map(item => {
            return(
                <RenderTopics topic = {item} nav = {navigate}/>
              )
            }
        )

        return(
            <ScrollView >
                <Text style={{marginLeft: 10, fontSize:25}}>Crochet Basics</Text>
                {basicsData}
            </ScrollView>
        );
    }
}

export default Basic;
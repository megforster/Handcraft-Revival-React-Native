import React, { Component } from "react";
import {ScrollView, Text, Image} from 'react-native';
import { Card } from "react-native-elements";
import {TOPICDATA} from '../shared/topicData'

function RenderTopics({topic}){
    return(
        <Card>
            <Image
                source = {require('./images/logo.png')}
                style={{alignSelf:"center"}}
            />
            <Text>{topic.title}</Text>
        </Card>
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
        const basicsData = this.state.topicData.filter(item => item.topic === "Basics").map(item => {
            return(
                <RenderTopics topic = {item}/>
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
import React, { Component } from "react";
import {ScrollView, Text, Image} from 'react-native';
import { Card } from "react-native-elements";
import {TOPICDATA} from '../shared/topicData'

function RenderTopics({topic}){
    return(
        <Card>
            <Image
                source = {require('./images/logo.png')}
            />
            <Text>{topic.title}</Text>
        </Card>
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
        const suppliesData = this.state.topicData.filter(item => item.topic === "Supplies").map(item => {
            return(
                <RenderTopics topic = {item}/>
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
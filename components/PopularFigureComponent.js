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

class Popular extends Component{
    constructor(props){
        super(props);
        this.state ={
          topicData: TOPICDATA
        }
    }

    render(){
        const popularData = this.state.topicData.filter(item => item.topic === "Popular").map(item => {
            return(
                <RenderTopics topic = {item}/>
              )
            }
        )

        return(
            <ScrollView >
                <Text style={{marginLeft: 10, fontSize:25}}>Popular Crocheters</Text>
                {popularData}
            </ScrollView>
        );
    }
}

export default Popular;
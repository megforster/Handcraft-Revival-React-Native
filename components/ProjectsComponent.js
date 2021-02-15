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
class Projects extends Component{
    constructor(props){
        super(props);
        this.state ={
          topicData: TOPICDATA
        }
    }

    render(){
        const projectsData = this.state.topicData.filter(item => item.topic === "Projects").map(item => {
            return(
                <RenderTopics topic = {item}/>
              )
            }
        )

        return(
            <ScrollView >
                <Text style={{marginLeft: 10, fontSize:25}}>Beginner Projects</Text>
                {projectsData}
            </ScrollView>
        );
    }
}

export default Projects;
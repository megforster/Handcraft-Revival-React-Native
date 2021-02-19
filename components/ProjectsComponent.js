import React, { Component } from "react";
import {StyleSheet, ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import { Card } from "react-native-elements";
import {TOPICDATA} from '../shared/topicData'

function RenderTopics({topic, nav}){
    return(
        <TouchableOpacity
            onPress = {() => nav('Resource', {title: topic.title, imgUrl: topic.imgUrl})}
        >
            <Card containerStyle={styles.card}>
                <Image
                    source = {topic.imgUrl}
                    style={styles.image}
                />
                <Text style={{textAlign:"center", marginTop:10, color:"white", fontWeight:"bold", fontSize:18}}>{topic.title}</Text>
            </Card>
        </TouchableOpacity>
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
        const {navigate} = this.props.navigation
        const projectsData = this.state.topicData.filter(item => item.topic === "Projects").map(item => {
            return(
                <RenderTopics topic = {item} nav = {navigate}/>
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

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300,
        alignSelf: "center",
    }, 
    card:{
        backgroundColor:'#a9d88d'
    }
})

export default Projects;
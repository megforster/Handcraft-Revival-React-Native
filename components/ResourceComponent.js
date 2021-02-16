import React, { Component } from "react";
import {ScrollView, Text, Image} from 'react-native';

class Resource extends Component{

    constructor(props){
        super(props);
        this.state ={
          //topicData: TOPICDATA
        }
    }

    render(){
        // console.log("-------------------")
        // console.log(this.props)
        // console.log("-------------------")

        return(
            <ScrollView>
                <Text>Resource: {this.props.navigation.state.params.title}</Text>
            </ScrollView>
        );
    }
}

export default Resource;
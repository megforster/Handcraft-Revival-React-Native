import React, { Component } from "react";
import {ScrollView, Text, Image} from 'react-native';
import { Icon } from "react-native-elements";
import {RESOURCEDATA} from '../shared/resourceData'

function RenderResource({info}){
    return(
        <ScrollView>
            <Text style={{marginLeft: 10, fontSize:25}}>{info.title}</Text>
            <Icon
                name="heart"
                type="font-awesome"
                color="#f50"
                raised
                reverse
                onPress={() => console.log("Pressed")}
            />
            <Text style={{marginLeft: 10, fontSize:18}}>Importance</Text>
            <Text style={{marginLeft: 10, marginRight:10}}>{info.important}</Text>
            <Text style={{marginLeft: 10, marginRight:10}}>{info.content}</Text>
        </ScrollView>
    );
}

class Resource extends Component{

    constructor(props){
        super(props);
        this.state ={
            resourceData: RESOURCEDATA
        }
    }

    render(){
        const data = this.state.resourceData.filter(item => item.title === this.props.navigation.state.params.title).map(item => {
            return (
                <RenderResource info = {item}/>
            )
        });

        return(
            <ScrollView>
                {data}
            </ScrollView>
        );
    }
}

export default Resource;
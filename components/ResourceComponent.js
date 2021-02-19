import React, { Component } from "react";
import {View, ScrollView, Text, Image} from 'react-native';
import { Icon } from "react-native-elements";
import {RESOURCEDATA} from '../shared/resourceData'

function RenderResource({info, update, imgUrl}){
    return(
        <ScrollView>
            <View style={{flex:1, flexDirection: 'row', justifyContent:"space-between"}}>
                <Text style={{marginLeft: 10, fontSize:25}}>{info.title}</Text>
                <Icon
                    name="heart"
                    type="font-awesome"
                    color="#a9d88d"
                    raised
                    reverse
                    size={15}
                    onPress={() => update({ id: info.id, title: info.title, imgUrl: imgUrl })}
                />
            </View>
            <View style={{borderBottomColor: '#a9d88d',borderBottomWidth: 1, marginLeft:10, marginRight:10, marginTop:10}}/>
            <Text style={{marginLeft: 10, fontSize:18}}>Importance</Text>
            <Text style={{marginLeft: 10, marginRight:10}}>{info.important}</Text>
            <View style={{borderBottomColor: '#a9d88d',borderBottomWidth: 1, marginLeft:10, marginRight:10, marginTop:10}}/>
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

    render() {
        const data = this.state.resourceData
          .filter((item) => item.title === this.props.navigation.state.params.title)
          .map((item) => {
              console.log(item)
            return (
              <RenderResource
                info={item}
                update={this.props.screenProps.updateFavorites}
                imgUrl = {this.props.navigation.state.params.imgUrl}
              />
            );
          });
        return <ScrollView>{data}</ScrollView>;
      }
}

export default Resource;
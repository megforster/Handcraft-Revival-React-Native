import React, { Component } from "react";
import {ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import { Card } from "react-native-elements";

function RenderFavorites({favorite}){
    return(
        <TouchableOpacity 
            onPress = {() => nav('Resource', {title: favorite.title})}
        >
            <Card>
                <Image
                    source = {require('./images/logo.png')}
                    style={{alignSelf:"center"}}
                />
                <Text style={{textAlign:"center"}}>{favorite.title}</Text>
            </Card>
        </TouchableOpacity>
    );
}

class Favorites extends Component{
    constructor(props){
        super(props);
        console.log(props.screenProps.fav)
        this.state={
            favorites:props.screenProps.fav
        }
    }
    componentWillReceiveProps(){
        this.setState({favorites:this.props.screenProps.fav})
    }

    render(){
        console.log("FAVORITES: "+this.props.screenProps.fav.length)
        const {navigate} = this.props.navigation;
        const favorites = this.state.favorites.map(item => {
            return(
                <RenderFavorites favorite = {item} nav = {navigate}/>
              )
            }
        )

        return(
            <ScrollView >
                <Text>Favorites</Text>
                {favorites}
            </ScrollView>
        );
    }
}

export default Favorites;
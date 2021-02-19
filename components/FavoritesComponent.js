import React, { Component } from "react";
import {ScrollView, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { Card } from "react-native-elements";

function RenderFavorites({favorite, nav}){
    return(
        <TouchableOpacity 
            onPress = {() => nav('Resource', {title: favorite.title})}
        >
            <Card containerStyle={styles.card}>
                <Image
                    source = {favorite.imgUrl}
                    style={styles.image}
                />
                <Text style={{textAlign:"center"}}>{favorite.title}</Text>
            </Card>
        </TouchableOpacity>
    );
}

class Favorites extends Component{
    render(){
        const {navigate} = this.props.navigation;
        const favorites = this.props.screenProps.favData.map((item) => {
            return <RenderFavorites favorite={item} nav={navigate} />;
          });

        return(
             <ScrollView> 
                <Text style={{marginLeft: 10, fontSize:25}}>Favorites</Text>
                {favorites}
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

export default Favorites;
import React, { Component } from "react";
import {ScrollView, Text, Image, TouchableOpacity, RefreshControl} from 'react-native';
import { Card } from "react-native-elements";
import { withNavigation } from "react-navigation";

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
// function forceRefresh(item){
//      item.forceUpdate()   
// }

class Favorites extends Component{
    
    constructor(props){
        super(props);
        // console.log(props.screenProps.fav)
        this.state={
            favorites:props.screenProps.fav
        }
        //forceRefresh(this)
    }
    
    render(){
        // const [refreshing, setRefreshing] = React.useState(false);
        // const onRefresh = React.useCallback(()=>{
        //     setRefreshing(true);
        //     withNavigation(2000).then(()=> setRefreshing(false));
        // },[]);
        const {navigate} = this.props.navigation;
        const favorites = this.props.screenProps.fav.map(item => {
            return(
                <RenderFavorites favorite = {item} nav = {navigate}/>
              )
            }
        )

        return(
             <ScrollView
             // refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
             > 
                <Text style={{marginLeft: 10, fontSize:25}}>Favorites</Text>
                {favorites}
            </ScrollView>
        );
    }
}

export default Favorites;
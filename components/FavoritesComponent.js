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
    componentDidUpdate(){
        console.log("DidUPdate: "+this.props)
    }

    render(){
        // const [refreshing, setRefreshing] = React.useState(false);
        // const onRefresh = React.useCallback(()=>{
        //     setRefreshing(true);
        //     withNavigation(2000).then(()=> setRefreshing(false));
        // },[]);
        console.log("-----------------------")
        console.log(this.props)
        console.log("-----------------------")
        const {navigate} = this.props.navigation;
        const favorites = this.props.favData.map(item => {
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
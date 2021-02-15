import React, {Component} from 'react';
import { Image, View, ScrollView, Text, StyleSheet, Dimensions} from 'react-native';
import { Card } from 'react-native-elements';
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CAROUSELDATA from '../shared/carouselData'
import {HOMEDATA} from '../shared/homeData';

const SLIDER_WIDTH = Dimensions.get('window').width+80
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCardItem = ({item, index}) => {
    return (
        <View style={styles.container} key={index}>
          <Image
            source = {require('./images/logo.png')}
            // source = {{ uri: item.imgUrl }}
            style={styles.image}
          />
          <Text style={styles.header}>{item.title}</Text>
          <Text style={styles.body}>{item.body}</Text>
        </View>
      )
}

const CarouselCards = () =>{
    const [index, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)
  
    return (
      <View>
        <Carousel
            layout="tinder"
            layoutCardOffset={9}
            ref={isCarousel}
            data={CAROUSELDATA}
            renderItem={CarouselCardItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            onSnapToItem={(index) => setIndex(index)}
            useScrollView={true}
        />
        <Pagination
            dotsLength={CAROUSELDATA.length}
            activeDotIndex={index}
            carouselRef={isCarousel}
            dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.92)'
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            tappableDots={true}
        />
      </View>
  
    )
}

function RednerFavoriteCards({favorite}){
  return(
    <Card>
      <Image
        source = {require('./images/logo.png')}
        style={{alignSelf:"center"}}
      />
      <Text style={{textAlign:"center"}}>{favorite.title}</Text>
    </Card>
  );
}

class Home extends Component{

  constructor(props){
    super(props);
    this.state ={
      homeData: HOMEDATA
    }
  }
    render(){
      console.log(this.state.homeData)
      const fav = this.state.homeData.map(item => {
        return(
          <RednerFavoriteCards favorite = {item}/>
        )
      });
      return(
          <ScrollView style={{paddingTop:25}}>
              <Text style={{paddingBottom:25, marginLeft: 10, fontSize:25}}>Hello Crafter!</Text>
              <CarouselCards style={{alignItems: 'center', justifyContent: 'center'}}/>
              <Text style={{textAlign:'center', fontSize:20}}>Our Favorites</Text>
              {fav}
              {/* <Text>------------------------</Text> */}
          </ScrollView>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      borderRadius: 8,
      width: ITEM_WIDTH,
      paddingBottom: 40,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
    image: {
      width: ITEM_WIDTH,
      height: 300,
    },
    header: {
      color: "#222",
      fontSize: 28,
      fontWeight: "bold",
      paddingLeft: 20,
      paddingTop: 20
    },
    body: {
      color: "#222",
      fontSize: 18,
      paddingLeft: 20,
      paddingLeft: 20,
      paddingRight: 20
    }, 
    carouselContainer:{
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 50 
    }
  })

export default Home;
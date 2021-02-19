import React, { Component } from 'react';
import Home from './HomeComponent';
import Crochet from './CrochetComponent';
import Supplies from './SuppliesComponent';
import Basic from './BasicsComponent';
import Projects from './ProjectsComponent';
import History from './HistoryComponent';
import Popular from './PopularFigureComponent';
import Advanced from './AdvancedComponent';
import Favorites from './FavoritesComponent';
import Map from './MapComponent';
import Suggestions from './SuggestionsComponent';
import Resource from './ResourceComponent';
import { View, Platform, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer} from 'react-navigation';
import SafeAreaView from 'react-native-safe-area-view';
import {FAVORITESDATA} from '../shared/favorites'

const HomeNavigator = createStackNavigator(
    {
        Home:{
            screen: Home, 
            navigationOptions:({navigation}) => ({
                headerLeft: <Icon
                    name='home'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        }, 
        Resource:{screen:Resource}
    },
    {
        initialRouteName: 'Home', 
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#a9d88d'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
                color: '#ffffff'
            }
        }
    }
);

const CrochetNavigator = createStackNavigator(
    {
        Crochet: {screen: Crochet},
        
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#a9d88d'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
                color: '#ffffff'
            },
            headerLeft: <Icon
                name='dribbble'
                type='font-awesome-5'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
)

const SuppliesNavigator = createStackNavigator(
    {
        Supplies:{
            screen: Supplies, 
            navigationOptions:({navigation}) => ({
                headerLeft: <Icon
                    name='cut'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        }, 
        Resource:{screen:Resource}
    },
    {
        initialRouteName: 'Supplies', 
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#a9d88d'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
                color: '#ffffff'
            }
        }
    }
);

const BasicNavigator = createStackNavigator(
    {
        Basics:{
            screen: Basic, 
            navigationOptions:({navigation}) => ({
                headerLeft: <Icon
                    name='list-ol'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        }, 
        Resource:{screen:Resource}
    },
    {
        initialRouteName: 'Basics', 
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#a9d88d'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
                color: '#ffffff'
            }
        }
    }
);

const ProjectsNavigator = createStackNavigator(
    {
        Projects:{
            screen: Projects, 
            navigationOptions:({navigation}) => ({
                headerLeft: <Icon
                    name='socks'
                    type='font-awesome-5'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        }, 
        Resource:{screen:Resource}
    },
    {
        initialRouteName: 'Projects', 
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#a9d88d'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
                color: '#ffffff'
            }
        }
    }
);

const HistoryNavigator = createStackNavigator(
    {
        History:{
            screen: History, 
            navigationOptions:({navigation}) => ({
                headerLeft: <Icon
                    name='history'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        }, 
        Resource:{screen:Resource}
    },
    {
        initialRouteName: 'History', 
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#a9d88d'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
                color: '#ffffff'
            }
        }
    }
);

const PopularNavigator = createStackNavigator(
    {
        Popular:{
            screen: Popular, 
            navigationOptions:({navigation}) => ({
                headerLeft: <Icon
                    name='user'
                    type='font-awesome-5'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        }, 
        Resource:{screen:Resource}
    },
    {
        initialRouteName: 'Popular', 
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#a9d88d'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
                color: '#ffffff'
            }
        }
    }
);

const AdvancedNavigator = createStackNavigator(
    {
        Advanced:{
            screen: Advanced, 
            navigationOptions:({navigation}) => ({
                headerLeft: <Icon
                    name='star'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        }, 
        Resource:{screen:Resource}
    },
    {
        initialRouteName: 'Advanced', 
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#a9d88d'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
                color: '#ffffff'
            }
        }
    }
);

const FavoritesNavigator = createStackNavigator(
    {
        Favorites: {screen:Favorites}, 
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#a9d88d'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
                color: '#ffffff'
            },
            headerLeft: <Icon
                name='heart'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        }),
    }
)

const MapNavigator = createStackNavigator(
    {
        Map: {screen:Map}
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#a9d88d'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
                color: '#ffffff'
            },
            headerLeft: <Icon
                name='map-marker'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }   
)

const SuggestionsNavigator = createStackNavigator(
    {
        Suggestions: {screen: Suggestions}
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#a9d88d'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
                color: '#ffffff'
            },
            headerLeft: <Icon
                name='comment'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }   
)

const ResourceNavigator = createStackNavigator(
   {
        Resource: {screen: Resource}
   }
)

const CustomDrawerContentComponent = props => (
    <ScrollView>
        <SafeAreaView 
            style={styles.container}
            forceInset={{top: 'always', horizontal: 'never'}}>
            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}>
                    <Image source={require('./images/logo.png')} style={styles.drawerImage} />
                </View>
                <View style={{flex: 2}}>
                    <Text style={styles.drawerHeaderText}>Handcraft Revivial</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

const MainNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                drawerIcon: () => (
                    <Icon
                        name='home'
                        type='font-awesome'
                        size={24}
                        color='black'
                    />
                )
            }
        },
        Crochet:{
            screen: CrochetNavigator,
            navigationOptions: {
                drawerIcon: () => (
                    <Icon
                        name='dribbble'
                        type='font-awesome-5'
                        size={24}
                        color='black'
                    />
                )
            }
        },
        Supplies:{
            screen: SuppliesNavigator,
            navigationOptions: {
                drawerIcon: () => (
                    <Icon
                        name='cut'
                        type='font-awesome'
                        size={24}
                        color='black'
                    />
                )
            },
        },
        Basics:{
            screen: BasicNavigator,
            navigationOptions: {
                drawerIcon: () => (
                    <Icon
                        name='list-ol'
                        type='font-awesome'
                        size={24}
                        color='black'
                    />
                )
            }
        }, 
        Projects:{
            screen: ProjectsNavigator,
            navigationOptions: {
                drawerIcon: () => (
                    <Icon
                        name='socks'
                        type='font-awesome-5'
                        size={24}
                        color='black'
                    />
                )
            }
        },
        History:{
            screen: HistoryNavigator,
            navigationOptions: {
                drawerIcon: () => (
                    <Icon
                        name='history'
                        type='font-awesome'
                        size={24}
                        color='black'
                    />
                )
            }
        },
        Popular:{
            screen: PopularNavigator,
            navigationOptions: {
                drawerIcon: () => (
                    <Icon
                        name='user-friends'
                        type='font-awesome-5'
                        size={24}
                        color='black'
                    />
                )
            }
        },
        Advanced:{
            screen: AdvancedNavigator,
            navigationOptions: {
                drawerIcon: () => (
                    <Icon
                        name='star'
                        type='font-awesome'
                        size={24}
                        color='black'
                    />
                )
            }
        },
        Favorites:{
            screen: FavoritesNavigator,
            navigationOptions: {
                drawerIcon: () => (
                    <Icon
                        name='heart'
                        type='font-awesome'
                        size={24}
                        color='black'
                    />
                )
            }
        },
        Suggestions:{
            screen: SuggestionsNavigator,
            navigationOptions: {
                drawerIcon: () => (
                    <Icon
                        name='comment'
                        type='font-awesome'
                        size={24}
                        color='black'
                    />
                )
            }
        },
        Map:{
            screen: MapNavigator,
            navigationOptions: {
                drawerIcon: () => (
                    <Icon
                        name='map-marker'
                        type='font-awesome'
                        size={24}
                        color='black'
                    />
                )
            }
        }
    },
    {
        drawerBackgroundColor: '#d4ebc6',
        contentComponent: CustomDrawerContentComponent
    }
);

const AppNavigator = createAppContainer(MainNavigator)

class Main extends Component {
    state = {
      favData: FAVORITESDATA
    };
    updateFavorites = (fav) => {
      const newFavData = [...this.state.favData];
      newFavData.push(fav);
      this.setState({ favData: newFavData });
    };
    render() {
      return (
        <View
          style={{
            flex: 1,
            paddingTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight
          }}
        >
          <AppNavigator
            screenProps={{
              favData: this.state.favData,
              updateFavorites: this.updateFavorites
            }}
          />
        </View>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#a9d88d',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 10,
        color: '#ffffff',
        fontSize: 24
    }
});

export default Main;
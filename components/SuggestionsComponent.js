import React, { Component } from "react";
import {View, Text, Button, StyleSheet, TextInput, Image, Alert} from 'react-native';
import { Card } from 'react-native-elements';

class Suggestions extends Component{

    constructor(props){
        super(props);

        this.state = {
            suggest: "",
            justification: "",
            r1: "",
            r2: "", 
            r3: ""
        }
    }

    handleSubmit(){
        Alert.alert(
            "Thank you for your suggestion!",
            "We hope you continue to enjoy Handcraft Revival.",
            [
                {
                    text:"Okay", 
                    onPress: () => {
                        this.resetForm()
                    }
                }
            ]
            
        )
    }

    resetForm(){
        this.setState({
            suggest: "",
            justification: "",
            r1: "",
            r2: "", 
            r3: ""
        });
    }

    render(){
        return(
            <View >
                <Text style={{marginLeft: 10, fontSize:25}}>Suggestions</Text>
                <Card containerStyle={styles.card}>
                    <Text style={styles.titleText}>Suggestion</Text>
                    <TextInput 
                        style={styles.textInput} 
                        value = {this.state.suggest} 
                        onChangeText={text => this.setState({suggest: text})}
                        />
                    <Text style={styles.titleText}>Justification</Text>
                    <TextInput 
                        style={styles.textInput}
                        value = {this.state.justification} 
                        onChangeText={text => this.setState({justification: text})}
                    />
                    <Text style={styles.titleText}>Related Resource</Text>
                    <TextInput 
                        style={styles.textInput}
                        value = {this.state.r1} 
                        onChangeText={text => this.setState({r1: text})}
                        />
                    <Text style={styles.titleText}>Related Resource</Text>
                    <TextInput 
                        style={styles.textInput}
                        value = {this.state.r2} 
                        onChangeText={text => this.setState({r2: text})}/>
                    <Text style={styles.titleText}>Related Resource</Text>
                    <TextInput 
                        style={styles.textInput}
                        value = {this.state.r3} 
                        onChangeText={text => this.setState({r3: text})}/>
                    <Button 
                        style={{borderColor:"white", borderWidth:1}}
                        title="Submit" 
                        onPress={()=> this.handleSubmit()} 
                        color='#a9d88d'
                        
                    />
                </Card>
                <Image
                    source = {require('./images/logo.png')}
                    style={{alignSelf:"center"}}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleText:{
        textAlign: "center",
        color: "white"
    },
    textInput:{
        borderColor: 'white',
        borderWidth: 1,
        marginBottom:10
    },
    card:{
        backgroundColor:'#a9d88d'
    } , 
    button:{
        borderWidth: 1,
        borderColor: 'white'
    }
})

export default Suggestions;
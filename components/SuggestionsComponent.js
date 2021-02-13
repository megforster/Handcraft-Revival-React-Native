import React, { Component } from "react";
import {View, Text, Button, StyleSheet, TextInput, Image} from 'react-native';
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
                <Card>
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
                        title="Submit" 
                        onPress={()=> this.resetForm()} 
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
        textAlign: "center"
    },
    textInput:{
        borderColor: 'black',
        borderWidth: 1
    }
})

export default Suggestions;
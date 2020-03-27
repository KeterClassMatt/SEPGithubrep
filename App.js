import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Alert, Button, Text } from 'react-native';

export default class App extends Component {
  state = {
    searchInput:'',clearInput:false
  }
  constructor(props) {
    super(props);
    
    this.state = {
      studentID: '',
      studnetName: '',
      major: '',
      goal: ''
    };
  }
  
  clearText(){
    this.setState({text:''})
 }
  
 //got Rid of the studentname output in the text
  onLogin() {
    const { studentID, studentName, major, goal } = this.state;
    Alert.alert('Thank you for taking this survey!');
  }

  onRetrieve() {
    const { studentID, studentName, major, goal } = this.state;
    Alert.alert('Your data is now retrived. Thank you, and have a nice day!');
  }



  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.text}
          onSubmitEditing={()=>{
            this.setState({
              clearInput:!this.stateclearInput,
            })
            }}
          onChangeText={(studentID) => this.setState({ studentID })}
          placeholder={'Please Enter your Student ID'}
          style={styles.input}
        />
        <TextInput
          value={this.state.text}
          onSubmitEditing={()=>{
            this.setState({
              clearInput:!this.stateclearInput,
            })
          }}
          onChangeText={(studentName) => this.setState({ studentName })}
          placeholder={'Please Enter your Name'}
          style={styles.input}
        />
        <TextInput
          value={this.state.text}
          onSubmitEditing={()=>{
            this.setState({
              clearInput:!this.stateclearInput,
            })
          }}
          onChangeText={(major) => this.setState({ major })}
          placeholder={'Please Enter your Major'}
          style={styles.input}
        />
        <TextInput
          value={this.state.text}
          onSubmitEditing={()=>{
            this.setState({
              clearInput:!this.stateclearInput,
            })
          }}
          onChangeText={(goal) => this.setState({ goal })}
          placeholder={'Please Explain your Goal'}
          style={styles.input}
        />

      <View style = {styles.Boxes}>
        <Button
          title={'Submit survey'}
          onPress={this.onLogin.bind(this)}
        />
      </View>

      <View style = {styles.Boxes}>
        <Button
          title={'Retrieve Student Data'}
          onPress={this.onRetrieve.bind(this)}
        />
      </View>
      <View style = {styles.Boxes}>
        <Button
          title={'Clear Text'}
          onPress={()=>this.clearText()}
        />
      </View>
        <Text style = {styles.TextFit}> --When you complete this form, press 'Clear Text'. </Text> 
        <Text style = {styles.TextFit}> --Be sure to reset the app so another student may use it.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dcdcdc',
  },
  input: {
    width: 300,
    height: 70,
    padding: 20,
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 10,
  },

  TextFit: {
    width: 300,
    textAlign: 'left',
    fontSize: 13,
    marginTop: 20,
  },

  Boxes: {
    width: 200,
    height: 40,
    borderWidth: 1,
    backgroundColor: '#f8f8ff',
    marginTop: 13
  }
  
});
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Header } from './components/common'
import firebase from 'firebase'
class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAOAzekhtmmsQw2LWWpnBvTnjEL2zJeIOo',
            authDomain: 'authentication-e0786.firebaseapp.com',
            databaseURL: 'https://authentication-e0786.firebaseio.com',
            projectId: 'authentication-e0786',
            storageBucket: "",
            messagingSenderId: '657104895956',
            appId: '1:657104895956:web:eb61a1507353c6b5'
          })
    }
    render() { 
        return (
            <View> 
                <Header headerText="Authentication"/>
                <Text>An App!</Text>
            </View>
        )
    }
}

export default App
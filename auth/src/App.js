import firebase from 'firebase'
import React, { Component } from 'react'
import { View } from 'react-native'
import { Header, Button, Spinner } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
    state = { loggedIn: null }
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

          firebase.auth().onAuthStateChanged( user => {
            if (user) {
                this.setState({ loggedIn: true })
            } else {
                this.setState({ loggedIn: false })
            }
          })
    }

    renderContent = () => {
        switch (this.state.loggedIn){
            case true:  
                return <Button onPress={() => firebase.auth().signOut}>Log Out</Button>
            case false:
                return <LoginForm />
            default:
                return(
                    <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
                        <Spinner size="large" />
                    </View>
                )
        }
    }

    render() { 
        return (
            <View> 
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        )
    }
}

export default App
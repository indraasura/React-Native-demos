import React from 'react'
import { View, Text } from 'react-native'

const Header = props => {
    const { textStyle, viewStyle } = styles
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Albums</Text>
        </View>
    )
}

const styles = {
    textStyle: {
        fontSize: 20,
    },
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
    }
}

export { Header }
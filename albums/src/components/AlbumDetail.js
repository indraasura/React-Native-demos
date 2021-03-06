import React from 'react'
import { View, Text, Image, Linking } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import { tsPropertySignature } from '@babel/types';
import Button from './Button'


const AlbumDetail = ({ album }) =>{
    // Destrucutre props to albums, further destructre albums to individual elements 
    // if there are multiple references
    // General: destructure anything that appears multiple times

    const {
        thumbnailContainerstyle,
        headerContentStyle,
        thumbnail_style,
        headerTextStyle,
        imageStyle
    } = styles

    const { title,artist, thumbnail_image, image, url } = album

    return (
        <Card>
             <CardSection>
                 <View style={thumbnailContainerstyle}>
                     <Image
                        // To render image, we require styling
                        style={thumbnail_style}
                        source={{ uri: thumbnail_image }} 
                     />
                 </View>
                 <View style={headerContentStyle}>
                     <Text style={headerTextStyle}>{title}</Text>
                     <Text>{artist}</Text>
                 </View>
             </CardSection>
             <CardSection>
                 <Image 
                    style={imageStyle}
                    source={{ uri: image }}
                 />
             </CardSection>
             <CardSection>
                 <Button onPress={() => Linking.openURL(url)}>
                     Buy now
                 </Button>
             </CardSection>
        </Card>
    )
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnail_style: {
         height: 50,
         width: 50,
    },
    thumbnailContainerstyle: {
         justifyContent: 'center',
         alignItems: 'center',
         marginLeft: 10,
         marginRight: 10 
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}

export default AlbumDetail
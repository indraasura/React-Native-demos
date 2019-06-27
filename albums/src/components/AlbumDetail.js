import React from 'react'
import { View, Text, Image } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'

const AlbumDetail = ({ album }) =>{
    // Destrucutre props to albums, further destructre albums to individual elements 
    // if there are multiple references
    // General: destructure anything that appears multiple times

    const { headerContainerStyle, thumbnail_style } = styles

    const { title,artist, thumbnail_image } = album

    return (
        <Card>
             <CardSection>
                 <View>
                     <Image
                        // To render image, we require styling
                        style={thumbnail_style}
                        source={{ uri: thumbnail_image }} 
                     />
                 </View>
                 <View style={headerContainerStyle}>
                     <Text>{title}</Text>
                     <Text>{artist}</Text>
                 </View>
                 
             </CardSection>
        </Card>
    )
}

const styles = {
    headerContainerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnail_style: {
         height: 50,
         width: 50,
         marginRight: 5
    }
}

export default AlbumDetail
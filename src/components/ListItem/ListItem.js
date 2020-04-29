import React from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import {_colors} from './../../variables/_colors';

const ListItem = ({title, smallImage, fullImage, author, navigation}) => {

    const onClickOnImage = () => {
            navigation.navigate("Photo", { image: fullImage, alt: title })
        }

    return (
        <View style={styles.listItem}>
            <TouchableOpacity onPress={onClickOnImage}>
                <Image alt={title} source={{uri: smallImage}} style={styles.img} />
            </TouchableOpacity>
            <View style={styles.info}>
                <View>
                    <Text numberOfLines={1}>Title: { title }</Text>
                </View>
                <View>
                    <Text numberOfLines={1}>Author: { author }</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: _colors.listItem,
        flexDirection: 'row',
        width: 300,
        borderWidth: 1,
        borderColor: "black",
        marginTop: 10
    },
    img: {
        width: 50,
        height: 50
    },
    info: {
        flexDirection: "column",
        width: 240,
        marginLeft: 5,
        marginTop: 5
    },
})

export default ListItem;

import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const PhotoItem = ({image, title}) => {
	return (
		<View style={styles.imageContainer}>
			<Image
				alt={title} 
				resizeMode="cover"
				style={styles.image} 
				source={{uri: image}}
				/>
		</View>
		)
}

const styles = StyleSheet.create({
	imageContainer: {
		alignItems: "center",
		justifyContent: 'center',
	},
	image: {
		width: 400,
		height: 600
	}
})
export default PhotoItem;
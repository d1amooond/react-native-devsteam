import React from 'react';
import { View, Image } from 'react-native';
import PhotoItem from "./../components/PhotoItem/PhotoItem";

const Photo = ({route}) => {
	const {image} = route.params;
	return (
		<View>
			<PhotoItem image={image} />
		</View>
		)
}
export default Photo;
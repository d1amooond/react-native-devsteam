import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import ListItem from './../components/ListItem/ListItem';
import {_colors} from '../variables/_colors';
import {getData} from '../redux/actions/actions';

const List = ({navigation}) => {

    const [loading, setLoading] = useState(true);
    const gallery = useSelector(state => state.data, shallowEqual);
    const dispatch = useDispatch();

    useEffect(() => {
        
        const getGallery = async () => {
        	await dispatch(getData())
        	setLoading(false)
        }
        getGallery()
    }, [])

    if (loading) {
        return (
            <View style={styles.containerView}>
                <Text>Loading</Text>
            </View>
        )
    }
    return (
        <ScrollView style={styles.containerScroll}>
            <View style={styles.containerView}>

                {
                    gallery.map((el) => {
                        return <ListItem
                        	key={el.id}
                            navigation={navigation}
                            title={el.alt_description}
                            author={el.user.username}
                            smallImage={el.urls.small}
                            fullImage={el.urls.regular}
                        />

                    })
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    containerScroll: {
        backgroundColor: _colors.background,
    },
    containerView: {
        flex: 1,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default List;

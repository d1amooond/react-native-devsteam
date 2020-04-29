import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import List from "./../screens/List";
import Photo from "./../screens/Photo";


const Stack = createStackNavigator();

const Router = () => {
    return (
	<NavigationContainer>
		<Stack.Navigator>
        	<Stack.Screen
         		 name="List"
         		 component={List}
        	/>
        	<Stack.Screen 
        		name="Photo" 
        		component={Photo} 
        		/>
      </Stack.Navigator>
	</NavigationContainer>
    )
}
export default Router;
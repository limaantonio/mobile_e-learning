import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons'

import Home from '../pages/Home';
import Course from '../pages/CourseSave'

const {Navigator, Screen} = createBottomTabNavigator();

function LessonTabs(){
  return(
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20
        },
        labelStyle:{
          fontSize: 13,
          marginLeft: 16
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#322',
      }}
    >
      <Screen 
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size, focused}) => {
            return (
              <Ionicons size={size} color={focused ? '#ff6680' : color} name="ios-home"/>
            )
          }
        }}
      />
      <Screen 
        name="Salvos"
        component={Course}
        options={{
          tabBarLabel: 'Salvos',
          tabBarIcon: ({color, size, focused}) => {
            return (
              <Ionicons size={size} color={focused ? '#ff6680' : color} name="ios-heart"/>
            )
          }
        }}
      />

    </Navigator>
  )
}

export default LessonTabs;
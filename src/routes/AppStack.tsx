import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../pages/Login';
import CourseSave from '../pages/CourseSave';
import LessonTabs from './LessonTabs';

const {Navigator, Screen} = createStackNavigator();

function  AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
       
      
        <Screen name="Lesson" component={LessonTabs}/>
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack

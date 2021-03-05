import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../pages/Login';
import CourseSave from '../pages/CourseSave';
import LessonTabs from './LessonTabs';
import Lessons from '../pages/Lessons';
import Lesson from '../pages/Lesson';

const {Navigator, Screen} = createStackNavigator();

function  AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Login" component={Login}/>

      <Screen name="LessonTabs" component={LessonTabs}/>
       <Screen name="Lessons" component={Lessons}/>
       <Screen name="Lesson" component={Lesson}/>
      
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack

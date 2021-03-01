import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Lessons from './src/pages/Lessons';
import AppStack from './src/routes/AppStack';

export default function App() {
  return (
    <>
    <Lessons/>
    <StatusBar style="light" />
   </>
  );
}

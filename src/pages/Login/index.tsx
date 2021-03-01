import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity,  Button } from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

const Login = () => {
  return(
    <View  style={styles.container}>
      <View style={styles.imageBg}>
      <ImageBackground source={require('../../../assets/e.learning.png')} style={styles.image}>
        <Image source={require('../../../assets/Vector.png')}/>
      </ImageBackground>
      </View>
      <View style={styles.containerText}>
      <Text style={styles.title}>Aprenda da melhor forma</Text>
        <Text style={styles.subtitle}>Entre na plataforma e
          acesse cursos de diversas áreas
         de conhecimento.</Text>
         <RectButton style={styles.button}>
         <Text style={styles.buttonText}>Começar os Estudos</Text>
      </RectButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6548a3',
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    padding: 22
   
    
  },

  imageBg: {
    height: '68%',
    width: '100%'

    
  },

  containerText: {
    marginTop: -70,
    padding: 22,
  
  },

  title: {
    color: '#ff6680',
    fontSize: 36,

  },

  subtitle: {
    color: '#fff',
    width: '60%',
    paddingVertical: 24,
    fontSize: 16,
    lineHeight: 26
  },

  button: {
    backgroundColor: '#ff6680',
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 100

  },

  buttonText: {
    color: '#fff'
  }
})

export default Login;

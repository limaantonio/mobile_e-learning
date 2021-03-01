import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { FlatList } from 'react-native-gesture-handler';

const Home = () => {
  const [value, onChangeText] = React.useState('Useless Placeholder');
  const [courses, setCourses] = useState([
    {
      img: require('../../../assets/Math.png'),
      title: 'Matematica',
      subtitle: '16 Aulas',
    },
    {
       img: require('../../../assets/Física.png'),
      title: 'Física',
      subtitle: '16 Aulas',
    },
    {
       img: require('../../../assets/English.png'),
      title: 'Inglês',
      subtitle: '16 Aulas',
    },
    {
       img: require('../../../assets/Quimica.png'),
      title: 'Química',
      subtitle: '16 Aulas',
    },
    {
       img: require('../../../assets/Talk.png'),
      title: 'Português',
      subtitle: '16 Aulas',
    },
    {
       img: require('../../../assets/Build.png'),
      title: 'Engenharia',
      subtitle: '16 Aulas',
    },
    {
       img: require('../../../assets/Math.png'),
      title: 'Matematica',
      subtitle: '16 Aulas',
    },
    {
      img: require('../../../assets/Math.png'),
      title: 'Matematica',
      subtitle: '16 Aulas',
    }
  ]);

 
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imgHeader}>
          <Image  source={require('../../../assets/Logo.png')} />
          <Image style={styles.imgSair} source={require('../../../assets/Sair.png')} />
        </View>
        <View style={styles.containerInput}>
          <Image source={require('../../../assets/Busque.png')}/>
            <TextInput style={styles.input}
              onChangeText={text => onChangeText(text)}
              value={value}
              placeholder="Busque uma aula"
          />  
        </View>
      </View>
      <View style={styles.containerCategory}>
        <View>
          <Text style={styles.textCategory}>Categorias</Text>
          <Text style={styles.textNumCursos}>43 cursos</Text>
        </View>
        <FlatList 
          data={courses}
          numColumns='2'
          style={{marginHorizontal: 2}}
          renderItem={({item: course}) => (
            <View style={styles.containerCourse}>
              <Image source={course.img}/>
              <View style={styles.textCategoryItem}>
                <Text style={styles.textCategoryItemTitle}>{course.title}</Text>
                <Text>16 Aulas</Text>
              </View>
            </View> 
        )}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6548a3',
  },

  header: {
    padding: 22,
    marginVertical: 40,
  },

  imgHeader: {
    flexDirection: 'row',
    position: 'relative',

    
  },

  imgSair:{
    position: 'absolute',
    right: 0
  },

  containerInput: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 100,
    padding: 10,
    
    backgroundColor: '#fff',
  },

  input:{
    margin: 4,
    color: '#C4C4D1',
    fontSize: 15
  },

  containerCategory: {
   
    backgroundColor: '#f0edf5',
    padding: 20,
    borderTopEndRadius: 24,
    borderTopStartRadius: 24
  },

  textCategory: {
    fontSize: 20,
    lineHeight: 20,
    color: '#3d3d4c'
  },

  textNumCursos: {
    position: 'absolute',
    right: 0
  },

  containerCourse: {
    marginTop: 10,
    backgroundColor: '#fff',
    width: '46%',
    justifyContent: 'center',
    padding: 26,
    borderRadius: 28,
    margin: 8
  },

  textCategoryItemTitle: {
    fontSize: 16,

  },

  textCategoryItem: {
    paddingVertical: 10,
    paddingTop: 12
  },

  list: {
    flexDirection: 'row',
    
    
  }


})

export default Home;
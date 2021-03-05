import React, { useEffect, useState } from 'react';
import {
  Image, ScrollView, StyleSheet, Text, TextInput, View,
} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

interface ICourse{
  id: string;
  name: string;
  image: string;
}

function Home() {
  const [value, onChangeText] = useState('');
  const [courses, setCourses] = useState<ICourse[]>();
  
  const { navigate } = useNavigation();
  const {goBack} = useNavigation();

  function navigateToLessons(course: ICourse) {
    navigate('Lessons', { course });
  }

  useEffect(() => {
    api.get('/courses').then((response) => {
      setCourses(response.data);
    });
  }, [courses]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imgHeader}>
          <Image source={require('../../../assets/Logo.png')} />
          <View style={styles.imgSair}>
            <TouchableOpacity onPress={() => navigate('Login')}>
              <Image source={require('../../../assets/Sair.png')} />
            </TouchableOpacity>
          </View>

        </View>
        <View style={styles.containerInput}>
          <Image source={require('../../../assets/Busque.png')} />
          <TextInput
            style={styles.input}
            onChangeText={(text) => onChangeText(text)}
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
          keyExtractor={(course) => String(course.id)}
          numColumns="2"
          style={{ marginHorizontal: 2 }}

          onEndReachedThreshold={0.2}
          renderItem={({ item: course }) => (
            <TouchableOpacity onPress={() => navigateToLessons(course)} style={styles.containerCourse}>
              <Image style={{ width: 58, height: 60 }} source={{ uri: course.image }} />
              <View style={styles.textCategoryItem}>
                <Text style={styles.textCategoryItemTitle}>{course.name}</Text>
                <Text>16 Aulas</Text>
              </View>
            </TouchableOpacity>
          )}

        />
      </View>

    </View>
  );
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

  imgSair: {
    position: 'absolute',
    right: 0,
  },

  containerInput: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 100,
    padding: 10,

    backgroundColor: '#fff',
  },

  input: {
    margin: 4,
    color: '#C4C4D1',
    fontSize: 15,
  },

  containerCategory: {

    backgroundColor: '#f0edf5',
    padding: 20,
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
  },

  textCategory: {
    fontSize: 20,
    lineHeight: 20,
    color: '#3d3d4c',
  },

  textNumCursos: {
    position: 'absolute',
    right: 0,
  },

  containerCourse: {
    marginTop: 10,
    width: 156,
    height: 172,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 28,
    margin: 8,
    paddingLeft: 20,
  },

  textCategoryItemTitle: {
    fontSize: 16,

  },

  textCategoryItem: {
    paddingVertical: 10,
    paddingTop: 12,
  },

  list: {
    flexDirection: 'row',

  },

});

export default Home;

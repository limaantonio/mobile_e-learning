import React, { useEffect, useState } from 'react';
import {
  Image, ScrollView, ScrollViewBase, StyleSheet, Text, View,
} from 'react-native';
import {
  RectButton, BorderlessButton, FlatList, TouchableOpacity,
} from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import arrowLeft from '../../../assets/Voltar.png';

import api from '../../services/api';

interface ILessons{
  id: string;
  name: string;
  desciption: string;
  duration: number;
  course: string;
  video: string
}

interface ILesson{
  id: string;
  name: string;
  desciption: string;
  duration: number;
  course: string;
  video: string
}

interface ICourse{
  id: string;
  name: string;
  image: string;
}

const Lessons: React.FC = () => {
  const { navigate } = useNavigation();
  const { goBack } = useNavigation();

  function navigationToLesson(lesson: ILesson) {
    navigate('Lesson', { lesson });
  }

  const route = useRoute();

  const { course } = route.params;

  const [lessons, setLessons] = useState<ILessons[]>();

  useEffect(() => {
    api.get(`/courses/${course.id}/lessons`).then((response) => {
      setLessons(response.data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleHeader}>
          <View style={styles.iconLeft}>
            <TouchableOpacity onPress={goBack}>
              <Image source={require('../../../assets/Voltar.png')} />
            </TouchableOpacity>
          </View>

          <Image source={require('../../../assets/Logo.png')} />
          <Image style={styles.iconFavorite} source={require('../../../assets/Favorite.png')} />
        </View>
      </View>
      <View style={styles.containerCourse}>
        <View style={styles.containerTitleCourse}>
          <Text style={styles.titleCourse}>{course.name}</Text>
          <Text style={styles.numLessons}>16 aulas</Text>
        </View>
        <FlatList
          data={lessons}
          keyExtractor={(lesson) => String(lesson.id)}
          style={{ marginHorizontal: 2 }}

          onEndReachedThreshold={0.2}
          renderItem={({ item: lesson }) => (
            <TouchableOpacity onPress={() => navigationToLesson(lesson)} style={styles.containerLessonItem}>
              <View style={styles.containerIcon}>
                <Image source={require('../../../assets/Cursos.png')} />
              </View>
              <View style={styles.containerLesson}>
                <Text style={styles.titleLesson}>{lesson.name}</Text>
                <View style={styles.containerSubtitleLesson}>
                  <Text style={styles.textLesson}>Aula02 </Text>
                  <View style={styles.containerClock}>
                    <Image style={{ marginRight: 4 }} source={require('../../../assets/clock.png')} />
                    <Text style={styles.textLesson}>
                      {lesson.duration}
                      min
                    </Text>
                  </View>
                  <View style={styles.containerStatus}>
                    <Text style={styles.textStatus}>Completo</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6548a3',
  },

  header: {
    padding: 22,
    marginVertical: 40,
  },

  titleHeader: {
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',

  },

  iconLeft: {
    position: 'absolute',
    left: 0,
  },

  iconFavorite: {
    position: 'absolute',
    right: 0,
  },

  containerCourse: {
    flex: 1,
    backgroundColor: '#f0edf5',
    padding: 20,
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
  },

  titleLesson: {
    color: '#6c6c80',
    fontWeight: '600',
  },

  containerTitleCourse: {
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
  },

  titleCourse: {
    fontSize: 30,
    fontWeight: 'normal',
  },

  textLesson: {
    color: '#c4c4d1',
  },

  numLessons: {
    position: 'absolute',
    right: 0,
  },

  containerLessonItem: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    height: 120,

  },

  containerClock: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  containerIcon: {
    backgroundColor: '#61c5bd',
    padding: 14,
    zIndex: 1,
    borderRadius: 16,
  },

  containerLesson: {
    backgroundColor: '#fff',
    width: '90%',
    padding: 24,
    paddingLeft: 50,
    position: 'absolute',
    right: 0,
    borderRadius: 16,

  },

  containerSubtitleLesson: {
    flexDirection: 'row',
    marginTop: 24,
    alignItems: 'center',

  },

  containerStatus: {
    position: 'absolute',
    right: 0,
    backgroundColor: '#61c5bd',
    borderRadius: 16,
    paddingHorizontal: 8,
  },

  textStatus: {
    color: '#fff',
  },

});

export default Lessons;

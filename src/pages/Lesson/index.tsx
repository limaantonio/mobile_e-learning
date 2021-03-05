import React, { useCallback, useEffect, useState } from 'react';
import {
  Image, ScrollView, ScrollViewBase, StyleSheet, Text, View, Button, Alert,
} from 'react-native';
import { RectButton, TouchableOpacity, BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import YoutubePlayer from 'react-native-youtube-iframe';

import api from '../../services/api';

interface ILesson{
  id: string;
  name: string;
  desciption: string;
  duration: number;
  course: string;
  video: string
}

const Lesson = () => {
  const { navigate } = useNavigation();
  const route = useRoute();

  const { lesson } = route.params;

  function handleBack() {
    navigate('Lessons');
  }

  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleHeader}>
          <View style={styles.iconLeft}>
            <TouchableOpacity onPress={handleBack}>
              <Image source={require('../../../assets/Voltar.png')} />
            </TouchableOpacity>
          </View>
          <Image source={require('../../../assets/Logo.png')} />
          <Image style={styles.iconFavorite} source={require('../../../assets/Favorite.png')} />
        </View>
      </View>
      <View style={styles.containerAulaDescripiton}>
        <YoutubePlayer
          height={250}
          play={playing}
          videoId={lesson.video_id}
          onChangeState={onStateChange}
        />
        <View style={styles.description}>
          <Text style={styles.titleCourse}>{lesson.name}</Text>
          <View style={styles.descriptionSubtitle}>
            <Text style={styles.textLesson}>Aula 01</Text>
            <View style={styles.containerClock}>
              <Image style={{ marginRight: 4 }} source={require('../../../assets/clock.png')} />
              <Text style={styles.textLesson}>
                {lesson.duration}
                min
              </Text>
            </View>
          </View>
          <Text style={styles.descriptionText}>{lesson.description}</Text>

        </View>
        <View style={styles.containerButtons}>
          <RectButton style={styles.buttonPrev}>
            <Image source={require('../../../assets/Seta.png')} />
            <Text style={styles.buttonTextPrev}>Aula anterior</Text>
          </RectButton>
          <RectButton style={styles.buttonNext}>
            <Text style={styles.buttonText}>Próxima aula</Text>
            <Image source={require('../../../assets/Seta2.png')} />
          </RectButton>
        </View>
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

  containerAulaDescripiton: {
    flex: 1,
    backgroundColor: '#f0edf5',
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

  description: {
    padding: 20,
    height: '55%',
    backgroundColor: '#f0edf5',

  },

  containerClock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },

  descriptionSubtitle: {
    marginTop: 2,
    flexDirection: 'row',

  },

  descriptionText: {
    marginTop: 14,
    lineHeight: 25,
  },

  containerButtons: {

    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 40,

  },

  buttonNext: {
    backgroundColor: '#ff6680',
    height: 56,
    width: '45%',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 100,
    position: 'absolute',
    right: 0,

  },

  buttonPrev: {

    height: 56,
    width: '45%',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 100,
    position: 'absolute',
    left: 0,

  },

  buttonText: {
    color: '#fff',
  },

  buttonTextPrev: {
    color: '#ff6680',
  },

});

export default Lesson;

import React from 'react';
import { Image, ScrollView, ScrollViewBase, StyleSheet, Text, View } from "react-native"


const Lessons = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleHeader}>
          <Image style={styles.iconLeft}  source={require('../../../assets/Voltar.png')}/>
          <Image source={require('../../../assets/Logo.png')}/>
          <Image style={styles.iconFavorite} source={require('../../../assets/Favorite.png')}/>
        </View>
      </View>
      <View style={styles.containerCourse}>
        <View style={styles.containerTitleCourse}>
          <Text style={styles.titleCourse}>Matemática</Text>
          <Text style={styles.numLessons}>16 aulas</Text>
        </View>
        <ScrollView>
          <View style={styles.containerLessonItem}>
            <View style={styles.containerIcon}>
            <Image source={require('../../../assets/Cursos.png')} />
            </View>
            <View style={styles.containerLesson}>
              <Text style={styles.titleLesson}>Introdução à teoria matématica</Text>
              <View style={styles.containerSubtitleLesson}>
                <Text style={styles.textLesson}>Aula02 </Text>
                <View style={styles.containerClock}>
                  <Image style={{marginRight: 4}} source={require('../../../assets/clock.png')}/>
                  <Text style={styles.textLesson}>5min</Text>
                </View>
                <View style={styles.containerStatus}>
                  <Text style={styles.textStatus}>Completo</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.containerLessonItem}>
            <View style={styles.containerIcon}>
            <Image source={require('../../../assets/Cursos.png')} />
            </View>
            <View style={styles.containerLesson}>
              <Text style={styles.titleLesson}>Introdução à teoria matématica</Text>
              <View style={styles.containerSubtitleLesson}>
                <Text style={styles.textLesson}>Aula02 </Text>
                <View style={styles.containerClock}>
                  <Image style={{marginRight: 4}} source={require('../../../assets/clock.png')}/>
                  <Text style={styles.textLesson}>5min</Text>
                </View>
                <View style={styles.containerStatus}>
                  <Text style={styles.textStatus}>Completo</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.containerLessonItem}>
            <View style={styles.containerIcon}>
            <Image source={require('../../../assets/Cursos.png')} />
            </View>
            <View style={styles.containerLesson}>
              <Text style={styles.titleLesson}>Introdução à teoria matématica</Text>
              <View style={styles.containerSubtitleLesson}>
                <Text style={styles.textLesson}>Aula02 </Text>
                <View style={styles.containerClock}>
                  <Image style={{marginRight: 4}} source={require('../../../assets/clock.png')}/>
                  <Text style={styles.textLesson}>5min</Text>
                </View>
                <View style={styles.containerStatus}>
                  <Text style={styles.textStatus}>Completo</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.containerLessonItem}>
            <View style={styles.containerIcon}>
            <Image source={require('../../../assets/Cursos.png')} />
            </View>
            <View style={styles.containerLesson}>
              <Text style={styles.titleLesson}>Introdução à teoria matématica</Text>
              <View style={styles.containerSubtitleLesson}>
                <Text style={styles.textLesson}>Aula02 </Text>
                <View style={styles.containerClock}>
                  <Image style={{marginRight: 4}} source={require('../../../assets/clock.png')}/>
                  <Text style={styles.textLesson}>5min</Text>
                </View>
                <View style={styles.containerStatus}>
                  <Text style={styles.textStatus}>Completo</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.containerLessonItem}>
            <View style={styles.containerIcon}>
            <Image source={require('../../../assets/Cursos.png')} />
            </View>
            <View style={styles.containerLesson}>
              <Text style={styles.titleLesson}>Introdução à teoria matématica</Text>
              <View style={styles.containerSubtitleLesson}>
                <Text style={styles.textLesson}>Aula02 </Text>
                <View style={styles.containerClock}>
                  <Image style={{marginRight: 4}} source={require('../../../assets/clock.png')}/>
                  <Text style={styles.textLesson}>5min</Text>
                </View>
                <View style={styles.containerStatus}>
                  <Text style={styles.textStatus}>Completo</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
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

  titleHeader: {
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center'
  },

  iconLeft: {
    position: 'absolute',
    left: 0
  },

  iconFavorite: {
    position: 'absolute',
    right: 0
  },

  containerCourse: {
    flex: 1,
    backgroundColor: '#f0edf5',
    padding: 20,
    borderTopEndRadius: 24,
    borderTopStartRadius: 24
  },

  titleLesson: {
    color: '#6c6c80',
    fontWeight: '600'
  },

  containerTitleCourse: {
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
  },

  titleCourse: {
    fontSize: 30,
    fontWeight: 'normal'
  },

  textLesson:{
    color: '#c4c4d1'
  },
  
  numLessons: {
    position: 'absolute',
    right: 0
  },

  containerLessonItem: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    height: 120,
    
  
  },

  containerClock:{
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },

  containerIcon: {
    backgroundColor: '#61c5bd',
    padding: 14,
    zIndex: 1,
    borderRadius: 16
  },

  containerLesson: {
    backgroundColor: '#fff',
    width: '90%',
    padding: 24,
    paddingLeft: 50,
    position: 'absolute',
    right: 0,
    borderRadius: 16
   
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
    paddingHorizontal: 8
  },

  textStatus: {
    color: '#fff',
  }
})

export default Lessons;
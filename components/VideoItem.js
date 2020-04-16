import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Image,
} from 'react-native'
import colors from '../constants/colors'

const VideoItem = (props) => {
  return (
    <TouchableNativeFeedback useForeground={true}>
      <View style={styles.videoItem}>
        <View style={styles.video}>
          <Image
            style={styles.thumbnail}
            source={{ uri: props.item.thumbnail }}
          />
        </View>
        <View style={styles.bottomCotainer}>
          <View style={styles.avatarContainer}>
            <Image source={{ uri: props.item.avatar }} style={styles.avatar} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{props.item.title}</Text>
            <View style={styles.infoContainer}>
              <Text style={styles.info}>{props.item.channel}</Text>
              <Text style={styles.info}>{props.item.views} views</Text>
              <Text style={styles.info}>{props.item.time}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  )
}

export default VideoItem

const styles = StyleSheet.create({
  videoItem: {
    width: '100%',
    backgroundColor: '#fff',
    flex: 1,
    paddingBottom: 10,
  },
  thumbnail: {
    height: '100%',
    width: '100%',
  },
  video: {
    height: 200,
    width: '100%',
  },
  bottomCotainer: {
    flexDirection: 'row',
    minHeight: 60,
    marginHorizontal: 10,
    marginTop: 10,
  },
  avatarContainer: {
    height: 50,
    width: 50,
    borderRadius: 100,
    overflow: 'hidden',
    marginRight: 10,
  },
  avatar: {
    height: '90%',
    width: '90%',
    borderRadius: 100,
  },
  textContainer: {
    minHeight: '90%',
    flexShrink: 1,
  },
  title: {
    fontSize: 15,
    fontFamily: 'roboto-bold',
  },
  infoContainer: {
    flexDirection: 'row',
  },
  info: {
    fontFamily: 'roboto',
    color: colors.grey,
    marginRight: 10,
    fontSize: 13,
  },
})

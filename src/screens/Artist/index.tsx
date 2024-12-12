import React, { FC, useEffect, useState } from 'react';
import {
  View,
  FlatList,
  ListRenderItemInfo,
  ActivityIndicator,
  Text,
  ScrollView,
} from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, ListItem } from '@rneui/themed';

import { getAlbumInfoRequest } from '../../redux/actions/albums';

import { selectAlbumInfo } from '../../redux/selectors/albums';

import { colors } from '../../constants/colors';

import { ARTIST } from '../../navigation';

import { StackNavigatorParams } from '../../navigation/params';
import { Track } from '../../types';

import styles from './styles';

const AVATAR_SIZE: number = 128;

const formatSeconds = (sec: number) => new Date(sec * 1000).toISOString().substr(11, 8);

const Artist: FC = () => {
  const dispatch = useDispatch();
  const {
    params: { artist, album },
  } = useRoute<RouteProp<StackNavigatorParams, typeof ARTIST>>();

  const selectedAlbumInfo = useSelector(selectAlbumInfo);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    dispatch(getAlbumInfoRequest({ artist, album, onFinally: () => setIsLoading(false) }));
  }, []);

  const renderItem = ({ item }: ListRenderItemInfo<Track>) => (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title style={styles.title}>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{formatSeconds(item.duration)}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron color={colors.main_black} />
    </ListItem>
  );

  const keyExtractor = (item: Track) => item.name;

  return (
    <View style={styles.wrapper}>
      {isLoading && selectedAlbumInfo ? (
        <View style={styles.center}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <>
          <View style={styles.albumContainer}>
            <View style={styles.avatarContainer}>
              <Avatar
                size={AVATAR_SIZE}
                rounded
                source={{ uri: selectedAlbumInfo?.image[3]['#text'] }}
              />
            </View>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
              <Text>{selectedAlbumInfo?.wiki?.content}</Text>
            </ScrollView>
          </View>
          <View style={styles.trackListContainer}>
            <FlatList
              data={selectedAlbumInfo?.tracks.track}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              contentContainerStyle={styles.listContainer}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default Artist;

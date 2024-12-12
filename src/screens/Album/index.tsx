import React, { FC, useEffect, useState } from 'react';
import { View, Text, FlatList, ListRenderItemInfo, ActivityIndicator } from 'react-native';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, ListItem } from '@rneui/themed';

import { getTopAlbumsRequest } from '../../redux/actions/albums';

import { selectTopAlbums } from '../../redux/selectors/albums';

import { ALBUM, ARTIST } from '../../navigation';

import { StackNavigatorParams } from '../../navigation/params';
import { Album, CoverImage } from '../../types';

import styles from './styles';

const AlbumScreen: FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<StackNavigatorParams>>();
  const {
    params: { artist },
  } = useRoute<RouteProp<StackNavigatorParams, typeof ALBUM>>();

  const selectedTopAlbums = useSelector(selectTopAlbums);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    dispatch(getTopAlbumsRequest({ artist, onFinally: () => setIsLoading(false) }));
  }, [artist]);

  const handleNavigateAlbumDetails = (album: string) => {
    return () => navigation.navigate(ARTIST, { album, artist });
  };

  const renderItem = ({ item: { artist, name, image } }: ListRenderItemInfo<Album>) => {
    const mediumAvatarUrl = image.find((image: CoverImage) => image.size === 'large');

    return (
      <ListItem bottomDivider onPress={handleNavigateAlbumDetails(name)}>
        <Avatar rounded source={{ uri: mediumAvatarUrl?.['#text'] ?? '' }} />
        <ListItem.Content>
          <ListItem.Title style={styles.title}>{name}</ListItem.Title>
          <ListItem.Subtitle>{artist.name}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron color="white" />
      </ListItem>
    );
  };

  const keyExtractor = (item: Album) => item.url;

  const renderListEmptyComponent = () => <Text>{'No Albums :('}</Text>;

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {isLoading ? (
          <View style={styles.center}>
            <ActivityIndicator size={'large'} />
          </View>
        ) : (
          <FlatList
            data={selectedTopAlbums}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            ListEmptyComponent={renderListEmptyComponent}
            contentContainerStyle={styles.listContainer}
          />
        )}
      </View>
    </View>
  );
};

export default AlbumScreen;

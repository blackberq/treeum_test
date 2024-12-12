import React, { FC, useState, useCallback } from 'react';
import { View, FlatList, ActivityIndicator, ListRenderItemInfo, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import { SearchBar, ListItem, Avatar } from '@rneui/themed';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { searchArtistRequest } from '../../redux/actions/artists';

import { selectSearchArtist } from '../../redux/selectors/artists';

import { colors } from '../../constants/colors';

import { ALBUM } from '../../navigation';

import { StackNavigatorParams } from '../../navigation/params';
import { Artist } from '../../types/artist';
import { CoverImage } from '../../types';

import styles from './styles';

const Home: FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<StackNavigatorParams>>();

  const selectedSearchArtist = useSelector(selectSearchArtist);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const loadData = useCallback(({ searchQuery }: { searchQuery: string }) => {
    setIsLoading(true);

    dispatch(
      searchArtistRequest({
        artist: searchQuery,
        onFinally: () => setIsLoading(false),
      }),
    );
  }, []);

  const debounced = useDebouncedCallback(() => {
    loadData({
      searchQuery,
    });
  }, 1000);

  const handleSearchQueryChange: (value: string) => void = (value) => {
    setSearchQuery(value);
    debounced();
  };

  const handlePressArtist = (artist: string) => {
    return () => navigation.navigate(ALBUM, { artist });
  };

  const renderItem = ({ item }: ListRenderItemInfo<Artist>) => {
    const mediumAvatarUrl = item.image.find((image: CoverImage) => image.size === 'large');

    return (
      <ListItem bottomDivider onPress={handlePressArtist(item.name)}>
        <Avatar rounded source={{ uri: mediumAvatarUrl?.['#text'] ?? '' }} />
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle numberOfLines={1}>{item.url}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  const renderListEmptyComponent = () => (
    <View style={styles.center}>
      <Text>{'Type something into search field cuz list is empty :('}</Text>
    </View>
  );

  const keyExtractor = (item: Artist) => item.mbid + item.name;

  return (
    <View style={styles.wrapper}>
      <SearchBar
        onChangeText={handleSearchQueryChange}
        placeholder="Type artist..."
        placeholderTextColor={colors.gray}
        showLoading={isLoading}
        value={searchQuery}
      />
      <View style={styles.container}>
        {isLoading ? (
          <View style={styles.center}>
            <ActivityIndicator size={'large'} />
          </View>
        ) : (
          <FlatList
            data={selectedSearchArtist}
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

export default Home;

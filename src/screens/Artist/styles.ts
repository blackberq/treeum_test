import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    flexGrow: 1,
  },
  title: {
    fontWeight: 'bold',
  },
  avatarContainer: {
    padding: 16,
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 8,
  },
  trackListContainer: {
    flex: 3,
  },
  albumContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    paddingHorizontal: 20,
    top: 50,
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  logo: {
    width: 100,
    height: 20,
    resizeMode: 'contain',
  },

  menu: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});

export default styles;
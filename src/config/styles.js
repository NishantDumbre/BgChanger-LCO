import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    backgroundColor: '#BB2CD9',
    paddingVertical: hp(5),
    paddingHorizontal: wp(5),
    color: '#FFFFFF',
    borderRadius: hp(4),
    textTransform: 'uppercase',
    marginVertical: hp(3),
  },
});

export default styles;

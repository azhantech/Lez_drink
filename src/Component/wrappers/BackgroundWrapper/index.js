import react from 'react';
import {View, Image, ImageBackground} from 'react-native';
import {generalImages} from '../../../assets/images';
import styles from './styles';
const BackgroundWrapper = props => {
  return (
    <ImageBackground
      source={generalImages.background}
      style={[styles.mainContainer, props.style]}>
      {props.children}
    </ImageBackground>
  );
};

export default BackgroundWrapper;

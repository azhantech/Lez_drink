import React from 'react';
import {StyleSheet} from 'react-native';
import {fonts} from '../../../assets/fonts';
import TextWrapper from '../TextWrapper';

const NeonOverdriveItalic = props => {
  return (
    <TextWrapper {...props} style={[styles.text, props.style]}>
      {props.children}
    </TextWrapper>
  );
};
const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.NeonOverdrive.italic,
  },
});
export default NeonOverdriveItalic;

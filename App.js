/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Image, View} from 'react-native';
import {generalImages} from './src/assets/images';
import BackgroundWrapper from './src/Component/wrappers/BackgroundWrapper';
import {vh, vw} from './src/utils/dimensions';
import NeonOverdriveItalic from './src/Component/Texts/NeonOverdriveItalic';
import OxaniumRegular from './src/Component/Texts/OxaniumRegular';
const App = () => {
  return (
    <BackgroundWrapper style={{alignItems: 'center'}}>
      <View
        style={{
          height: vh * 35,
          width: vw * 100,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: vh * 4,
        }}>
        <Image
          source={generalImages.genderIcon}
          style={{resizeMode: 'contain', width: vw * 80, height: vh * 60}}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <NeonOverdriveItalic
          style={{
            color: 'white',
            fontSize: vh * 5,
            textDecorationStyle: 'solid',
            textDecorationColor: 'red',
          }}>
          Lez Drink
        </NeonOverdriveItalic>
        <OxaniumRegular
          style={{
            color: 'white',
            fontSize: vh * 3,
            textDecorationStyle: 'solid',
            textDecorationColor: 'red',
          }}>
          The Lesbian
        </OxaniumRegular>
        <OxaniumRegular
          style={{
            color: 'white',
            fontSize: vh * 3,
            textDecorationStyle: 'solid',
            textDecorationColor: 'red',
          }}>
          Drinking Game*
        </OxaniumRegular>
      </View>
    </BackgroundWrapper>
  );
};
export default App;

import React from 'react';
import {Text, Image, View} from 'react-native';
import {useAssets} from '../../hooks/useAssets';

function SignInScreen() {
  const assets = useAssets;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text style={{textAlign: 'center'}}>SignIn</Text>
      <Image source={assets('logo')} />
    </View>
  );
}

export default SignInScreen;

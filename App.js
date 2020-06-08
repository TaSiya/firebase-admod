import React from 'react';
import {View} from 'react-native';
import {BannerAd, BannerAdSize, TestIds} from '@react-native-firebase/admob';

const adUnitId = __DEV__
  ? TestIds.BANNER
  : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

export default function App() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.FULL_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </View>
  );
}

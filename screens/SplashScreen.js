import React from 'react';
import Images from '../config/Images';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const SplashScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer
      style={[
        styles.screen,
        { backgroundColor: theme.colors.custom_rgb0_204_154 },
      ]}
      hasSafeArea={false}
      scrollable={false}
    >
      <View
        style={[
          styles.View15ad50c3,
          {
            backgroundColor: theme.colors.custom_rgb0_198_161,
            borderRadius: 64,
          },
        ]}
      >
        <Image
          style={styles.Image7084fe0a}
          source={Images.Vector}
          resizeMode={'cover'}
        />
      </View>

      <Text
        style={[
          styles.Text99d2a8ef,
          { color: theme.colors.custom_rgb253_253_253 },
        ]}
      >
        {'HireMe'}
      </Text>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Image7084fe0a: {
    width: 53.33,
    height: 53.33,
    marginTop: 25.33,
    marginLeft: 25.33,
    marginBottom: 25.33,
    marginRight: 25.33,
  },
  View15ad50c3: {
    zIndex: -1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 104,
    height: 104,
  },
  Text99d2a8ef: {
    marginTop: 12,
    fontSize: 32,
    fontFamily: 'MPLUSRounded1c_800ExtraBold',
    lineHeight: 40,
    letterSpacing: 0.05,
  },
  screen: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default withTheme(SplashScreen);

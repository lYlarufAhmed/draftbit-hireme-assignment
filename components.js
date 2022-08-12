import React from 'react';
import { ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const SplashScreen1 = props => {
  const { navigation, Images, theme } = props;
  let timeOutHandler;

  React.useEffect(() => {
    timeOutHandler = setTimeout(
      () => navigation.navigate('Onboarding1Screen'),
      3000
    );
    return () => {
      if (timeOutHandler) clearTimeout(timeOutHandler);
    };
  });

  return (
    <ScreenContainer
      style={[
        styles.screen,
        { backgroundColor: theme.colors.custom_rgb0_204_154 },
      ]}
      hasSafeArea={false}
      scrollable={false}
    >
      <Touchable
        onPress={() => {
          try {
            navigation.navigate('Onboarding1Screen');
          } catch (err) {
            console.error(err);
          }
        }}
      >
        <View style={styles.View1e0e58df}>
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
            style={[styles.Text840cfc56, { color: theme.colors.grayscale10 }]}
          >
            {'HireMe'}
          </Text>
        </View>
      </Touchable>
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
  Text840cfc56: {
    marginTop: 12,
    fontSize: 32,
    fontFamily: 'MPLUSRounded1c_800ExtraBold',
    lineHeight: 40,
    letterSpacing: 0.05,
  },
  View1e0e58df: {
    width: 150,
    alignItems: 'center',
  },
  screen: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default withTheme(SplashScreen1);

import React from 'react';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as Utils from '../utils';
import { ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const SplashScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  // test
  React.useEffect(() => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    const id = setTimeout(() => {
      console.log(props);
      props.navigation.navigate('Onboarding1Screen');
      console.log('test it.');
    }, 3000);

    return () => clearTimeout(id);

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
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

export default withTheme(SplashScreen);

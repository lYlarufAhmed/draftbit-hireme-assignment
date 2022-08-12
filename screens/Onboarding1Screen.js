import React from 'react';
import Images from '../config/Images';
import {
  ButtonOutline,
  ButtonSolid,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const Onboarding1Screen = props => {
  const { theme } = props;

  const [Step, setStep] = React.useState(1);

  return (
    <ScreenContainer
      style={[
        styles.screen,
        { backgroundColor: theme.colors.custom_rgb0_204_154 },
      ]}
      hasSafeArea={false}
      scrollable={false}
    >
      <View style={[styles.View4377a6c0, { borderRadius: 0 }]}>
        <ButtonOutline
          style={[
            styles.ButtonOutline7b8bd881,
            { color: theme.colors.grayscale10 },
          ]}
          title={'Skip'}
        />
        <Image
          style={styles.Imagec17ad071}
          source={Images.Imageavtar}
          resizeMode={'cover'}
        />
        {/* Card Container */}
        <View
          style={[
            styles.View596c16dd,
            {
              backgroundColor: theme.colors.custom_rgb255_255_255,
              borderRadius: 32,
            },
          ]}
        >
          {/* Heading container */}
          <View style={styles.Viewec82adf6}>
            <Text
              style={[
                styles.Textf7f957cb,
                { color: theme.colors.grayscale100 },
              ]}
            >
              {'The best app for '}
            </Text>

            <Text
              style={[
                styles.Text403c2b3d,
                { color: theme.colors.custom_rgb0_198_161 },
              ]}
            >
              {'Find'}
            </Text>

            <Text
              style={[
                styles.Text644815c0,
                { color: theme.colors.custom_rgb0_204_154 },
              ]}
            >
              {'Your Dream Job'}
            </Text>
          </View>

          <Text style={[styles.Text4aead964, { color: theme.colors.line }]}>
            {
              'Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem .'
            }
          </Text>
          {/* slider */}
          <View style={styles.View28ebd9ed}>
            {/* active */}
            <View
              style={[
                styles.View834ec99d,
                {
                  backgroundColor: theme.colors.custom_rgb0_204_154,
                  borderRadius: 100,
                },
              ]}
            />
            {/* inactive */}
            <View
              style={[
                styles.View318d664a,
                {
                  backgroundColor: theme.colors.sliderInactive,
                  borderRadius: 64,
                },
              ]}
            />
            {/* inactive */}
            <View
              style={[
                styles.Viewf12a4246,
                {
                  backgroundColor: theme.colors.sliderInactive,
                  borderRadius: 64,
                },
              ]}
            />
          </View>
          <ButtonSolid
            style={[
              styles.ButtonSolid2d5f6a36,
              { backgroundColor: theme.colors.primary },
            ]}
            title={'Next'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonOutline7b8bd881: {
    backgroundColor: 'transparent',
    borderRadius: 0,
    fontFamily: 'MPLUSRounded1c_500Medium',
    borderWidth: 1,
    textAlign: 'center',
    height: 22,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    left: 140,
    top: 30,
    letterSpacing: 0.05,
    lineHeight: 22,
  },
  Imagec17ad071: {
    height: 330,
    width: 320,
  },
  Textf7f957cb: {
    fontFamily: 'MPLUSRounded1c_700Bold',
    fontSize: 20,
    lineHeight: 32,
    letterSpacing: 0.05,
  },
  Text403c2b3d: {
    fontFamily: 'MPLUSRounded1c_700Bold',
    fontSize: 20,
    lineHeight: 32,
    letterSpacing: 0.05,
  },
  Text644815c0: {
    fontFamily: 'MPLUSRounded1c_700Bold',
    fontSize: 20,
    lineHeight: 32,
    letterSpacing: 0.05,
  },
  Viewec82adf6: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  Text4aead964: {
    lineHeight: 22,
    letterSpacing: 0.05,
    textAlign: 'center',
    fontFamily: 'MPLUSRounded1c_400Regular',
    marginTop: 8,
    fontSize: 12,
    marginRight: 24,
    marginLeft: 24,
  },
  View834ec99d: {
    height: 10,
    width: 32,
    marginRight: 12,
  },
  View318d664a: {
    width: 10,
    height: 10,
    marginRight: 12,
  },
  Viewf12a4246: {
    width: 10,
    height: 10,
  },
  View28ebd9ed: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  ButtonSolid2d5f6a36: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  View596c16dd: {
    alignItems: 'center',
    paddingTop: 32,
    marginRight: 24,
    marginLeft: 24,
    paddingBottom: 20,
  },
  View4377a6c0: {
    zIndex: -1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 320,
    paddingTop: 12,
  },
  screen: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default withTheme(Onboarding1Screen);

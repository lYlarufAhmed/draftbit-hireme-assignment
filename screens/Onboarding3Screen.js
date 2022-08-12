import React from 'react';
import Images from '../config/Images';
import { ButtonSolid, ScreenContainer, Spacer, withTheme } from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const Onboarding3Screen = props => {
  const { theme } = props;
  const { navigation } = props;

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
        {/* Skip button */}
        <ButtonSolid
          onPress={() => {
            try {
              navigation.navigate('SignInCreateAccountScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.ButtonSolida61a214d}
          title={'Skip'}
        />
        <Image
          style={styles.Imagec17ad071}
          source={Images.Imageavtar2}
          resizeMode={'contain'}
        />
        {/* Card Container */}
        <View
          style={[
            styles.Viewec60e485,
            {
              backgroundColor: theme.colors.custom_rgb255_255_255,
              borderRadius: 27,
            },
          ]}
        >
          {/* Heading container */}
          <View style={styles.Viewec82adf6}>
            <Text
              style={[
                styles.Text3d76a7c1,
                { color: theme.colors.grayscale100 },
              ]}
            >
              {'Application surely'}
            </Text>

            <Text style={styles.Text21aa74dc}>{'Viewed by'}</Text>
            <Spacer top={16} right={5} bottom={16} left={5} />
            <Text
              style={[
                styles.Text6d29bb0b,
                { color: theme.colors.custom_rgb0_204_154 },
              ]}
            >
              {'each'}
            </Text>

            <Text
              style={[
                styles.Text6d29bb0b,
                { color: theme.colors.custom_rgb0_204_154 },
              ]}
            >
              {'company'}
            </Text>
          </View>

          <Text style={[styles.Text4aead964, { color: theme.colors.line }]}>
            {
              'Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem .'
            }
          </Text>
          {/* slider */}
          <View style={styles.View28ebd9ed}>
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
            {/* active */}
            <View
              style={[
                styles.Viewfbea9203,
                {
                  backgroundColor: theme.colors.custom_rgb0_204_154,
                  borderRadius: 100,
                },
              ]}
            />
          </View>
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('SignInCreateAccountScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolid2d5f6a36,
              { backgroundColor: theme.colors.primary },
            ]}
            title={'Get Started'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolida61a214d: {
    borderRadius: 0,
    fontFamily: 'System',
    fontWeight: '400',
    textAlign: 'center',
    left: 130,
    top: 40,
    fontSize: 20,
  },
  Imagec17ad071: {
    height: 330,
    width: 320,
  },
  Text3d76a7c1: {
    fontFamily: 'MPLUSRounded1c_700Bold',
    fontSize: 24,
    lineHeight: 32,
  },
  Text21aa74dc: {
    fontFamily: 'MPLUSRounded1c_700Bold',
    fontSize: 24,
    lineHeight: 32,
  },
  Text6d29bb0b: {
    fontFamily: 'MPLUSRounded1c_700Bold',
    fontSize: 24,
    lineHeight: 32,
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
  View318d664a: {
    width: 10,
    height: 10,
    marginRight: 12,
  },
  Viewf12a4246: {
    width: 10,
    height: 10,
  },
  Viewfbea9203: {
    height: 10,
    width: 32,
    marginLeft: 12,
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
  Viewec60e485: {
    alignItems: 'center',
    paddingTop: 24,
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

export default withTheme(Onboarding3Screen);

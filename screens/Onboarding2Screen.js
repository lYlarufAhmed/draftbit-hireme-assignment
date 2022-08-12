import React from 'react';
import Images from '../config/Images';
import { ButtonSolid, ScreenContainer, Spacer, withTheme } from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const Onboarding2Screen = props => {
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
          style={styles.ButtonSolid4140f39b}
          title={'Skip'}
        />
        <Image
          style={styles.Imagec17ad071}
          source={Images.Imageavtar1}
          resizeMode={'contain'}
        />
        {/* Card Container */}
        <View
          style={[
            styles.View41f7cfa6,
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
                styles.Text3a7eda5b,
                { color: theme.colors.grayscale100 },
              ]}
            >
              {'Better'}
            </Text>
            <Spacer top={16} right={5} bottom={16} left={5} />
            <Text
              style={[
                styles.Textad7e81b8,
                { color: theme.colors.custom_rgb0_198_161 },
              ]}
            >
              {'future'}
            </Text>
            <Spacer top={16} right={5} bottom={16} left={5} />
            <Text style={[styles.Textd6a71706, { color: theme.colors.strong }]}>
              {'is starting'}
            </Text>

            <Text
              style={[
                styles.Text05cc7efb,
                { color: theme.colors.custom_rgb0_204_154 },
              ]}
            >
              {'from you'}
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
                styles.Viewf12a4246,
                {
                  backgroundColor: theme.colors.sliderInactive,
                  borderRadius: 64,
                },
              ]}
            />
          </View>
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('Onboarding3Screen');
              } catch (err) {
                console.error(err);
              }
            }}
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
  ButtonSolid4140f39b: {
    borderRadius: 0,
    fontFamily: 'System',
    fontWeight: '400',
    textAlign: 'center',
    left: 130,
    top: 25,
    fontSize: 20,
  },
  Imagec17ad071: {
    height: 330,
    width: 320,
  },
  Text3a7eda5b: {
    fontFamily: 'MPLUSRounded1c_700Bold',
    fontSize: 20,
    lineHeight: 32,
  },
  Textad7e81b8: {
    fontFamily: 'MPLUSRounded1c_700Bold',
    fontSize: 20,
    lineHeight: 32,
  },
  Textd6a71706: {
    fontFamily: 'MPLUSRounded1c_700Bold',
    fontSize: 20,
    lineHeight: 32,
  },
  Text05cc7efb: {
    fontFamily: 'MPLUSRounded1c_700Bold',
    fontSize: 20,
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
  View834ec99d: {
    height: 10,
    width: 32,
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
  View41f7cfa6: {
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

export default withTheme(Onboarding2Screen);

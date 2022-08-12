import React from 'react';
import {
  ButtonSolid,
  Link,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SignInCreateAccountScreen = props => {
  const { theme } = props;

  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      if (false) {
        return;
      }
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  return (
    <ScreenContainer style={{ backgroundColor: theme.colors.white }}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.KeyboardAwareScrollView2b66e99eContent}
      >
        {/* Header */}
        <View style={styles.View39912261}>
          {/* Title */}
          <Text style={styles.Textb7df8681}>{'Create account'}</Text>
          {/* Subtitle */}
          <Text style={styles.Textf51af5e8}>
            {'Lorem ipsum dolor sit amet'}
          </Text>
        </View>
        <Spacer top={12} right={8} bottom={12} left={8} />
        <View style={styles.Viewcec4bbbc}>
          {/* Sign In Button */}
          <ButtonSolid
            style={[
              styles.ButtonSolid0726d271,
              {
                backgroundColor: theme.colors.white,
                borderColor: theme.colors.primary,
                color: theme.colors.strong,
              },
            ]}
            title={'Continue with Google'}
            icon={'AntDesign/google'}
          />
          <Spacer top={8} right={8} bottom={8} left={8} />
          {/* Sign In Button */}
          <ButtonSolid
            style={[
              styles.ButtonSolid0726d271,
              {
                backgroundColor: theme.colors.white,
                borderColor: theme.colors.primary,
                color: theme.colors.strong,
              },
            ]}
            title={'Continue with Apple'}
            icon={'MaterialCommunityIcons/apple'}
            disabled={false}
          />
        </View>
        {/* Login Form */}
        <View style={styles.View1e98c651}>
          {/* Error Message */}
          <Text style={[styles.Text6789b8ec, { color: theme.colors.error }]}>
            {null}
          </Text>
          {/* Email Input */}
          <TextInput
            style={[
              styles.TextInputa4869d83,
              { borderColor: theme.colors.divider },
            ]}
            value={null}
            placeholder={'Email'}
            keyboardType={'email-address'}
            textContentType={'emailAddress'}
            autoCapitalize={'none'}
          />
          <Spacer top={20} right={8} bottom={20} left={8} />
          {/* Sign In Button */}
          <ButtonSolid
            style={[
              styles.ButtonSolide5799311,
              {
                backgroundColor: theme.colors.primary,
                borderColor: theme.colors.primary,
              },
            ]}
            title={'Continue with Email'}
          />
          <Spacer top={16} right={8} bottom={16} left={8} />
          <View style={styles.View8bb6a2bc}>
            <Text>{'Already have an account?'}</Text>
            <Spacer top={8} right={2} bottom={8} left={2} />
            {/* Sign Up Link */}
            <Link style={{ color: theme.colors.primary }} title={'Login'} />
          </View>
        </View>
        <Spacer top={40} right={8} bottom={40} left={8} />
        <Text style={[styles.Textabb35106, { color: theme.colors.strong }]}>
          {'By signing up you agree to our Terms and Conditions of Use'}
        </Text>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textb7df8681: {
    textAlign: 'center',
    fontSize: 36,
    fontFamily: 'System',
    fontWeight: '600',
  },
  Textf51af5e8: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 14,
    marginTop: 4,
  },
  View39912261: {
    alignItems: 'center',
  },
  ButtonSolid0726d271: {
    borderRadius: 24,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 16,
    paddingBottom: 16,
  },
  Viewcec4bbbc: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  Text6789b8ec: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 16,
  },
  TextInputa4869d83: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '400',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
  },
  TextInput34ffd2e4: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '400',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  ButtonSolide5799311: {
    borderRadius: 24,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 16,
    paddingBottom: 16,
  },
  View8bb6a2bc: {
    flexDirection: 'row',
    marginBottom: 12,
    justifyContent: 'center',
  },
  View1e98c651: {
    paddingLeft: 36,
    paddingRight: 36,
    marginTop: 24,
  },
  Textabb35106: {
    paddingLeft: 36,
    paddingRight: 36,
    textAlign: 'center',
  },
  KeyboardAwareScrollView2b66e99eContent: {
    justifyContent: 'center',
    flex: 1,
  },
});

export default withTheme(SignInCreateAccountScreen);

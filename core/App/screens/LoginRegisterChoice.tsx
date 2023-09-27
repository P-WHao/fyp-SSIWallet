/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import AppLockout from '../assets/img/splashlogo.svg'
import Button, { ButtonType } from '../components/buttons/Button'
import { useTheme } from '../contexts/theme'
import { Screens } from '../types/navigators'
import { testIdWithKey } from '../utils/testable'

const LoginRegisterChoice: React.FC = () => {
  const image = { uri: "https://i.pinimg.com/564x/59/18/a3/5918a34f2e511ecb08fee520fd8e2bed.jpg" };
  const { ColorPallet, TextTheme } = useTheme()
  const { t } = useTranslation()
  const navigation = useNavigation()
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    image: {
      flex: 1,
      width: 400,
      height: 900,
      justifyContent: "center",
      alignItems: 'center',
    },
    title: {
      ...TextTheme.headingThree,
      textAlign: 'center',
      marginBottom: 20,
      color: 'white',
    },
    description: {
      ...TextTheme.normal,
      textAlign: 'center',
      marginHorizontal: 50,
      marginBottom: 50,
      color: 'white',
    },
    tryAgain: {
      ...TextTheme.normal,
      textAlign: 'center',
    },
    countDown: {
      ...TextTheme.normal,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    imageIcon: {
      width: 120,
      height: 120,
      marginBottom: 20,
      marginTop: -80,
    },
  })

  const unlock = async () => {
    navigation.navigate(Screens.EnterPin as never)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <AppLockout style={styles.imageIcon} />
        <View>
          <Text style={styles.title}>{t('LoginRegisterChoice.AppTitle')}</Text>
          <Text style={styles.description}>{t('LoginRegisterChoice.AppDescript')}</Text>
          <Button
              title={t('LoginRegisterChoice.AppLogin')}
              buttonType={ButtonType.SplashLoginRegister}
              testID={testIdWithKey('Enter')}
              accessibilityLabel={t('LoginRegisterChoice.AppLogin')}
              onPress={unlock}
            />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default LoginRegisterChoice

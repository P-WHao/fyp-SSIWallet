/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ScrollView, StyleSheet, Text, View, Linking } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Button, { ButtonType } from '../components/buttons/Button'
import CheckBoxRow from '../components/inputs/CheckBoxRow'
import HighlightTextBox from '../components/texts/HighlightTextBox'
import InfoTextBox from '../components/texts/InfoTextBox'
import { DispatchAction } from '../contexts/reducers/store'
import { useStore } from '../contexts/store'
import { useTheme } from '../contexts/theme'
import { AuthenticateStackParams, Screens } from '../types/navigators'
import { testIdWithKey } from '../utils/testable'

const tarcTermUrl = 'https://www.tarc.edu.my/'

const Terms: React.FC = () => {
  const [, dispatch] = useStore()
  const [checked, setChecked] = useState(false)
  const { t } = useTranslation()
  const navigation = useNavigation<StackNavigationProp<AuthenticateStackParams>>()
  const { OnboardingTheme } = useTheme()
  const onSubmitPressed = () => {
    dispatch({
      type: DispatchAction.DID_AGREE_TO_TERMS,
    })

    navigation.navigate(Screens.CreatePin)
  }
  const style = StyleSheet.create({
    container: {
      ...OnboardingTheme.container,
      padding: 20,
    },
    bodyText: {
      ...OnboardingTheme.bodyText,
      flexShrink: 1,
    },
    controlsContainer: {
      marginTop: 'auto',
      marginBottom: 20,
    },
    paragraph: {
      flexDirection: 'row',
      marginTop: 20,
    },
    enumeration: {
      ...OnboardingTheme.bodyText,
      marginRight: 25,
    },
    titleText: {
      ...OnboardingTheme.bodyText,
      textDecorationLine: 'underline',
    },
    link: {
      ...OnboardingTheme.bodyText,
      color: 'blue',
      textDecorationLine: 'underline',
      fontWeight: 'bold',
    },
  })
  const onBackPressed = () => {
    navigation.navigate(Screens.Onboarding)
  }

  const openLink = async (url: string) => {
    // Only `https://` is allowed. Update manifest as needed.
    const supported = await Linking.canOpenURL(url)

    if (supported) {
      // Will open in device browser.
      await Linking.openURL(url)
    }
  }

  return (
    <SafeAreaView edges={['left', 'right', 'bottom']}>
      <ScrollView style={[style.container]}>
        <InfoTextBox>{t('TermPageInfo.TermAgreeInfo')}</InfoTextBox>
        <Text style={[style.bodyText, { marginTop: 20, marginBottom: 20 }]}>
          <Text style={[style.bodyText, { fontWeight: 'bold' }]}>
            {t('TermPageInfo.AppTitle')}
          </Text>{' '}
          {t('TermPageInfo.AppText1')}
          <Text style={style.link} onPress={() => openLink(tarcTermUrl)}>
          {t('TermPageInfo.AppText1a')}
          </Text>
          {t('TermPageInfo.AppText1b')}
        </Text>
        <HighlightTextBox>{t('TermPageInfo.HighlightText')}</HighlightTextBox>
        
        {/* First Term */}
        <View style={style.paragraph}>
          <Text style={[style.enumeration]}>1</Text>
          <Text style={[style.bodyText]}>
            <Text style={[style.titleText]}>{}</Text>
            {t('TermPageInfo.Term1')}
          </Text>
        </View>

        {/* Second Term */}
        <View style={style.paragraph}>
          <Text style={[style.enumeration]}>2</Text>
          <Text style={[style.bodyText]}>
            <Text style={[style.titleText]}>{}</Text>
            {t('TermPageInfo.Term2')}
          </Text>
        </View>

        {/* Third Term */}
        <View style={style.paragraph}>
          <Text style={[style.enumeration]}>3</Text>
          <Text style={[style.bodyText]}>
            <Text style={[style.titleText]}>{}</Text>
            {t('TermPageInfo.Term3')}
          </Text>
        </View>
        <View style={[style.controlsContainer]}>
          <CheckBoxRow
            title={t('Terms.Attestation')}
            accessibilityLabel={t('Terms.IAgree')}
            testID={testIdWithKey('IAgree')}
            checked={checked}
            onPress={() => setChecked(!checked)}
          />
          <View style={[{ paddingTop: 10 }]}>
            <Button
              title={t('Global.Continue')}
              accessibilityLabel={t('Global.Continue')}
              testID={testIdWithKey('Continue')}
              disabled={!checked}
              onPress={onSubmitPressed}
              buttonType={ButtonType.Primary}
            />
          </View>
          <View style={[{ paddingTop: 10, marginBottom: 20 }]}>
            <Button
              title={t('Global.Back')}
              accessibilityLabel={t('Global.Back')}
              testID={testIdWithKey('Back')}
              onPress={onBackPressed}
              buttonType={ButtonType.Secondary}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Terms

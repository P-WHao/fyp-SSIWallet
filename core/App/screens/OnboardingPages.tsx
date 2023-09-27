/* eslint-disable prettier/prettier */
import React from 'react'
import { useTranslation } from 'react-i18next'
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import { SvgProps } from 'react-native-svg'

import CredentialList from '../assets/img/credential-list.svg'
import ScanShare from '../assets/img/scan-share.svg'
import SecureImage from '../assets/img/secure-image.svg'
import Button, { ButtonType } from '../components/buttons/Button'
import { useTheme } from '../contexts/theme'
import { Theme } from '../theme'
import { GenericFn } from '../types/fn'
import { testIdWithKey } from '../utils/testable'

import { OnboardingStyleSheet } from './Onboarding'

export const createCarouselStyle = (OnboardingTheme: any): OnboardingStyleSheet => {
  return StyleSheet.create({
    container: {
      ...OnboardingTheme.container,
      flex: 1,
      alignItems: 'center',
    },
    carouselContainer: {
      ...OnboardingTheme.carouselContainer,
      flexDirection: 'column',
    },
    pagerContainer: {
      flexShrink: 1,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 30,
    },
    pagerDot: {
      ...OnboardingTheme.pagerDot,
      borderWidth: 1,
      borderStyle: 'solid',
    },
    pagerDotActive: {
      ...OnboardingTheme.pagerDotActive,
    },
    pagerDotInactive: {
      ...OnboardingTheme.pagerDotInactive,
    },
    pagerPosition: {
      position: 'relative',
      top: 0,
    },
    pagerNavigationButton: {
      ...OnboardingTheme.pagerNavigationButton,
      fontSize: 18,
      fontWeight: 'bold',
    },
  })
}

export const createStyles = (OnboardingTheme: any) => {
  return StyleSheet.create({
    headerText: {
      color: '#313132',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 20,
    },
    headerTextPage1: {
      color: '#313132',
      fontSize: 32,
      fontWeight: 'bold',
      marginTop: 50,
    },
    bodyText: {
      ...OnboardingTheme.bodyText,
      flexShrink: 1,
    },
    point: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 20,
      marginTop: 10,
      marginRight: 20,
      marginBottom: 10,
    },
    icon: {
      marginRight: 10,
    },
    imageLogo: {
      alignItems: 'center',
    },
  })
}

const createImageDisplayOptions = (OnboardingTheme: any) => {
  return {
    ...OnboardingTheme.imageDisplayOptions,
    height: 180,
    width: 180,
  }
}

const StartPages = (theme: Theme) => {
  const { ColorPallet, Assets } = useTheme()
  const { t } = useTranslation()
  const defaultStyle = createStyles(theme)
  return (
    <ScrollView style={{ padding: 20, paddingTop: 30 }}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={{
            uri: 'https://media.graphcms.com/PdfmenC3Re2VZcOMHqFN',
          }}
          style={{ width: Assets.img.logoPrimary.width, height: Assets.img.logoPrimary.height}}
          testID={testIdWithKey('LoadingActivityIndicatorImage')}
        />
        </View>
      <Text style={[defaultStyle.headerTextPage1]}>{t('OnboardingText.Welcome')}</Text>
      <Text style={[defaultStyle.bodyText, { marginTop: 25 }]}>
        {t('OnboardingText.Page1Line1')}
      </Text>
      <Text style={[defaultStyle.bodyText, { marginTop: 25 }]}>
        {t('OnboardingText.Page1Line2')}
      </Text>
      <Text style={[defaultStyle.bodyText, { marginTop: 25 }]}>
        {t('OnboardingText.Page1Line3')}
      </Text>
    </ScrollView>
  )
}

const customPages1 = (OnboardingTheme: any) => {
  const { t } = useTranslation()
  const styles = createStyles(OnboardingTheme)
  const imageDisplayOptions = createImageDisplayOptions(OnboardingTheme)
  return (
    <>
      <ScrollView style={{ padding: 20 }}>
        <View style={{ alignItems: 'center' }}>
          <CredentialList {...imageDisplayOptions} />
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={[styles.headerText, { fontSize: 20 }]}>{t('OnboardingText.Page2Head')}</Text>
          <Text style={[styles.bodyText, { marginTop: 25 }]}>
            {t('OnboardingText.Page2Line1')}
            {'\n\n'}
            {t('OnboardingText.Page2Line2')}
          </Text>
        </View>
      </ScrollView>
    </>
  )
}

const customPages2 = (OnboardingTheme: any) => {
  const { t } = useTranslation()
  const styles = createStyles(OnboardingTheme)
  const imageDisplayOptions = createImageDisplayOptions(OnboardingTheme)
  return (
    <>
      <ScrollView style={{ padding: 20 }}>
        <View style={{ alignItems: 'center' }}>
          <ScanShare {...imageDisplayOptions} />
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={[styles.headerText, { fontSize: 20 }]}>{t('OnboardingText.Page3Head')}</Text>
          <Text style={[styles.bodyText, { marginTop: 25 }]}>
            {t('OnboardingText.Page3Line1')}
            {'\n\n'}
            {t('OnboardingText.Page3Line2')}
          </Text>
        </View>
      </ScrollView>
    </>
  )
}

const lastPages = (onTutorialCompleted: GenericFn, OnboardingTheme: any) => {
  const { t } = useTranslation()
  const styles = createStyles(OnboardingTheme)
  const imageDisplayOptions = createImageDisplayOptions(OnboardingTheme)
  return (
    <>
      <ScrollView style={{ padding: 20 }}>
        <View style={{ alignItems: 'center' }}>
          <SecureImage {...imageDisplayOptions} />
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={[styles.headerText, { fontSize: 20 }]}>{t('OnboardingText.Page4Head')}</Text>
          <Text style={[styles.bodyText, { marginTop: 25 }]}>
            {t('OnboardingText.Page3Line1')}
            {'\n\n'}
            {t('OnboardingText.Page3Line2')}
          </Text>
        </View>
      </ScrollView>
      <View style={{ marginTop: 'auto', margin: 20 }}>
        <Button
          title={t('Global.GetStarted')}
          accessibilityLabel={t('Global.GetStarted')}
          testID={testIdWithKey('GetStarted')}
          onPress={onTutorialCompleted}
          buttonType={ButtonType.Primary}
        />
      </View>
    </>
  )
}

const OnboardingPages = (onTutorialCompleted: GenericFn, OnboardingTheme: any): Array<Element> => {
  return [
    StartPages(OnboardingTheme),
    // ...guides.map((g) => createPageWith(g.image, g.title, g.body, OnboardingTheme)),
    customPages1(OnboardingTheme),
    customPages2(OnboardingTheme),
    lastPages(onTutorialCompleted, OnboardingTheme),
  ]
}

export default OnboardingPages

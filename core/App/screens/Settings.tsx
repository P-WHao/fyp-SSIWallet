/* eslint-disable prettier/prettier */
//TO USE
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { getVersion, getBuildNumber } from 'react-native-device-info'
import Icon from 'react-native-vector-icons/MaterialIcons'

import SafeAreaScrollView from '../components/views/SafeAreaScrollView'
import { useTheme } from '../contexts/theme'
import { Screens, SettingStackParams, Stacks } from '../types/navigators'
import { testIdWithKey } from '../utils/testable'

type SettingsProps = StackScreenProps<SettingStackParams>

const Settings: React.FC<SettingsProps> = ({ navigation }) => {
  const { t } = useTranslation()
  const { borderRadius, SettingsTheme } = useTheme()
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      paddingTop: 20,
      paddingBottom: 20,
    },
    groupHeader: {
      ...SettingsTheme.groupHeaderSetting,
    },
    rowGroup: {
      // borderRadius: borderRadius * 2,
      backgroundColor: SettingsTheme.groupBackground,
      marginBottom: 16,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 12,
    },
    icon: {
      paddingLeft: 10,
    },
  })
  return (
    <SafeAreaScrollView>
      <View style={styles.container}>
        {/* 1st Group
        <Text style={styles.groupHeader}>{t('Settings.ProfileLogin')}</Text>
        <View style={styles.rowGroup}>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel={t('Settings.EditProfile')}
            testID={testIdWithKey('EditProfile')}
            style={styles.row}
            onPress={() => navigation.navigate(Screens.EditProfile)}
          >
            <Icon style={styles.icon} name={'mode-edit'} size={25} color={SettingsTheme.iconColor} />
            <Text style={SettingsTheme.textSetting}>{t('Settings.EditProfile')}</Text>
            <Icon name={'chevron-right'} size={25} color={SettingsTheme.iconColor} />
          </TouchableOpacity>
        </View> */}

        {/* 2nd Group */}
        <Text style={styles.groupHeader}>{t('Settings.AppPreferences')}</Text>
        <View style={styles.rowGroup}>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel={t('Settings.Language')}
            testID={testIdWithKey('Language')}
            style={styles.row}
            onPress={() => navigation.navigate(Screens.Language)}
          >
            <Icon style={styles.icon} name={'language'} size={25} color={SettingsTheme.iconColor} />
            <Text style={SettingsTheme.textSetting}>{t('Settings.Language')}</Text>
            <Icon name={'chevron-right'} size={25} color={SettingsTheme.iconColor} />
          </TouchableOpacity>
        </View>

        {/* 3rd Group */}
        <Text style={styles.groupHeader}>{t('Settings.General')}</Text>
        <View style={styles.rowGroup}>
          {/* About Us */}
          <TouchableOpacity
              accessible={true}
              accessibilityLabel={t('Settings.AboutUs')}
              testID={testIdWithKey('AboutUs')}
              style={styles.row}
              onPress={() => {
                Linking.openURL('https://www.tarc.edu.my/');
                }}
            >
              <Icon style={styles.icon} name={'info-outline'} size={25} color={SettingsTheme.iconColor} />
              <Text style={SettingsTheme.textSetting}>{t('Settings.AboutUs')}</Text>
              <Icon name={'chevron-right'} size={25} color={SettingsTheme.iconColor} />
          </TouchableOpacity>

          {/* User Manual */}
          <TouchableOpacity
              accessible={true}
              accessibilityLabel={t('Settings.UserManual')}
              testID={testIdWithKey('UserManual')}
              style={styles.row}
              onPress={() => navigation.navigate(Screens.Onboarding)}
            >
              <Icon style={styles.icon} name={'menu-book'} size={25} color={SettingsTheme.iconColor} />
              <Text style={SettingsTheme.textSettingManual}>{t('Settings.UserManual')}</Text>
              <Icon name={'chevron-right'} size={25} color={SettingsTheme.iconColor} />
          </TouchableOpacity>

          {/* Send Feedback */}
          <TouchableOpacity
              accessible={true}
              accessibilityLabel={t('Settings.SendFeedback')}
              testID={testIdWithKey('SendFeedback')}
              style={styles.row}
              onPress={() => Linking.openURL('mailto:phoonwh-wm19@student.tarc.edu.my?subject=SendMail&body=Description') }
            >
              <Icon style={styles.icon} name={'messenger-outline'} size={25} color={SettingsTheme.iconColor} />
              <Text style={SettingsTheme.textSettingFeedback}>{t('Settings.SendFeedback')}</Text>
              <Icon name={'chevron-right'} size={25} color={SettingsTheme.iconColor} />
          </TouchableOpacity>

          {/* Terms & Conditions */}
          <TouchableOpacity
              accessible={true}
              accessibilityLabel={t('Settings.TermsConditions')}
              testID={testIdWithKey('TermsConditions')}
              style={styles.row}
              onPress={() => navigation.navigate(Screens.TermsConditions)}
            >
              <Icon style={styles.icon} name={'description'} size={25} color={SettingsTheme.iconColor} />
              <Text style={SettingsTheme.textSettingTnC}>{t('Settings.TermsConditions')}</Text>
              <Icon name={'chevron-right'} size={25} color={SettingsTheme.iconColor} />
          </TouchableOpacity>

          {/* Version */}
          <View style={styles.row}>
          <Icon style={styles.icon} name={'loop'} size={25} color={SettingsTheme.iconColor} />
            <Text style={SettingsTheme.textSetting} testID={testIdWithKey('VersionLabel')}>
              {t('Settings.Version')}
            </Text>
            <Text
              style={SettingsTheme.text}
              testID={testIdWithKey('Version')}
            >{t('Settings.VersionNumber')}</Text>
          </View>
        </View>
      </View>
    </SafeAreaScrollView>
  )
}

export default Settings
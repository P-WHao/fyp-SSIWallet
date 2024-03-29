/* eslint-disable prettier/prettier */
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { useTheme } from '../../contexts/theme'
import { GenericFn } from '../../types/fn'
import { testIdWithKey } from '../../utils/testable'

const defaultIconSize = 24
const defaultStatusAndNavbarHeight = 32

interface FauxNavigationBarProps {
  title: string
  onHomeTouched?: GenericFn
}

const FauxNavigationBar: React.FC<FauxNavigationBarProps> = ({ title, onHomeTouched }) => {
  const { TextTheme, ColorPallet } = useTheme()
  const { t } = useTranslation()
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: ColorPallet.brand.primary,
      height: defaultStatusAndNavbarHeight,
    },
    content: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    label: {
      ...TextTheme.normal,
      color: ColorPallet.grayscale.white,
      fontSize: 17,
      fontWeight: 'bold',
      flexGrow: 1,
      textAlign: 'center',
      paddingBottom: 12,
    },
  })

  return (
    <>
      <View style={styles.container} />
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.label}>{title}</Text>
          {onHomeTouched && (
            <TouchableOpacity
              accessibilityLabel={t('Global.Home')}
              testID={testIdWithKey('HomeButton')}
              onPress={onHomeTouched}
            >
              <Icon name="home" size={defaultIconSize} color={'white'} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  )
}

export default FauxNavigationBar

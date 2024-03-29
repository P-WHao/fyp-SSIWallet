/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Arrow from '../../assets/icons/large-arrow.svg'
import { useTheme } from '../../contexts/theme'

interface HeaderButtonProps {
  title: string
  testID?: string
  accessibilityLabel?: string
  onPress?: () => void
  disabled?: boolean
}

const HeaderRight: React.FC<HeaderButtonProps> = ({ title, testID, accessibilityLabel, onPress, disabled = false }) => {
  const accessible = accessibilityLabel && accessibilityLabel !== '' ? true : false
  const { ColorPallet, TextTheme } = useTheme()
  const style = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    touchableArea: {
      marginRight: 14,
    },
    title: {
      ...TextTheme.label,
      color: ColorPallet.grayscale.white,
      marginRight: 4,
    },
    icon: {
      transform: [{ rotate: '180deg' }],
    },
  })

  return (
    <TouchableOpacity
      accessible={accessible}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      onPress={onPress}
      style={[style.touchableArea]}
      disabled={disabled}
    >
      <View style={style.container}>
        <Text style={[style.title]}>{title}</Text>
        <Arrow
          height={TextTheme.label.fontSize}
          width={TextTheme.label.fontSize}
          fill={ColorPallet.grayscale.white}
          style={[style.icon]}
        />
      </View>
    </TouchableOpacity>
  )
}

export default HeaderRight

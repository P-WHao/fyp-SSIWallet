/* eslint-disable prettier/prettier */
import { CredentialState } from '@aries-framework/core'
import { useCredentialByState } from '@aries-framework/react-hooks'
import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { Component, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FlatList, View, Text, TouchableOpacity} from 'react-native'

import CredentialCard from '../components/misc/CredentialCard'
import EmptyList from '../components/misc/EmptyList'
import { useTheme } from '../contexts/theme'
import { CredentialStackParams, Screens } from '../types/navigators'

const ListCredentials: React.FC = () => {
  const { t } = useTranslation()
  const credentials = [
    ...useCredentialByState(CredentialState.CredentialReceived),
    ...useCredentialByState(CredentialState.Done),
  ]
  const navigation = useNavigation<StackNavigationProp<CredentialStackParams>>()
  const { ColorPallet } = useTheme()
  
  
  return (
    <>
    {/* Search Bar
    Two Icon */}
    
    <FlatList
      style={{ backgroundColor: ColorPallet.brand.primaryBackground }}
      data={credentials.sort((a, b) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf())}
      keyExtractor={(credential) => credential.id}
      numColumns={1}
      renderItem={({ item: credential, index }) => {
        return (
          <View
            style={{
              marginHorizontal: 15,
              marginTop: 15,
              marginBottom: index === credentials.length - 1 ? 45 : 0,
            }}
          >
            
            <CredentialCard
              credential={credential}
              onPress={() => navigation.navigate(Screens.CredentialDetails, { credentialId: credential.id })} />
          </View>
        )
      } }
      ListEmptyComponent={() => <EmptyList message={t('Credentials.EmptyList')} />} /></>
  )
}

export default ListCredentials

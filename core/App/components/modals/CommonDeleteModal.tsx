/* eslint-disable prettier/prettier */
import * as React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Collapsible from 'react-native-collapsible'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Button, { ButtonType } from '../../components/buttons/Button'
import FauxNavigationBar from '../../components/views/FauxNavigationBar'
import { useTheme } from '../../contexts/theme'
import { GenericFn } from '../../types/fn'
import { testIdWithKey } from '../../utils/testable'
import UnorderedList from '../misc/UnorderedList'

interface CommonDeleteModalProps {
  onSubmit?: GenericFn
  onCancel?: GenericFn
  visible?: boolean
}

interface DeleteProps {
  title: string
  content: string[]
}

const Dropdown: React.FC<DeleteProps> = ({ title, content }) => {
  const { TextTheme, ColorPallet } = useTheme()
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true)

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsCollapsed(!isCollapsed)}
        style={[
          {
            padding: 15,
            backgroundColor: ColorPallet.brand.modalSecondaryBackground,
            borderRadius: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
        ]}
      >
        <Text style={[TextTheme.normal, { fontWeight: 'bold' }]}>{title}</Text>
        <Icon name={isCollapsed ? 'expand-more' : 'expand-less'} size={24} color={TextTheme.normal.color} />
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed} enablePointerEvents={true}>
        <View
          style={[{ marginTop: 10, borderLeftWidth: 2, borderLeftColor: ColorPallet.brand.modalSecondaryBackground }]}
        >
          <UnorderedList UnorderedListItems={content} />
        </View>
      </Collapsible>
    </>
  )
}

const CommonDeleteModal: React.FC<CommonDeleteModalProps> = ({ visible, onSubmit, onCancel }) => {
  const { t } = useTranslation()
  const { ColorPallet, TextTheme } = useTheme()

  const styles = StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: ColorPallet.brand.modalPrimaryBackground,
      padding: 20,
    },
    controlsContainer: {
      marginTop: 'auto',
      marginHorizontal: 20,
      marginBottom: 108,
    },
  })

  return (
    <Modal visible={visible} animationType="slide">
      <FauxNavigationBar title={t('CredentialDetails.RemoveFromWallet')} />
      <SafeAreaView
        edges={['left', 'right', 'bottom']}
        style={{ backgroundColor: ColorPallet.brand.modalPrimaryBackground }}
      >
        <ScrollView style={[styles.container]}>
          <View>
            <View style={[{ marginBottom: 25 }]}>
              <Text style={[TextTheme.title]}>{t('CredentialDetails.RemoveTitle')}</Text>
            </View>
            <View>
              <Text style={[TextTheme.normal]}>{t('CredentialDetails.RemoveCaption')}</Text>
            </View>
            <View style={{ marginTop: 25 }}>
              <Dropdown
                title={t('CredentialDetails.YouWillNotLose')}
                content={[
                  t('CredentialDetails.YouWillNotLoseListItem1'),
                  t('CredentialDetails.YouWillNotLoseListItem2'),
                ]}
              />
            </View>
            <View style={{ marginTop: 25 }}>
              <Dropdown
                title={t('CredentialDetails.HowToGetThisCredentialBack')}
                content={[t('CredentialDetails.HowToGetThisCredentialBackListItem1')]}
              />
            </View>
          </View>
        </ScrollView>
        <View style={[styles.controlsContainer]}>
          <View style={[{ paddingTop: 10 }]}>
            <Button
              title={t('CredentialDetails.RemoveFromWallet')}
              accessibilityLabel={t('CredentialDetails.RemoveFromWallet')}
              testID={testIdWithKey('ConfirmRemoveButton')}
              onPress={() => onSubmit && onSubmit()}
              buttonType={ButtonType.Critical}
            />
          </View>
          <View style={[{ paddingTop: 10 }]}>
            <Button
              title={t('Global.Cancel')}
              accessibilityLabel={t('Global.Cancel')}
              testID={testIdWithKey('AbortRemoveButton')}
              onPress={() => onCancel && onCancel()}
              buttonType={ButtonType.Secondary}
            />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  )
}

export default CommonDeleteModal

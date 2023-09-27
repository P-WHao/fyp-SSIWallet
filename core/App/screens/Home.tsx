/* eslint-disable prettier/prettier */
import { useAgent } from '@aries-framework/react-hooks'
import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { FlatList, StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import NotificationListItem, { NotificationType } from '../components/listItems/NotificationListItem'
import NoNewUpdates from '../components/misc/NoNewUpdates'
import { useConfiguration } from '../contexts/configuration'
import { useTheme } from '../contexts/theme'
import { useDeepLinks } from '../hooks/deep-links'
import { useNotifications } from '../hooks/notifications'
import { HomeStackParams, Screens, Stacks } from '../types/navigators'
import { connectFromInvitation, getOobDeepLink } from '../utils/helpers'
import { testIdWithKey } from '../utils/testable'

const { width } = Dimensions.get('window')
const offset = 25
const offsetPadding = 5

type HomeProps = StackScreenProps<HomeStackParams, Screens.Home>

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const { agent } = useAgent()
  const { notifications } = useNotifications()
  const { t } = useTranslation()
  const { homeContentView: HomeContentView } = useConfiguration()
  // This syntax is required for the jest mocks to work
  // eslint-disable-next-line import/no-named-as-default-member
  const deepLink = useDeepLinks()
  const { HomeTheme, HomeChatTheme } = useTheme()

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: offset,
    },
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: offset,
    },
    messageContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 35,
      marginHorizontal: offset,
    },
    header: {
      marginTop: offset,
      marginBottom: 20,
    },
    linkContainer: {
      minHeight: HomeTheme.link.fontSize,
      marginTop: 10,
    },
    link: {
      ...HomeTheme.link,
    },
    rowGroup1back: {
      height:70,
      width: 70,
      borderRadius: 64,
      alignSelf: 'flex-end',
      bottom: 0,
      marginRight: 30,
      marginTop: 180,
      position: 'relative',
      backgroundColor: 'rgba(137, 73, 183, 1.0)',
      alignItems: 'center',
      justifyContent: 'center'
    },
    icon: {
    
    },
  })

  useEffect(() => {
    async function handleDeepLink(deepLink: string) {
      try {
        // Try connection based
        const connectionRecord = await connectFromInvitation(deepLink, agent)
        navigation.getParent()?.navigate(Stacks.ConnectionStack, {
          screen: Screens.Connection,
          params: { connectionId: connectionRecord.id },
        })
      } catch {
        try {
          // Try connectionless here
          const message = await getOobDeepLink(deepLink, agent)
          navigation.getParent()?.navigate(Stacks.ConnectionStack, {
            screen: Screens.Connection,
            params: { threadId: message['@id'] },
          })
        } catch (error) {
          //
        }
      }
    }
    if (agent && deepLink) {
      handleDeepLink(deepLink)
    }
  }, [agent, deepLink])

  return (
    <>
      <View>
        <View style={styles.rowContainer}>
          <Text style={[HomeTheme.notificationsHeader, styles.header]}>
            {t('Home.Notifications')}
            {notifications?.length ? ` (${notifications.length})` : ''}
          </Text>
          {notifications?.length > 1 ? (
            <TouchableOpacity
              style={styles.linkContainer}
              activeOpacity={1}
              onPress={() => navigation.navigate(Screens.Notifications)}
            >
              <Text style={styles.link}>{t('Home.SeeAll')}</Text>
            </TouchableOpacity>
          ) : null}
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEnabled={notifications?.length > 0 ? true : false}
          snapToOffsets={[
            0,
            ...Array(notifications?.length)
              .fill(0)
              .map((n: number, i: number) => i * (width - 2 * (offset - offsetPadding)))
              .slice(1),
          ]}
          decelerationRate="fast"
          ListEmptyComponent={() => (
            <View style={{ marginHorizontal: offset, width: width - 2 * offset }}>
              <NoNewUpdates />
              <View style={[styles.messageContainer]}>
                <Text style={[HomeTheme.welcomeHeader, { marginTop: offset, marginBottom: 20 }]}>
                  {t('Home.Welcome')}
                  {'\n'}
                  {t('Home.WelcomeNext')}
                </Text>
              </View>
            </View>
          )}
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <View
              accessible={true}
              style={{
                width: width - 2 * offset,
                marginLeft: !index ? offset : offsetPadding,
                marginRight: index === notifications?.length - 1 ? offset : offsetPadding,
              }}
            >
              {item.type === 'CredentialRecord' ? (
                item.revocationNotification ? (
                  <NotificationListItem notificationType={NotificationType.Revocation} notification={item} />
                ) : (
                  <NotificationListItem notificationType={NotificationType.CredentialOffer} notification={item} />
                )
              ) : (
                <NotificationListItem notificationType={NotificationType.ProofRequest} notification={item} />
              )}
            </View>
          )}
        />
        <HomeContentView />
        <View>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel={t('RootStack.Contacts')}
            testID={testIdWithKey('Contacts')}
            style={styles.rowGroup1back}
            onPress={() =>
              navigation
                .getParent()
                ?.navigate(Stacks.ContactStack, { screen: Screens.Contacts, params: { navigation: navigation } })
            }
            >
            <Icon style={styles.icon} name={'question-answer'} size={40} color={'white'}/>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default Home

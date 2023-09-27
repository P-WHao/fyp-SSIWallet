/* eslint-disable prettier/prettier */
// Do validation connection (NOT WORKING)
// import { StackScreenProps } from '@react-navigation/stack'
// import React, { useEffect, useMemo }from 'react'
// import { View, Text } from 'react-native'
// import { GiftedChat, IMessage } from 'react-native-gifted-chat'

// import { useNetwork } from '../contexts/network'
// import { useTheme } from '../contexts/theme'
// import { Screens, EditProfileStackParams, Stacks } from '../types/navigators'

// type EditProfileProps = StackScreenProps<EditProfileStackParams>

// const EditProfile: React.FC<EditProfileProps> = ({navigation}) => {
//   const { ColorPallet, TextTheme } = useTheme()
//   const { assertConnectedNetwork, silentAssertConnectedNetwork } = useNetwork()

//   useMemo(() => {
//     assertConnectedNetwork()
//   }, [])

//   useEffect(() => {
//     if (!assertConnectedNetwork()) {
//       return
//     }
//     navigation.navigate(Screens.AboutUs)
    
//   })

//   return (
//     <View
//       style={{
//         marginTop: 50,
//         marginHorizontal: 20,
//         borderColor: ColorPallet.brand.primary,
//         borderWidth: 1,
//         borderRadius: 3,
//       }}
//     >
//       <Text style={[TextTheme.normal, { margin: 10 }]}>
//         Place content here you would like to make available to developers when developer mode is enabled.
//       </Text>
//     </View>
//   )
//   // <GiftedChat
//   //     disableComposer={!silentAssertConnectedNetwork()}
//   //     user={{
//   //       _id: 'sender',
//   //     }}
//   //   />
// }

// export default EditProfile

import React from 'react'
import { View, Text } from 'react-native'

import { useTheme } from '../contexts/theme'

const EditProfile: React.FC = () => {
  const { ColorPallet, TextTheme } = useTheme()
  return (
    <View
      style={{
        marginTop: 50,
        marginHorizontal: 20,
        borderColor: ColorPallet.brand.primary,
        borderWidth: 1,
        borderRadius: 3,
      }}
    >
      <Text style={[TextTheme.normal, { margin: 10 }]}>
        Place content here you would like to make available to developers when developer mode is enabled.
      </Text>
    </View>
  )
}

export default EditProfile

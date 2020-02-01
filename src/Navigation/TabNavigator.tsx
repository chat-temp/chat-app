import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { AntDesign } from '@expo/vector-icons'

// Screens
import Home from '../screens/Home'
import Settings from '../screens/Setting'
import Profile from '../screens/Profile'

const AppNavigation = createBottomTabNavigator(
  { Home, Settings, Profile },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let IconComponent = AntDesign
        let iconName

        switch (routeName) {
          case 'Home':
            iconName = focused ? 'home' : 'home'
            // Sometimes we want to add badges to some icons.
            // You can check the implementation below.
            // IconComponent = HomeIconWithBadge
            break
          case 'Settings':
            iconName = focused ? 'setting' : 'setting'
            break
          case 'Profile':
            iconName = focused ? 'user' : 'user'
            break
          default:
            break
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
)

export default AppNavigation

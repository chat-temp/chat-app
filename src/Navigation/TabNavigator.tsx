import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { AntDesign, Ionicons } from '@expo/vector-icons'

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
            iconName = 'home'
            // focused && (IconComponent = Ionicons)
            break
          case 'Settings':
            iconName = 'setting'
            // focused && (IconComponent = Ionicons)

            break
          case 'Profile':
            iconName = 'user'
            // focused && (IconComponent = Ionicons)

            break
          default:
            break
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />
      },
    }),
    tabBarOptions: {
      inactiveTintColor: '#26547C',
      activeTintColor: '#59C3C3',
    },
  },
)

export default AppNavigation

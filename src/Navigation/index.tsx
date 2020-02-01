import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import TabNavigator from './TabNavigator'
import AuthNavigator from './AuthNavigator'
import Loading from '../screens/Loading'

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading,
      App: TabNavigator,
      Auth: AuthNavigator,
    },
    {
      initialRouteName: 'Loading',
    },
  ),
)

import { createStackNavigator } from 'react-navigation-stack'

import Welcome from '../screens/Welcome'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'

export default createStackNavigator(
  { Welcome, SignIn, SignUp },
  {
    headerMode: 'none',
  },
)

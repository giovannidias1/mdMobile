import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import CreatePost from '../pages/CreatePost';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator screenOptions={{headerShown: false}}>
    <AppStack.Screen
      name="Feed"
      component={Dashboard}
      options={{
        headerStyle: {
          backgroundColor: '#6272a4',
        },
      }}
    />
    <AppStack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerStyle: {
          backgroundColor: '#6272a4',
        },
      }}
    />
    <AppStack.Screen
    name="CreatePost"
    component={CreatePost}
    options={{
      headerStyle: {
        backgroundColor: '#6272a4',
      },
    }}
  />
  </AppStack.Navigator>
);

export default AppRoutes;

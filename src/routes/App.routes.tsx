import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {Drawer} from './Drawer'

const AppRoutes: React.FC = () => {
    return (
      <NavigationContainer >
          <Drawer/>
      </NavigationContainer>
)}



export {AppRoutes}

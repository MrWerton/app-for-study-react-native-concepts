import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerItemList } from '@react-navigation/drawer';
import Home from '../../screens/Home';
import Artist from '../../screens/Artist';
import Popular from '../../screens/Popular';
import MyMusic from '../../screens/MyMusic';
import { Ionicons,MaterialIcons, AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons'; 
import {HeaderBackground} from '@react-navigation/elements'
import { TouchableOpacity } from 'react-native-gesture-handler';


import { Scroll , NavContainer, ProfileContainer,Wrapper, ImageUser, Name, CloseApp, Title, Icon} from './styles';


export type ParamsProps = {
  Home: undefined;
  Artist: undefined;
  Popular: undefined;
  MyMusic: undefined;
};
const {Screen, Navigator} = createDrawerNavigator<ParamsProps>();

export const Stack:React.FC = () => {
    return (
        <Navigator
            screenOptions={({ navigation }) => ({
                drawerType: 'slide',
                drawerInactiveTintColor: '#ddd',
                drawerActiveTintColor: '#0dac35',
                drawerLabelStyle:{color: '#ddd'},
                drawerStyle: {
                  borderTopRightRadius: 150,  
                  backgroundColor: '#111'   
                },
                headerTintColor:'#0dac35',
                headerTitleStyle:{fontSize: 26, fontWeight: 'bold'},
                headerTitleAlign: 'center',
                headerTitleContainerStyle:{
                  alignItems: 'center'
                },
                headerStyle:{
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                },
                headerBackground: ()=><HeaderBackground style={{borderBottomWidth:0, alignItems:'center', backgroundColor: '#070707' }} />,
                headerRight: () => <Feather style={{paddingRight: 20}}  name="search" size={30} color="#0dac35" />,
                headerLeft: () => (
                    <TouchableOpacity onPress={()=>{
                        navigation.toggleDrawer();}}>
                        <MaterialIcons style={{paddingLeft: 20}} name="menu-open" size={34} color="#0dac35" />
                    </TouchableOpacity>
                ),
            })}
               drawerContent={(props) => <NavBar {...props}           
            />}>
                <Screen 
                name="Home" 
                component={Home}
                options={{
                    drawerIcon: ({color}) => (
                    <Ionicons name="home-outline" size={22} color={color} />)}}/>
                <Screen 
                name="Artist" 
                component={Artist}
                options={{
                    drawerIcon: ({color}) => (
                    <FontAwesome5 name="user" size={24} color={color} />)}}/>
                <Screen 
                name="Popular" 
                component={Popular}
                options={{
                    drawerIcon: ({color}) => (
                    <Feather name="trending-up" size={24} color={color} />)}}/>
                <Screen 
                name="MyMusic" 
                component={MyMusic}
                options={{
                    drawerIcon: ({color}) => (
                    <AntDesign name="hearto" size={24} color={color} />),}}/>
      </Navigator>
    )
}


const NavBar: React.FC<DrawerContentComponentProps> = (props) => {
    return (
      <Scroll contentContainerStyle={{flex: 1, justifyContent: 'space-between'}}>
        <NavContainer>
        <ProfileContainer>
          <Wrapper>
            <ImageUser source={{uri: 'https://github.com/mrwerton.png'}}/>
          </Wrapper>
           <Name>
              Werton
           </Name>
        </ProfileContainer>
          <DrawerItemList {...props} />
        </NavContainer>
       <CloseApp onPress={()=>props.navigation.navigate('Home')}>
          <Icon name="logout" size={24} color="#ddd" />
          <Title>
            Close
          </Title>
       </CloseApp>
   </Scroll>
    );
  };



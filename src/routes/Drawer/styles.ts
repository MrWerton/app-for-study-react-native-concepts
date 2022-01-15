import styled from 'styled-components/native';
import {DrawerContentScrollView} from '@react-navigation/drawer'
import { AntDesign } from '@expo/vector-icons';
export const Scroll = styled(DrawerContentScrollView)`
    border-top-right-radius:100px ;
`;
export const ProfileContainer = styled.View`
    align-items: center;
    justify-content: center;
    height: 150px;
    
`;
export const Wrapper = styled.View`
    width: 75px;
    padding: 4px;
    background-color: #0dac35;
    height: 75px;
    border-radius: 37.5px;
    align-items: center;
    justify-content: center;
`;
export const ImageUser = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 35px;
`;
export const Name = styled.Text`
    margin-top: 10px;
    font-weight: bold;
    font-size: 18px;
    color: #ddd;
`;
export const NavContainer = styled.View`

`;
export const CloseApp = styled.TouchableOpacity`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 20px;

`

export const Icon = styled(AntDesign)`
    transform: scale(-1);
    
`
export const Title = styled.Text`
    font-size: 16px;
    margin-left: 30px;
    color: #ddd;
   

`
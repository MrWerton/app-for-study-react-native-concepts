import styled from 'styled-components/native';
import {getStatusBarHeight, getBottomSpace} from 'react-native-iphone-x-helper'




export const Scroll = styled.ScrollView`
flex: 1;
padding: 20px;
background-color: #000;

`;
export const Container = styled.View`
    height: 100%;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: ${getBottomSpace() + 20}px;
`;

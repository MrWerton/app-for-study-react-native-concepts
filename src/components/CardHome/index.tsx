import { View } from 'react-native';

import { Container, Content, Songs, Image,Icon,Options ,Title } from './styles';
import {  AntDesign,  } from '@expo/vector-icons'; 
interface Icard{
  title: string,
  icon: string,
  NumSongs: string
}

export const CardHome: React.FC<Icard> = ({title, icon, NumSongs}) => {
  return (
      <Container activeOpacity={.8} style={{
        shadowColor: "#0dac35",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}>
        <Content>
          <Image source={{uri: icon}}/>
          <View>
            <Title>{title}</Title>
            <Songs>{NumSongs}</Songs>
          </View>
        </Content>
        <Options>
            <Icon>
            <AntDesign name="banckward" size={24} color="#0dac35" />
              </Icon> 
            <Icon>
            <AntDesign name="caretright" size={24} color="#0dac35" />
              </Icon> 
            <Icon>
            <AntDesign name="forward" size={24} color="#0dac35" />
              </Icon> 
              
           
        </Options>
      </Container>


  );
};


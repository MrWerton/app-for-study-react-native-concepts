import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    flex-direction: row;
    padding: 20px;
    width: 100%;
    min-height: 00px;
    margin-bottom: 10px;
    background-color: #111;
    border-radius: 10px;
 
`;

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
export const Image = styled.Image`
   margin-right: 20px;
   width: 55px;
   height: 55px;
   border-radius: 10.5px;
  
`;
export const Icon = styled.TouchableOpacity`
    padding: 5px;  
`;
export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #ddd;
  margin-bottom: 5px;
`;
export const Songs = styled.Text`
  font-size: 16px;
  color: #ccc;
`;
export const Options = styled.Text`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

import { Image } from 'react-native';
import { View } from 'react-native';
import Recomendation from '../../components/Recomendation';

const Home: React.FC = () => {
  return (
    <>
      <View style={{backgroundColor:'#000000', width: '100%', height:320, alignItems: 'center', justifyContent: 'center', padding: 10}}>
        <View style={{
           shadowColor: "#0dac35",
           shadowOffset: {
             width: 2,
             height: 2,
           },
           shadowOpacity: 0.5,
           shadowRadius: 15.84,
           elevation: 15,
          borderRadius: 160, width: 300, height: 300, alignItems: 'center', justifyContent: 'center', backgroundColor:'#0a0a0a', padding: 10}}>
        <Image style={{width: '100%', height: '100%', borderRadius: 200}} source={{uri: 'https://m.media-amazon.com/images/I/81nFF-rXdRL._AC_SL1500_.jpg'}}/>
        </View>
      </View>
     <Recomendation />
    </>
  );
};

export default Home;

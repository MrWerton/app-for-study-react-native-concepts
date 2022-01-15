import { FlatList, Text } from 'react-native';
import {MooksCard} from '../../mooks/MooksCard'
import { Container } from './styles';
import {CardHome} from '../../components/CardHome'
const Recomendation: React.FC = () => {

  return (
    <Container>
     <FlatList showsHorizontalScrollIndicator={false}
        data={MooksCard}
        renderItem={({item})=>
          <CardHome title={item.title} icon={item.icon} NumSongs={item.numSong}/>
        }
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};

export default Recomendation;

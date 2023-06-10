import { CoffeeList } from './components/CoffeeList';
import { Features } from './components/Features';
import { HomeContainer } from './styles';

const Home = () => {
  return (
    <HomeContainer>
      <Features />

      <CoffeeList />
    </HomeContainer>
  );
};

export default Home;

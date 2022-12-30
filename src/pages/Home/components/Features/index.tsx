import { Cafe, Cart, Cube, Time } from 'react-ionicons';
import { defaultTheme } from '../../../../styles/themes/default';
import { Content, ContentFeatures, FeaturesContainer } from './styles';

const { colors } = defaultTheme;

export const Features = () => {
  return (
    <FeaturesContainer>
      <Content>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>

        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <ContentFeatures>
          <p>
            <Cart color={colors.white} />
            Compra simples e segura
          </p>

          <p>
            <Cube color={colors.white} />
            Embalagem mantém o café intacto
          </p>

          <p>
            <Time color={colors.white} />
            Entrega rápida e rastreada
          </p>

          <p>
            <Cafe color={colors.white} />O café chega fresquinho até você
          </p>
        </ContentFeatures>
      </Content>

      <img
        src="/copo-de-cafe.png"
        alt="Copo de café com grãos de café no fundo"
      />
    </FeaturesContainer>
  );
};

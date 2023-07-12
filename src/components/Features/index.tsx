import { Cafe, Cart, Cube } from 'react-ionicons';
import { Icon } from '~/components/Icon';
import { defaultTheme } from '~/styles/themes/default';
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
            <Icon
              icon={Cart}
              size={16}
              backgroundColor={colors['primary-700']}
            />
            Compra simples e segura
          </p>

          <p>
            <Icon icon={Cube} size={16} backgroundColor={colors['gray-700']} />
            Embalagem mantém o café intacto
          </p>

          <p>
            <Icon
              icon={Cube}
              size={16}
              backgroundColor={colors['primary-500']}
            />
            Entrega rápida e rastreada
          </p>

          <p>
            <Icon
              icon={Cafe}
              size={16}
              backgroundColor={colors['secondary-500']}
            />
            O café chega fresquinho até você
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

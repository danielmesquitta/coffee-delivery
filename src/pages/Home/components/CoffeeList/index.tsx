import { Add, Cart, Remove } from 'react-ionicons';
import { defaultTheme } from '../../../../styles/themes/default';
import { coffees } from './data';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTags,
  CoffeeListContainer,
  Controller,
} from './styles';

const { colors } = defaultTheme;

export const CoffeeList = () => {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>

      <ul>
        {coffees.map(({ id, imageSrc, tags, title, description, price }) => (
          <Card key={id}>
            <CardHeader>
              <img src={imageSrc} alt={`Xícara de ${title}`} />

              <CardTags>
                {tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </CardTags>
            </CardHeader>

            <CardContent>
              <strong>{title}</strong>

              <p>{description}</p>
            </CardContent>

            <CardFooter>
              <p>
                <small>R$</small> {price}
              </p>

              <Controller>
                <button>
                  <Remove width="0.875rem" color={colors['secondary-500']} />
                </button>
                <input type="number" placeholder="0" />
                <button>
                  <Add width="0.875rem" color={colors['secondary-500']} />
                </button>
              </Controller>

              <button>
                <Cart width="1.375rem" color={colors['gray-200']} />
              </button>
            </CardFooter>
          </Card>
        ))}
      </ul>
    </CoffeeListContainer>
  );
};

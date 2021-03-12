import  React from 'react';
import { Feather, Ionicons } from '@expo/vector-icons'
import {
    Container,
    Banner,
    Tags,
    MenuTag,
    Separator,
    MenuHero,
    Button,
    TextButton,
    Play,
    TextButtonPlay
} from './styles';

const Hero: React.FC = () => {    
    return (
        <Container>
            <Banner resizeMode='contain' source={require('../../assets/hero.png')} />
            <Tags>
				<MenuTag>Envolvente</MenuTag>
				<Separator />
				<MenuTag>Empolgantes</MenuTag>
			</Tags>
            <MenuHero>
				<Button>
					<Feather name='star' size={24} color='#FFF' />
					<TextButton>Favoritos</TextButton>
				</Button>

				<Play>
					<Ionicons name='ios-play' size={26} />
					<TextButtonPlay>Assistir</TextButtonPlay>
				</Play>

				<Button>
					<Feather name='info' size={22} color='#FFF' />
					<TextButton>Saiba mais</TextButton>
				</Button>
			</MenuHero>
        </Container>
    );
}

export default Hero;
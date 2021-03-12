import  React from 'react';
import { Container, Logo, Button, Menu } from './styles';

const Header: React.FC = () => {    
    return (
        <Container>
            <Button><Menu>Séries</Menu></Button>
            <Button><Menu>Filmes</Menu></Button>
            <Button><Menu>Favoritos</Menu></Button>
        </Container>
    );
}

export default Header;
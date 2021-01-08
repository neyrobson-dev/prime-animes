import  React from 'react';
import { Container, Option, Title, Img } from './styles';

const Categories: React.FC = ({ children }) => {    
    return(
        <Container>
            {children.map((item) => (
                <Option key={item.id}>                    
                    <Img source={{ uri: `http://cdn.appanimeplus.tk/img/${item.category_image}`, width: 135, height: 189 }} />
                    <Title>{ ((item.category_name).length > 35) ?
                        (((item.category_name).substring(0, 35-3)) + '...') :
                        item.category_name }
                    </Title>
                </Option>
            ))}
        </Container>
    );
}

export default Categories;
import  React from 'react';
import { Container, Option, Title, Img } from './styles';

const Tips: React.FC = ({ children }) => {    
    return(
        <Container>
            {children.map((item) => (
                <Option key={item.category_id}>                    
                    <Img source={{ uri: `http://cdn.appanimeplus.tk/img/${item.category_image}`, width: 135, height: 189 }} />
                    <Title>{ ((item.title).length > 35) ?
                        (((item.title).substring(0, 35-3)) + '...') :
                        item.title }
                    </Title>
                </Option>
            ))}
        </Container>
    );
}

export default Tips;
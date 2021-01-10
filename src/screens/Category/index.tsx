import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import {
  Wrapper,
  Header,
  HeaderText,
  Container,
  CategoryList,
  CategoryItem,
  CategoryItemTitle,
} from './styles';

const Category: React.FC = () => {
  const { navigate } = useNavigation();
  const categories = [
    {
      name: "Aventura",
      slug: "aventura",
    },
    {
      name: "Ação",
      slug: "acao",
    },
    {
      name: "Comédia",
      slug: "comedia",
    },
    {
      name: "Drama",
      slug: "drama",
    },
    {
      name: "Dublado",
      slug: "dublado",
    },
    {
      name: "Echi",
      slug: "ecchi",
    },
    {
      name: "Escolar",
      slug: "escolar",
    },
    {
      name: "Esporte",
      slug: "esporte",
    },
    {
      name: "Fantasia",
      slug: "fantasia",
    },
    {
      name: "Filme",
      slug: "filme",
    },
    {
      name: "Harém",
      slug: "harem",
    },
    {
      name: "Histórico",
      slug: "historico",
    },
    {
      name: "Jogo",
      slug: "jogo",
    },
    {
      name: "Josei",
      slug: "josei",
    },
    {
      name: "Magia",
      slug: "magia",
    },
    {
      name: "Mecha",
      slug: "mecha",
    },
    {
      name: "Militar",
      slug: "militar",
    },
    {
      name: "Mistério",
      slug: "misterio",
    },
    {
      name: "OVA",
      slug: "ova",
    },
    {
      name: "Poderes",
      slug: "poderes",
    },
    {
      name: "Psicologico",
      slug: "psicologico",
    },
    {
      name: "Romance",
      slug: "romance",
    },
    {
      name: "Samurai",
      slug: "samurai",
    },
    {
      name: "SCI-FI",
      slug: "sci-fi",
    },
    {
      name: "Seinen",
      slug: "seinen",
    },
    {
      name: "Shoujo",
      slug: "shoujo",
    },
    {
      name: "Shounen",
      slug: "shounen",
    },
    {
      name: "Slice of Life",
      slug: "slice_of_life",
    },
    {
      name: "Sobrenatural",
      slug: "sobrenatural",
    },
    {
      name: "Suspense",
      slug: "suspense",
    },
    {
      name: "Terror",
      slug: "terror",
    },
    {
      name: "Yaoi",
      slug: "yaoi",
    },
    {
      name: "Yuri",
      slug: "yuri",
    }
  ];

  const navigateToListCategory = useCallback((name, slug) => {
    navigate('ListCategory', { name: name, slug: slug });
  }, [navigate]);

  return (
    <Wrapper>
      <Header>
        <HeaderText>Prime Animes</HeaderText>
      </Header>
      <Container>
        <CategoryList>
          {categories.map((item) => (
            <CategoryItem key={item.slug} onPress={() => { navigateToListCategory(item.name, item.slug) }}>                    
              <CategoryItemTitle>{item.name}</CategoryItemTitle>
            </CategoryItem>
          ))}
        </CategoryList>
      </Container>
    </Wrapper>
  );
};

export default Category;

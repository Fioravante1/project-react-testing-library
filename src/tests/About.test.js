import React from 'react';
import renderWithRouter from '../components/renderWithRouter';
import About from '../components/About';

describe('Testa o componente About', () => {
  test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    const { getByRole } = renderWithRouter(<About />);
    const heading = getByRole('heading', { level: 2 });

    expect(heading).toHaveTextContent('About Pokédex');
  });
});

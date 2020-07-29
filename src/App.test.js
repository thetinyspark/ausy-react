import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe(
  "We are testing the App component",

  () => {

    beforeEach( 
      () => {
        console.log("execute before each test");
      }
    );

    test(
      'We expect <Header /> component to be in the document',
      () => {
        const { getByText } = render(<App />);
        const headerElement = getByText(/Mon super shop Ausy/i);
        expect(headerElement).toBeInTheDocument();
      }
    );


    test(
      'We expect <Menu /> component to be in the document',
      () => {
        const { getByText } = render(<App />);
        const homeLink = getByText(/Home/i);
        const catalogLink = getByText(/Catalogue/i);
        const cartLink = getByText(/Mon panier/i);
        expect(homeLink).toBeInTheDocument();
        expect(catalogLink).toBeInTheDocument();
        expect(cartLink).toBeInTheDocument();
      }
    );
  }


)

import React from 'react';
import styled from 'styled-components';

import QuoteForm from './components/QuoteForm.js';

const Main = styled.main`
  text-align: center;
  background-color: #0d1337;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default () => (
  <Main>
    <QuoteForm />
  </Main>
);

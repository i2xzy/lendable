import React from 'react';
import ReactDOM from 'react-dom';
import QuoteForm from './QuoteForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuoteForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

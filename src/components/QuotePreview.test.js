import React from 'react';
import ReactDOM from 'react-dom';
import QuotePreview from './QuotePreview';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuotePreview />, div);
  ReactDOM.unmountComponentAtNode(div);
});

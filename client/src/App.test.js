import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('toggle button exists', () => {
  const expected = render(<App/>);
  expected.getByText(/Toggle Dark Mode/i)
});

test('players are rendered, API data returning', () => {
  const expected = render(<App/>);
  expected.getByText(/players/i)
});
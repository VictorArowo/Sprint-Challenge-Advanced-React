var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import PlayerData from '../../components/PlayerData';
var mock = new MockAdapter(axios);

let tools;
mock.onGet('/api/players').reply(200, {
  users: [
    { name: 'Alex Morgan', country: 'United States', searches: 100, id: 0 }
  ]
});

beforeEach(() => {
  rtl.cleanup();

  axios.get('/api/players').then(function(response) {
    tools = rtl.render(<PlayerData data={response.data.users[0]} />);
  });
});

describe('PlayerData api', () => {
  it('can debug the output', () => {
    tools.debug();
  });

  it('shows the correct user', () => {
    const nameElement = tools.queryByText(/Alex Morgan/i);
    expect(nameElement).toBeInTheDocument();
  });

  it('shows the correct searches', () => {
    const searchElement = tools.queryByText(/100/);
    expect(searchElement).toBeInTheDocument();
  });
  it('shows the correct id', () => {
    const idElement = tools.queryByText(/0/);
    expect(idElement).toBeInTheDocument();
  });
});

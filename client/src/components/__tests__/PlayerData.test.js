import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import PlayerData from '../PlayerData';

let tools;

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(
    <PlayerData data={{ name: 'Test', country: 'Nigeria', searches: 100 }} />
  );
});

describe('PlayerData component', () => {
  it('can debug the output', () => {
    tools.debug();
  });

  it('shows the correct user', () => {
    const elementWithName = tools.queryByText(/Test/i);
    expect(elementWithName).toBeInTheDocument();
  });
});

jest.mock('axios', () => {
  return () => ({
    name: 'Alex Morgan',
    country: 'United States',
    searches: 100,
    id: 0
  });
});

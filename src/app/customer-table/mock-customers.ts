// mock-customers.ts

export const MOCK_CUSTOMERS = Array.from({ length: 240 }, (_, index) => ({
  check: false,
  name: `Customer${index + 1}`,
  location: `Location${index + 1}`,
  orders: index + 1,
  spent: `$${(index + 1) * 10}`,
}));

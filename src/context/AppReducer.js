export default (state, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case 'DELETE':
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

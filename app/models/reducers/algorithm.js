const initialState = {
  type: 'all'
};

const ChangeNumber = (state = initialState, action) => {
  switch (action.type) {
    case 'updateProficiency':
      return {
        ...state,
        type: action.type
      };
    default:
      return state;
  }
};

export default ChangeNumber;

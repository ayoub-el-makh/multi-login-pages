const ADD_INFO = "addInfo";
const NEXT_STEP = "nextStep";
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_INFO:
      return { ...state, info: action.payload.info };
    case NEXT_STEP: return {...state, step: (state.step + action.payload.step)}
    default:
      return state;
  }
};

export {ADD_INFO, reducer, NEXT_STEP};

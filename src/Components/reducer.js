const ADD_INFO = "addInfo";
const NEXT_STEP = "nextStep";
const ADD_SUBSCRIPTION = "addSubscription";
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_INFO:
      return { ...state, info: action.payload.info };
    case NEXT_STEP:
      return { ...state, step: state.step + action.payload.step };
    case ADD_SUBSCRIPTION:
      return { ...state, subscription: action.payload.subscription };
    default:
      return state;
  }
};

export { ADD_INFO, reducer, NEXT_STEP, ADD_SUBSCRIPTION };

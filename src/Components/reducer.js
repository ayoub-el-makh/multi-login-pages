const ADD_INFO = "addInfo";
const NEXT_STEP = "nextStep";
const ADD_SUBSCRIPTION = "addSubscription";
const ADD_SERVICES = "addServices";
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_INFO:
      return { ...state, info: action.payload.info };
    case NEXT_STEP:
      return { ...state, step: state.step + action.payload.step };
    case ADD_SUBSCRIPTION:
      return { ...state, subscription: action.payload.subscription };
    case ADD_SERVICES:
      return { ...state, services: action.payload.services };
    default:
      return state;
  }
};

export { ADD_INFO, reducer, NEXT_STEP, ADD_SUBSCRIPTION, ADD_SERVICES };

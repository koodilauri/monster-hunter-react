
const INITIAL_STATE = {
  runtimes: [],
  loading: false
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_RUNTIME_REQUEST":
      return Object.assign({}, state, { loading: true });
    case "GET_RUNTIME_SUCCESS":
      return {
        runtimes: action.payload,
        loading: false,
      };
    case "GET_RUNTIME_FAIL":
      return Object.assign({}, state, { loading: false });
    default:
      return state;
  }
}
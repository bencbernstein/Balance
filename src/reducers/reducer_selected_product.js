import { FETCH_SELECTED_PRODUCT} from '../actions/index';

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
  case FETCH_SELECTED_PRODUCT:
    // new object, current state, add in everything
    return { ...state, all: action.payload.data }
  default:
    return state
  }
}
